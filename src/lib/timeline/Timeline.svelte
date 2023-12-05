<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { TimelineContextKey } from './context';

  let index = -1;
  setContext(TimelineContextKey, {
    setIndex: () => {
      index += 1;
      return index;
    },
  })
  $: console.log('zzh index', index);

  let timelineClasses = twMerge(
    $$props.class
  )
</script>

<ul class={timelineClasses}>
  <slot />
</ul>