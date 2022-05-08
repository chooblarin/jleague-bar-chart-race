<script lang="ts">
  import { tweened } from "svelte/motion";
  import { writable } from "svelte/store";
  import { teamIds } from "../data/2022/teamIds";
  import { j2RankData } from "../data/j2RankData";
  import type { Scales } from "../lib/chart";
  import { createLinearScale, setChartContext } from "../lib/chart";
  import { frame } from "../lib/framer";
  import Axis from "./Axis.svelte";
  import Bars from "./Bars.svelte";
  import Ticker from "./Ticker.svelte";

  const duration = 400;
  const barCount = teamIds.length;

  $: frameIndex = Math.min($frame, j2RankData.length - 1);
  $: currentData = j2RankData[frameIndex];
  $: currentSection = currentData.section;
  $: currentRecords = teamIds.map((id) => ({
    ...currentData.rankRecords.find((d) => d.id === id),
  }));

  const dimensions = writable({ width: 0, height: 0, barHeight: 0 });
  const scales = writable<Scales>();
  const data = tweened<typeof currentRecords>(null, { duration }); // FIXME
  const xMax = tweened<number>(NaN, { duration });

  // Update dimensions

  let figureWidth = 0;
  let figureHeight = 0;

  $: width = figureWidth;
  $: height = figureHeight;
  $: barHeight = height / barCount;

  // Update stores
  $: data.set(currentRecords);
  $: dimensions.set({
    width,
    height,
    barHeight,
  });
  $: xMax.set(Math.max(...currentRecords.map((d) => d.points)));
  $: scales.set({
    x: createLinearScale([0, $xMax], [0, $dimensions.width]),
    y: createLinearScale([0, barCount], [0, $dimensions.height]),
  });

  // Set chart context
  setChartContext({
    getChart: () => ({ data, dimensions, scales }),
  });
</script>

<figure
  class="chart"
  bind:offsetWidth={figureWidth}
  bind:offsetHeight={figureHeight}
>
  <Bars />
  <Axis />
  <Ticker label={currentSection.label} />
</figure>

<style>
  .chart {
    display: block;
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 400px;
    margin: 0 0 8px;
    padding: 0;
  }
</style>
