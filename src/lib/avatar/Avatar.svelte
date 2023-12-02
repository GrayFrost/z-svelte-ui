<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let src: string = '';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  const sizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
  }

  let avatarClasses: string;
  $: avatarClasses = twMerge(
    'rounded-full',
    sizes[size],
    $$props.class
  );
</script>

<div class={avatarClasses}>
  <img src={src} alt="avatar" class="rounded-full" />
</div>