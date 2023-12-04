<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let visibilityHeight: number = 400;
	let visible = false;

	const onScroll = (e) => {
		const scrollTop = e.target.scrollingElement.scrollTop;
		visible = scrollTop > visibilityHeight;
	};

	let backTopClasses = twMerge(
    'fixed', 
    `top-${Math.ceil(visibilityHeight / 4)} right-2`,
    'w-10 h-10 rounded-sm flex justify-center items-center bg-sky-400 hover:cursor-pointer'
  );

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	};
</script>

<svelte:window on:scroll={onScroll} />

{#if visible}
	<div class={backTopClasses} on:click={scrollToTop}>
		<slot>To top</slot>
	</div>
{/if}
