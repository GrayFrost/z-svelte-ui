<script lang="ts">
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { SizeType } from '$lib/types';
  export let size: SizeType = 'md';

  let buttonGroupClass;
  $: buttonGroupClass = twMerge(
    'inline-flex',
    $$props.class,
  )

  setContext('group', { size }); // todo rename
</script>

<div {...$$restProps} class={buttonGroupClass} role="group">
  <slot />
</div>