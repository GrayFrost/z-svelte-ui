<script lang="ts">
  import { getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';

  export let active: boolean = false;
  export let title: string = '';

  const ctx = getContext('ctx') ?? {};
  const selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    selected.set(node);
    const destroy = selected.subscribe((panel) => {
      if (panel !== node) {
        active = false;
      }
    });
    return { destroy };
  }
  let tabClasses = twMerge(
    'inline-block text-sm font-medium text-center'
  )

  const setActive = () => {
    active = true;
  }
</script>

<div>
  <div class={tabClasses} on:click={setActive}>{title}</div>
  {#if active}
    <div class="hidden">
      <div use:init>
        <slot />
      </div>
    </div>
  {/if}
</div>