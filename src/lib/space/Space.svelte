<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let direction: 'horizontal' | 'vertical' = 'horizontal';
  let spaceClasses = 'mr-2 last:mr-0';
  
  function space(node: HTMLElement) {
    console.log('zzh node', [node]);
    node.childNodes = node.childNodes.forEach((element) => {
      const wrapItem = document.createElement('div');
      wrapItem.className = 'z-space-item';
      wrapItem.appendChild(element);
    });
    const destroy = () => {
      console.log('zzh node', node);
    };
    return { destroy };
  }

  let spaceWrapperClasses = twMerge(
    direction === 'horizontal' ? 'flex-row' : 'flex-col'
  );
</script>

<div use:space class={spaceWrapperClasses}>
  <slot />
</div>