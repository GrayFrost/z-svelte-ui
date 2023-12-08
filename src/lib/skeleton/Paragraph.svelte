<script lang="ts">
  export let rows: number | undefined = 2;
</script>

<ul>
  {#each Array(rows) as row}
    <li>paragraph skeleton</li>
  {/each}
</ul>

