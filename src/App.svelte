<script lang="ts">
  import Chart from "./components/Chart.svelte";
</script>

<main>
  <h1>2021年J2リーグ Bar Chart Race</h1>
  <Chart />
</main>

<style>
  :root {
    font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
      "Hiragino Sans", Meiryo, sans-serif;
  }
  h1 {
    max-width: 760px;
    font-size: 24px;
    color: #232323;
    text-align: center;
    margin: 12px auto 16px;
  }
</style>
