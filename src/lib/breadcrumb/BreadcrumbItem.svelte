<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let breadcrumbItemClasses = twMerge(
    'inline-flex items-center',
    $$props.class
  )
</script>

<li class={breadcrumbItemClasses}>
  <slot />
</li>