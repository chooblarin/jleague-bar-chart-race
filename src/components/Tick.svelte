<script lang="ts">
  export let value: number;
  export let x: number;
</script>

<div class="tick" style="left: {x}px;">
  <p class="value">{value}</p>
</div>

<style>
  .tick {
    position: absolute;
    top: 0;
    height: 100%;
  }
  .tick::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    opacity: 0.5;
    background: #c2c2c2;
  }
  .value {
    font-size: 0.75em;
    transform: translate(-50%, -100%);
    color: #434343;
    margin: 0;
  }
</style>
