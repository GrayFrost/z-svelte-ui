<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let color: string = 'blue';

  const generateTagClass = (color: string): string => {
    return `text-${color}-400 border border-solid border-${color}-400 bg-${color}-200`;
  };

  let colorMap: Record<any, string> = {
    blue: generateTagClass('blue'),
    green: generateTagClass('green'),
    red: generateTagClass('red'),
    orange: generateTagClass('orange'),
    yellow: generateTagClass('yellow'),
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