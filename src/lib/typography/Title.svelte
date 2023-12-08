<script lang="ts">
  export let level: number = 1;
  let component = `h${level}`;
</script>

<svelte:element this={component}>
  <slot />
</svelte:element>