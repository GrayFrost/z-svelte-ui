<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import { TimelineContextKey } from './context';

  const { setIndex } = getContext(TimelineContextKey);
  const index = setIndex();
  let timelineItemClasses = twMerge(
    "relative",
  );
  let headClasses = twMerge(
    "absolute w-4 h-4 top-1 rounded-full bg-white border-4 border-solid border-sky-500"
  );
  let tailClasses = twMerge(
    "absolute left-1.5 top-1 h-full w-1 bg-gray-200"
  );
  let contentClasses = twMerge(
    "ml-5"
  )
</script>

<li class={timelineItemClasses}>
  <div class={tailClasses}></div>
  <div class={headClasses}></div>
  <div class={contentClasses}>
    <slot></slot>
  </div>
</li>