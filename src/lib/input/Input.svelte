<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  let inputClasses = twMerge(
    'border border-solid border-gray-400',
    'rounded-md',
    'hover:border-blue-400 hover:shadow-sm hover:outline-0',
    'focus:border-blue-400 focus:shadow-sm focus:outline-0',
  )
</script>

<input type="text" class={inputClasses} />