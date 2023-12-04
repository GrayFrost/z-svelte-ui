<script lang="ts">
import { twMerge } from 'tailwind-merge';
import { getContext } from 'svelte';
import type { SizeType } from '$lib/types';

const group: SizeType = getContext('group');

export let type: 'primary' |
'dashed' | 'link' | 'text' |  'default' = 'default';
export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

const typeClasses = {
  primary: 'text-white bg-black',
  dashed: 'text-black bg-white border border-dashed border-gray-400',
  link: 'text-blue-400',
  text: 'text-black',
  default: 'text-black bg-white border border-solid border-gray-400',
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
  typeClasses[type],
  sizeClasses[size],
  group ? 'first:rounded-l-lg last:rounded-r-lg' : radiusClasses[size],
)
</script>

<button class={buttonClass} on:click>
  <slot />
</button>
