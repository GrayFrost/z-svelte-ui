<script lang="ts">
  import Star from './Star.svelte';
  import { twMerge } from 'tailwind-merge';
  import uuid from '$lib/_utils/uuid';

  export let total: number = 5;
  export let icon = Star;
  export let value: number = 0;
  export let size: number = 24;

  let fullIcons: number = Math.floor(value);
  let rateDifference = value - fullIcons;
  let differencePercent = Math.round(rateDifference * 100);
  let notFullIcons: number = total - Math.ceil(value);

  let fullId: string = uuid();
  let partialId: string = uuid();
  let emptyId: string = uuid();

  console.log('zzh rate data', fullIcons, rateDifference, differencePercent, notFullIcons);

  let rateClasses = twMerge(
    'flex flex-row items-center'
  )
</script>

<div class={rateClasses}>
  {#each Array(fullIcons) as item}
    <svelte:component this={icon} {size} fillPercent={100} id={fullId} />
  {/each}
  {#if differencePercent}
    <svelte:component this={icon} {size} fillPercent={differencePercent} id={partialId}/>
  {/if}
  {#each Array(notFullIcons) as item}
    <svelte:component this={icon} {size} fillPercent={0} id={emptyId} />
  {/each}
</div>
