<script lang="ts">
  import { twMerge, twJoin } from 'tailwind-merge';
  export let progress: string | number = 0;
  let progressClasses;
  $: progressClasses = twMerge(
    'w-full bg-gray-200 rounded-full h-2'
  );
  let progressInnerClasses = 'rounded-full bg-blue-400 h-2';
</script>

<div {...$$restProps} class={progressClasses}>
  <div class={progressInnerClasses} style="width: {progress}%"></div>
</div>