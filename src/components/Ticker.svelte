<script lang="ts">
  export let label = "";
</script>

<div class="ticker">{label}</div>

<style>
  .ticker {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 48px;
    font-weight: bold;
    color: #282828aa;
    margin: 32px 16px;
  }
</style>
