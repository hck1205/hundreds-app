export const statusLabel = {
  active: "활동 중",
  eliminated: "탈락",
  surviving: "생존",
} as const;

export const restaurantStatusLabel = {
  operating: "운영 중",
  closed: "폐업",
  renovating: "리뉴얼 중",
  unknown: "확인 중",
} as const;

export const relationTypeLabel = {
  mentor: "멘토",
  "appeared-with": "동반 출연",
  colleague: "동료",
} as const;

export const roleLabel = {
  "owner-chef": "오너 셰프",
  "founder-chef": "창립 셰프",
  "chef-owner": "셰프 오너",
  participant: "참가자",
  winner: "우승자",
  "panel chef": "패널 셰프",
  judge: "심사위원",
  host: "진행",
  guest: "게스트",
} as const;

export const confidenceLabel = {
  high: "높음",
  medium: "보통",
  low: "낮음",
  unknown: "확인 중",
} as const;

export const translateLabel: Record<string, string> = {
  Korean: "한식",
  Italian: "이탈리안",
  "Fine Dining": "파인다이닝",
  Course: "코스",
  Noodles: "면",
  career: "커리어",
  restaurant: "레스토랑",
  Seoul: "서울",
  Gangnam: "강남",
  Jeju: "제주",
  "Aewol-eup": "애월읍",
  "Japanese-inspired": "일식 기반",
  "Rice Bowls": "덮밥",
  Seasonal: "제철",
  "Plant-based": "플랜트 베이스",
  Vegetables: "채소",
  vegan: "비건",
  vegetarian: "채식",
  "italian cuisine": "이탈리안",
  Gangneung: "강릉",
  "Seongdong-gu": "성동구",
  "Ponam-dong": "포남동",
  "European Desserts": "유럽 디저트",
  "French & Belgian Cuisine": "프렌치·벨기에 요리",
  "Creative Fusion": "창작 퓨전",
  "Wine Pairing": "와인 페어링",
  "Jongno-gu": "종로구",
  "Modern European": "모던 유러피안",
  Fusion: "퓨전",
  "Creative Cuisine": "창작 요리",
  "Chef Choi": "셰프 최",
  "Culinary Class Wars": "흑백요리사",
};

export const humanize = (value: string) => translateLabel[value] ?? value;
