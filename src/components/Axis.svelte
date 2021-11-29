<script lang="ts">
  import { getChartContext } from "../lib/chart";
  import Tick from "./Tick.svelte";
  const { getChart } = getChartContext();
  const { scales } = getChart();
  $: ticks = $scales.x.ticks(5).filter((tick) => Number.isInteger(tick)) ?? [];
</script>

<div class="axis">
  {#each ticks as value (value)}
    <Tick x={$scales.x(value)} {value} />
  {/each}
</div>

<style>
  .axis {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
