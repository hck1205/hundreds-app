import { useEffect, useRef } from "react";
import { MapBox } from "../AppShell/AppShell.styled";

type KakaoMapProps = {
  address: string;
  title: string;
};

const DEFAULT_CENTER = { lat: 37.5665, lng: 126.9780 };
const KAKAO_SDK_URL =
  "https://dapi.kakao.com/v2/maps/sdk.js?appkey=18515d6f8bad86ab177047e09aa6b906&libraries=services&autoload=false";

let kakaoSdkPromise: Promise<void> | null = null;

const loadKakaoSdk = () => {
  if (window.kakao?.maps) {
    return Promise.resolve();
  }

  if (kakaoSdkPromise) {
    return kakaoSdkPromise;
  }

  kakaoSdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = KAKAO_SDK_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("카카오맵 SDK 로드 실패"));
    document.head.appendChild(script);
  });

  return kakaoSdkPromise;
};

export default function KakaoMap({ address, title }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    let cancelled = false;

    loadKakaoSdk()
      .then(() => {
        if (cancelled || !mapRef.current || !window.kakao?.maps) {
          return;
        }

        window.kakao.maps.load(() => {
          if (!mapRef.current) {
            return;
          }

        const map = new window.kakao.maps.Map(mapRef.current, {
          center: new window.kakao.maps.LatLng(DEFAULT_CENTER.lat, DEFAULT_CENTER.lng),
          level: 3,
        });

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result: Array<{ x: string; y: string }>, status: string) => {
          if (status !== window.kakao.maps.services.Status.OK || result.length === 0) {
            setTimeout(() => {
              map.relayout();
            }, 100);
            return;
          }

          const { x, y } = result[0];
          const position = new window.kakao.maps.LatLng(Number(y), Number(x));
          const marker = new window.kakao.maps.Marker({ position });
          marker.setMap(map);
          map.setCenter(position);
          setTimeout(() => {
            map.relayout();
          }, 100);
        });
        });
      })
      .catch(() => {
        // SDK 로드 실패 시 무시
      });

    return () => {
      cancelled = true;
    };
  }, [address]);

  return <MapBox ref={mapRef} aria-label={`${title} 지도`} role="img" />;
}
