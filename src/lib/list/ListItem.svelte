<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let listItemClasses = twMerge();
</script>

<li class={listItemClasses}>
  <slot />
</li>