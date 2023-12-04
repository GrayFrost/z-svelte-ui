<script lang="ts">
	import { twMerge } from 'tailwind-merge';
  import { createEventDispatcher } from 'svelte';

	export let open: boolean = false;
	export let title: string = '';
	export let maskClosable: boolean = true;

  const dispatch = createEventDispatcher();

	let maskClasses = twMerge('fixed inset-0 z-40 bg-gray-900 bg-opacity-50');

	let modalWrapClasses = twMerge('');

	const hide = (e: Event) => {
		e.preventDefault();
		open = false;
	};

  $: dispatch(open ? 'open' : 'close');
</script>

{#if open}
	<div class={maskClasses} />
	<div class="fixed top-0 left-0 right-0 h-full w-full z-50 p-4 flex justify-center items-center">
		<div class="flex relative w-full max-h-full">
			<div class="bg-white text-gray-500 rounded-lg border-gray-200 w-full">
				<!-- Modal header -->
				{#if $$slots.title || title}
					<div class="flex justify-between items-center p-4 rounded-t w-full">
						<slot name="title">
							<span>{title}</span>
						</slot>
					</div>
				{/if}
				<label class="absolute top-3 right-2" on:click={hide}>X</label>
				<!-- Modal body -->
				<div class="p-4 flex-1 overflow-y-auto w-full">
					<slot />
				</div>
				<!-- Modal footer -->
				{#if $$slots.footer}
          <div class="flex items-center p-4 rounded-b w-full">
					  <slot name="footer" />
          </div>
				{/if}
			</div>
		</div>
	</div>
{/if}
