<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	let showAddon = false;

	let inputNumberWrapperClasses = twMerge(
    'inline-flex relative',
    'border border-solid border-gray-400',
    'rounded-md',
    'hover:border-blue-400 hover:shadow-sm hover:outline-0',
  );

	let addonClass;
	$: addonClass = twMerge(
    'absolute w-10 top-0 right-0 bottom-0', showAddon ? 'inline-flex flex-col' : 'hidden'
  );

  let addonItemClasses = twMerge(
    'flex-1 w-full border border-solid border-gray-400'
  )
</script>

<div class={inputNumberWrapperClasses} on:mouseenter={() => (showAddon = true)} on:mouseleave={() => (showAddon = false)}>
	<input autocomplete="off" spellcheck="false" class="rounded"/>
	<div class={addonClass}>
		<span class={addonItemClasses}></span>
		<span class={addonItemClasses}></span>
	</div>
</div>
