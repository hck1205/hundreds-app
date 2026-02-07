import { ComponentType, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundApp from "../apps/NotFoundApp";
import type { AppManifestItem } from "../apps/manifest-types";

const modules = import.meta.glob("../apps/*/App.tsx");
const manifestModules = import.meta.glob("../apps/*/manifest.ts", { eager: true });

const manifestBySlug = Object.values(manifestModules).reduce(
  (acc, module) => {
    const manifest = (module as { default: AppManifestItem }).default;
    if (manifest) {
      acc[manifest.slug] = manifest;
    }
    return acc;
  },
  {} as Record<string, AppManifestItem>
);

type AppModule = { default: ComponentType };

type AppLoader = () => Promise<AppModule>;

type LoadState =
  | { status: "idle" | "loading" }
  | { status: "loaded"; Component: ComponentType }
  | { status: "error" };

export default function AppShell() {
  const { slug } = useParams();
  const [state, setState] = useState<LoadState>({ status: "idle" });

  const loader = useMemo(() => {
    if (!slug) {
      return null;
    }

    const key = `../apps/${slug}/App.tsx`;
    return (modules[key] as AppLoader | undefined) ?? null;
  }, [slug]);

  useEffect(() => {
    let active = true;

    if (!loader) {
      setState({ status: "error" });
      return () => {
        active = false;
      };
    }

    setState({ status: "loading" });
    loader()
      .then((module) => {
        if (!active) {
          return;
        }
        setState({ status: "loaded", Component: module.default });
      })
      .catch(() => {
        if (!active) {
          return;
        }
        setState({ status: "error" });
      });

    return () => {
      active = false;
    };
  }, [loader]);

  useEffect(() => {
    if (!slug) {
      return;
    }

    const manifest = manifestBySlug[slug];
    document.title = manifest?.name ?? "앱을 찾을 수 없습니다";
  }, [slug]);

  if (state.status === "loading" || state.status === "idle") {
    return <div aria-live="polite">페이지를 불러오는 중...</div>;
  }

  if (state.status === "error") {
    return <NotFoundApp />;
  }

  const LoadedApp = state.Component;
  return <LoadedApp />;
}
