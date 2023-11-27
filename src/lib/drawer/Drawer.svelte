<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let visible: boolean = false;
  export let overlay: boolean = true;
  
  let drawerClasses = twMerge(
    'overflow-y-auto z-50 p-4 bg-white fixed w-80 inset-y-0 left-0'
  );

  let overlayClasses = twMerge(
    'fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-75'
  );

  const onClickOverlay = () => {
    visible = !visible
  }
</script>

{#if visible}
  {#if overlay}
    <div class={overlayClasses} on:click={onClickOverlay}></div>
  {/if}
  <div class={drawerClasses}>
    <slot {visible} />
  </div>
{/if}