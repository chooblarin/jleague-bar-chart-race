<script lang="ts">
  import Chart from "./components/Chart.svelte";
  import Control from "./components/Control.svelte";
</script>

<main>
  <h1>2021年J2リーグ Bar Chart Race</h1>
  <Control />
  <Chart />
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
    margin: 12px 12px 16px;
  }
</style>
