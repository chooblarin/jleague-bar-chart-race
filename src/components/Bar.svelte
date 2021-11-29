<script lang="ts">
  import { getChartContext } from "../lib/chart";

  const { getChart } = getChartContext();
  const { scales, dimensions } = getChart();

  export let value: number;
  export let label: string;
  export let rank: number;
  export let fill: string;

  $: barColor = `--bar-color: ${fill};`;
  $: width = `width: ${$scales.x(value) || 0}px;`;
  $: height = `height: ${$dimensions.barHeight || 0}px;`;
  $: transform = `transform: translateY(${$scales.y(rank) || 0}px);`;
</script>

<div style="{barColor} {width} {height} {transform}">
  <p
    class="label"
    style="transform: {value === 0 ? 'translateX(100%)' : 'none'}"
  >
    {label}
  </p>
</div>

<style>
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--bar-color);
    border: 1px solid white;
    box-sizing: border-box;
  }
  .label {
    font-size: 0.7em;
    font-weight: 600;
    word-break: keep-all;
    white-space: nowrap;
    transition: transform 300ms;
    padding: 0 8px;
  }
</style>
