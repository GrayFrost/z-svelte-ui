<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { space } from '$lib/_utils/directives';

	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	let spaceClasses = direction === 'horizontal' ? 'mr-2 last:mr-0' : 'mb-2 last:mb-0';

	let spaceWrapperClasses = twMerge(direction === 'horizontal' ? 'flex flex-row' : 'flex flex-col');
</script>

<div use:space={spaceClasses} class={spaceWrapperClasses}>
	<slot />
</div>
