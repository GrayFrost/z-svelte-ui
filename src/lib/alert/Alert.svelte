<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let type: 'success' | 'info' | 'warning' | 'error' = 'info';

  let typeMap = {
    success: 'bg-success border border-solid border-success',
    info: 'bg-info border border-solid border-info',
    warning: 'bg-warning border border-solid border-warning',
    error: 'bg-error border border-solid border-error'
  }

  let alertClasses: string;
  $: alertClasses = twMerge(
    'p-4 gap-3 text-sm rounded-sm',
    typeMap[type]
  )
</script>

<div class={alertClasses}>
  <slot />
</div>