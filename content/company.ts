// 회사 정보: 여기만 채우면 사이트 전체에 반영됩니다.
// "(등록 예정)"은 아직 정해지지 않은 값입니다.
export const TBD = "(등록 예정)";

export const company = {
  nameKo: "토리랩스",
  nameEn: "Tory Labs",
  domain: "https://torylabs.dev",
  email: "su@torylabs.dev",
  ceo: TBD, // TODO: 대표자 성명
  bizNumber: TBD, // TODO: 사업자등록번호 (000-00-00000)
  address: TBD, // TODO: 사업장 주소
  github: "https://github.com/su-record",
};

export const founder = {
  title: "대표 su",
  name: "", // TODO: 대표 성명
  bioKo: "", // TODO: 대표 소개 (국문)
  bioEn: "", // TODO: Founder bio (English)
  photo: "", // TODO: /public 아래 사진 경로, 예: "/founder.jpg"
};

// 연혁: 사실만 기록합니다.
// TODO: 법인/사업자 설립일, 추가 제품 출시 등 확정되면 추가
export const history = [
  { year: "2026", ko: "voin v0.1.0 공개 (오픈소스, macOS)", en: "Released voin v0.1.0 (open source, macOS)" },
  { year: "예정", ko: "voin Windows 지원", en: "Windows support for voin (planned)" },
];
