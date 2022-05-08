declare module "*/*.json" {
  type Section = {
    label: string;
    value: string;
  };
  type Frame = {
    section: Section;
    rankRecords: RankRecord[];
  };
  type Frames = Frame[];
  export = Frames;
}
