export type ChefStatus = "active" | "eliminated" | "surviving";

export type ChefProfile = {
  id: string;
  slug: string;
  name: {
    ko: string;
    en: string;
  };
  profile: {
    image: {
      src: string;
      alt: string;
      credit: string;
      license: "editorial" | "commercial" | "unknown";
    };
    oneLiner: string;
    bio: string;
    specialties: string[];
    tags: string[];
  };
  affiliation: {
    restaurants: Array<{
      id: string;
      name: string;
      status: "operating" | "closed" | "renovating" | "unknown";
      role: string;
      address: {
        country: string;
        city: string;
        area: string | null;
        full: string;
      };
      map: {
        lat: number | null;
        lng: number | null;
        provider: "google" | "naver" | "kakao" | "apple" | "unknown";
        placeId: string | null;
        url: string;
      };
      openedAt: string | null;
      closedAt: string | null;
    }>;
  };
  appearance: {
    shows: Array<{
      title: string;
      season: number | null;
      role: string;
    }>;
  };
  relations: Record<
    string,
    {
      type: string;
      direction?: "outgoing" | "incoming" | "bidirectional" | "both";
      since?: string;
      until?: string | null;
      context: string;
      confidence: "high" | "medium" | "low" | "unknown";
      tags?: string[];
      sources?: Array<{
        label: string;
        url: string;
        accessedAt: string;
      }>;
    }
  >;
  search: {
    keywords: string[];
    aliases: string[];
    synonyms: {
      ko: string[];
      en: string[];
    };
    normalized: string;
  };
  links: {
    official: string[];
    social: {
      instagram: string | null;
      youtube: string | null;
      tiktok: string | null;
    };
  };
  sources: Array<{
    label: string;
    url: string;
    accessedAt: string;
  }>;
  meta: {
    createdAt: string;
    updatedAt: string;
    version: number;
  };
};
