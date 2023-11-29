<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let breadcrumbClasses = twMerge(
    'flex'
  );
</script>

<nav class={breadcrumbClasses}>
  <ol class="inline-flex items-center">
    <slot />
  </ol>
</nav>