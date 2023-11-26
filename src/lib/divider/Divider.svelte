<script>
  import { twMerge } from 'tailwind-merge';
  let dividerClasses;
  $: dividerClasses = twMerge(
    'w-full min-w-full flex clear-both my-4 h-0 border-t border-gray-400'
  )
</script>

{#if $$slots}
<div class={dividerClasses}>
  <slot />
</div>
{:else}
<div class={dividerClasses}></div>
{/if}
