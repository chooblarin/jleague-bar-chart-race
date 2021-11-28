<script lang="ts">
  export let maxFrameCount = 0;

  let isPlaying = false;

  function handlePlayButtonClick() {
    isPlaying = !isPlaying;
  }
</script>

<div class="control">
  <button on:click={handlePlayButtonClick}>{isPlaying ? "⏸" : "▶️"}</button>
  <input type="range" min="0" max={maxFrameCount} />
</div>

<style>
  .control {
    display: flex;
    align-items: center;
    background: #efefef;
    border-radius: 8px;
    padding: 0 12px;
  }
  .control button {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    margin: 0 12px 0 0;
    padding: 0;
  }
  input[type="range"] {
    flex: 1;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    border: none;
    margin: 12px 0;
  }
  /* Track */
  input[type="range"]::-webkit-slider-runnable-track {
    height: 4px;
    background: #777777;
    border: none;
    border-radius: 2px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #999999;
  }
  /* Thumb */
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border: 1px solid #4c4c4c;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    margin-top: -6px;
  }
</style>
