<script>
  import { twMerge } from 'tailwind-merge';
  let seperatorClasses;
  $: seperatorClasses = twMerge(
    'w-full min-w-full flex clear-both my-4 h-0 border-t border-gray-400'
  )
</script>

{#if $$slots}
<div class={seperatorClasses}>
  <slot />
</div>
{:else}
<div class={seperatorClasses}></div>
{/if}
