<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Checkbox from '../checkbox/Checkbox.svelte';

  export let value: string | number = '';
  export let checked: boolean | undefined = undefined;

  const commonClasses = "bg-gray-200 rounded-full"
  let switchClasses;
  $: switchClasses = twMerge(
    
  )
</script>

<Checkbox bind:checked {value} on:click on:change>
  <span class={switchClasses} />
  <slot />
</Checkbox>