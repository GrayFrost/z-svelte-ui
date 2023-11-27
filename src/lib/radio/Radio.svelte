<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  export let value: number | string = '';
</script>

<input
  type="radio"
  on:blur
  on:change
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:paste
  {value}
  {...$$restProps}
/>