<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let listClasses;
  $: listClasses = twMerge(

  )
</script>

<ol class={listClasses}>
  <slot />
</ol>