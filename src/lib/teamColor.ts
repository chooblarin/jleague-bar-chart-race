import type { teamIds as teamIds2021 } from "src/data/2021/teamIds";
import type { teamIds as teamIds2022 } from "src/data/2022/teamIds";

type TeamId = typeof teamIds2021[number] | typeof teamIds2022[number];

export const teamColor: Record<TeamId, string> = {
  niigata: "#ea5404bb",
  tokyov: "#49A32Baa",
  okayama: "#CA3C4988",
  kusatsu: "#01036A88",
  omiya: "#F08E3288",
  nagasaki: "#005bac88",
  ryukyu: "#96004888",
  yamagata: "#00409888",
  chiba: "#377E4688",
  machida: "#0054A788",
  kofu: "#245AA788",
  yamaguchi: "#eb610088",
  akita: "#00409388",
  mito: "#00197666",
  kanazawa: "#C2293388",
  tochigi: "#1C409588",
  sendai: "#FAE04B",
  yokohamafc: "#3dbdff",
  morioka: "#db6769",
  tokushima: "#8c95b8",
  oita: "#6d82bf",
  kumamoto: "#b87a72",
  kyoto: "#75006988",
  matsumoto: "#183E2288",
  iwata: "#7399d188",
  sagamihara: "#0c535188",
  kitakyushu: "#D1373188",
  ehime: "#ED693988",
};
