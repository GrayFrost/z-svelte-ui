<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

  let tabPanelClass: string = 'p-4 bg-white';

  const ctx = {
    selected: writable<HTMLElement>()
  }

  setContext('ctx', ctx); // todo rename

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((panel: HTMLElement) => {
      if (panel) node.replaceChildren(panel);
    });
    return { destroy };
  }
</script>

<div role="tab">
  <slot />
</div>
<div class={tabPanelClass} role="tabpanel" use:init></div>