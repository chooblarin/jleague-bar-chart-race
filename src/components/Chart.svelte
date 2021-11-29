<script lang="ts">
  import { writable } from "svelte/store";
  import { j2RankData, teamIds } from "../data/j2RankData";
  import { frame } from "../lib/framer";

  const barCount = teamIds.length;

  const dimensions = writable({ width: 0, height: 0, barHeight: 0 });

  // Update data

  $: frameIndex = Math.min($frame, j2RankData.length - 1);
  $: currentData = j2RankData[frameIndex];

  // Update dimensions

  let figureWidth = 0;
  let figureHeight = 0;

  $: width = figureWidth;
  $: height = figureHeight;
  $: barHeight = height / barCount;
  $: dimensions.set({
    width,
    height,
    barHeight,
  });
</script>

<figure
  class="chart"
  bind:offsetWidth={figureWidth}
  bind:offsetHeight={figureHeight}
>
  {JSON.stringify(currentData)}
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
