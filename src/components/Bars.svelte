<script lang="ts">
  import type { RankRecord } from "../data/j2RankData";
  import { teamColor } from "../lib/teamColor";
  import Bar from "./Bar.svelte";
  export let data: RankRecord[] = [];
</script>

<div class="bars">
  {#each data as { id, points, name, rank } (id)}
    <Bar value={points} label={name} {rank} fill={teamColor[id]} />
  {/each}
</div>

<style>
  .bars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
