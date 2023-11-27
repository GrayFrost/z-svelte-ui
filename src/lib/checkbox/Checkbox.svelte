<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  export let checked: boolean | undefined = undefined;
  export let value: string | number = '';
</script>

<input
  type="checkbox"
  bind:checked
  on:keyup on:keydown on:keypress on:focus 
  on:blur
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:paste
  on:change
  {value}
/>