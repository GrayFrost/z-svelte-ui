<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let count: number = 0;

  let badgeWrapClasses: string;
  $: badgeWrapClasses = twMerge(
    'relative w-fit'
  )
  let badgeClasses: string;
  $: badgeClasses = twMerge(
    'overflow-hidden absolute top-0 right-0',
    'translate-x-2/4 -translate-y-2/4 origin-top-right',
    'min-w-5 h-5 leading-5 rounded-full text-center',
    'bg-red-500 text-white shadow-badge'
  )
</script>

<div class={badgeWrapClasses}>
  <sup class={badgeClasses}>
    {count}
  </sup>
  <slot />
</div>