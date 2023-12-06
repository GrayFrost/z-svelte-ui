<script>
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';
  import { ThemeContextKey } from './context';

  export let config = {};
  const defaultConfig = {
    theme: 'light', // 'light' | 'dark'
  }
  const configStore = writable(defaultConfig);

  $: $configStore = {...$configStore, ...config}
  setContext(ThemeContextKey, configStore);
</script>

<slot />