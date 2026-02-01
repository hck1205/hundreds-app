import type { InfoCategory } from "../../../atom/infoDetailAtom";

export type InfoDetail = {
  title: string;
  category: InfoCategory;
  why: string;
  caution: string;
  tests: string;
  tips?: string;
};
