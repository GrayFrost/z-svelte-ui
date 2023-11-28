<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: string = 'blue';

  const generateTagClass = (color: string): string => {
    return `text-${color}-400 border border-solid border-${color}-400 bg-${color}-200`;
  };

  let colorMap: Record<any, string> = {
    blue: 'text-blue-400 border border-solid border-blue-400 bg-blue-200',
    green: 'text-green-400 border border-solid border-green-400 bg-green-200',
    red: 'text-red-400 border border-solid border-red-400 bg-red-200',
    orange: 'text-orange-400 border border-solid border-orange-400 bg-orange-200',
    yellow: 'text-yellow-400 border border-solid border-yellow-400 bg-yellow-200',
  };

  let tagClasses = twMerge(
    'inline-block px-1 rounded-sm',
    colorMap[color],
    $$props.class,
  );

</script>

<span class={tagClasses}>
  <slot />
</span>