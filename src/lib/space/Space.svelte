<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	let spaceClasses = direction === 'horizontal' ? 'mr-2 last:mr-0' : 'mb-2 last:mb-0';

	function space(node: HTMLElement) {
    const wrap = () => {
      node.childNodes.forEach((element) => {
				if (!element) {
					return;
				}
				if (element.nodeType === 3 && (!element.nodeValue || /^\s+$/.test(element.nodeValue))) {
					return;
				}
				if (element.parentNode) {
					const wrapItem = document.createElement('div');
					wrapItem.className = spaceClasses;
					element.parentNode.insertBefore(wrapItem, element);
					wrapItem.appendChild(element);
				}
			});
    }
    wrap();
		return {
      destroy: wrap
    };
	}

	let spaceWrapperClasses = twMerge(direction === 'horizontal' ? 'flex flex-row' : 'flex flex-col');
</script>

<div use:space class={spaceWrapperClasses}>
	<slot />
</div>
