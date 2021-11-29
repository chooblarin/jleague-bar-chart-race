<script lang="ts">
  import Chart from "./components/Chart.svelte";
  import Control from "./components/Control.svelte";
  import { j2RankData } from "./data/j2RankData";

  const maxFrameCount = j2RankData.length;
</script>

<main>
  <h1>2021年J2リーグ Bar Chart Race</h1>
  <Chart />
  <Control {maxFrameCount} />
</main>

<style>
  :root {
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
      "Hiragino Sans", Meiryo, sans-serif;
  }
  main {
    max-width: 760px;
    margin: 0 auto;
  }
  h1 {
    font-size: 24px;
    color: #232323;
    text-align: center;
    margin: 12px 12px 32px;
  }
</style>
