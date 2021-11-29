<script lang="ts">
  import { writable } from "svelte/store";
  import { j2RankData, teamIds } from "../data/j2RankData";
  import { createLinearScale, Scales, setChartContext } from "../lib/chart";
  import { frame } from "../lib/framer";
  import Bars from "./Bars.svelte";
  import Ticker from "./Ticker.svelte";

  const barCount = teamIds.length;

  const dimensions = writable({ width: 0, height: 0, barHeight: 0 });
  const scales = writable<Scales>();
  const xMax = writable<number>(NaN);

  // Update data

  $: frameIndex = Math.min($frame, j2RankData.length - 1);
  $: currentData = j2RankData[frameIndex];

  // Update dimensions

  let figureWidth = 0;
  let figureHeight = 0;

  $: width = figureWidth;
  $: height = figureHeight;
  $: barHeight = height / barCount;

  // Update stores
  $: dimensions.set({
    width,
    height,
    barHeight,
  });
  $: xMax.set(Math.max(...currentData.rankRecords.map((d) => d.points)));
  $: scales.set({
    x: createLinearScale([0, $xMax], [0, $dimensions.width]),
    y: createLinearScale([0, barCount], [0, $dimensions.height]),
  });

  // Set chart context
  setChartContext({
    getChart: () => ({ dimensions, scales }),
  });
</script>

<figure
  class="chart"
  bind:offsetWidth={figureWidth}
  bind:offsetHeight={figureHeight}
>
  <Bars data={currentData.rankRecords} />
  <Ticker label={currentData.section.label} />
</figure>

<style>
  .chart {
    display: block;
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 400px;
    border: 1px solid;
    margin: 0;
    padding: 0;
  }
</style>
