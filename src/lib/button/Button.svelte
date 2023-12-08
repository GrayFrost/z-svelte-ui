<script lang="ts">
import { twMerge } from 'tailwind-merge';
import { getContext } from 'svelte';
import type { SizeType } from '$lib/types';
import { ThemeContextKey } from '../theme-provider/context.ts';

const commonConfig = getContext(ThemeContextKey);
const group: SizeType = getContext('group');

export let prefixCls = 'zsu';

$: theme = $commonConfig ? $commonConfig.theme : 'light';

export let type: 'primary' |
'dashed' | 'link' | 'text' |  'default' = 'default';
export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

const typeClasses = {
  light: {
    primary: 'text-white bg-blue-400',
    dashed: 'text-black bg-white border border-dashed border-gray-400',
    link: 'text-blue-400',
    text: 'text-black',
    default: 'text-black bg-white border border-solid border-gray-400',
  },
  dark: {
    primary: 'text-white bg-slate-400',
    dashed: 'text-white bg-slate border border-dashed border-gray-400',
    link: 'text-slate-400',
    text: 'text-white',
    default: 'text-white bg-slate-400 border border-solid border-gray-400',
  }
}

const sizeClasses = {
  xs: 'px-3 py-1 text-xs',
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
  xl: 'px-6 py-3.5 text-xl'
};
const radiusClasses = {
  xs: 'rounded-sm',
  sm: 'rounded-sm',
  md: 'rounded',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
}
let buttonClass: string;
$: buttonClass = twMerge(
  typeClasses[theme][type],
  sizeClasses[size],
  group ? 'first:rounded-l-lg last:rounded-r-lg' : radiusClasses[size],
)
</script>

<button class={buttonClass} on:click>
  <slot />
</button>
