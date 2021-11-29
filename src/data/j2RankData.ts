import data from "../data/j2-rank-data.json";

export const teamIds = [
  "niigata",
  "tokyov",
  "kyoto",
  "okayama",
  "kusatsu",
  "omiya",
  "nagasaki",
  "ryukyu",
  "yamagata",
  "chiba",
  "machida",
  "kofu",
  "matsumoto",
  "yamaguchi",
  "akita",
  "mito",
  "kanazawa",
  "iwata",
  "tochigi",
  "sagamihara",
  "kitakyushu",
  "ehime",
] as const;

export type TeamId = typeof teamIds[number];

export type RankRecord = {
  id: TeamId;
  name: string;
  points: number;
  rank: number;
};

export const j2RankData = data.map(({ section, rankRecords }) => ({
  section,
  rankRecords: rankRecords.map((r, i) => ({
    ...r,
    id: r.id as TeamId,
    rank: i // NOTE: UIが同率順位に対応していないため，並配列のび順でrank値を置き換える
  })),
}));
