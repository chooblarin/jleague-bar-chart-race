import { scaleLinear } from "d3";
import type { ScaleLinear } from "d3-scale";
import { getContext, setContext } from "svelte";
import type { Writable } from "svelte/store";
import type { RankRecord } from "../data/j2RankData";

const key = {};

export interface Scales {
  x: ScaleLinear<number, number, never>;
  y: ScaleLinear<number, number, never>;
}

interface Chart {
  dimensions: Writable<{ width: number; height: number; barHeight: number }>;
  scales: Writable<Scales>;
  data: Writable<RankRecord[]>;
}

interface ChartContext {
  getChart: () => Chart;
}

export function getChartContext(): ChartContext {
  return getContext(key);
}

export function setChartContext(chartContext: ChartContext) {
  setContext(key, chartContext);
}

export function createLinearScale(domain: [number, number], range: [number, number]) {
  return scaleLinear().domain(domain).range(range);
}
