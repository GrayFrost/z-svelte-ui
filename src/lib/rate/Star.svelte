<script lang="ts">
  import uuid from '$lib/_utils/uuid';

  export let fillPercent: number = 100;
  export let color: string = '#F5CA14';
  export let strokeColor: string = '#F5CA14';
  export let size: number = 24;

  let id = uuid();
</script>

<svg width={size} height={size} {...$$restProps} class={$$props.class} viewBox="100 100 120 120" on:click>
  <defs>
    <linearGradient id={id}>
      {#if fillPercent !== 100}
        <stop offset="0%" stop-color={color} />
        <stop offset="{fillPercent}%" stop-color={color} />
        <stop offset="{fillPercent}%" stop-color="transparent" />
        <stop offset="100%" stop-color="transparent" />
      {:else}
        <stop offset="0%" stop-color={color} />
        <stop offset="100%" stop-color={color} />
      {/if}
    </linearGradient>
  </defs>
  <g fill="url(#{id})" stroke={strokeColor} stroke-width="2">
    <polygon
      points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
    203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
    153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
    141.489, 197.361, 165.000, 185.000" />
  </g>
</svg>