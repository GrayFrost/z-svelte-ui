<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let shadowClasses = 'shadow-md shadow-gray-200';

  let cardClasses = twMerge(
    'bg-white border border-solid border-gray-200 rounded-md',
    shadowClasses,
    $$props.class
  );
</script>

<div class={cardClasses}>
  <slot/>
</div>