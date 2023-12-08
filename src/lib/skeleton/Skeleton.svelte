<script lang="ts">
  import Avatar from './Avatar.svelte';
  import Paragraph from './Paragraph.svelte';
  import Title from './Title.svelte';

  export let avatar: Object | Boolean = false;
  export let title: Object | Boolean = false;
  export let paragraph: Object | Boolean = false;

  let hasAvatar = !!avatar;
  let hasTitle = !!title;
  let hasParagraph = !!paragraph;
</script>

<div>
  {#if hasAvatar}
    <div>
      <Avatar />
    </div>
  {/if}
  {#if hasTitle || hasParagraph}
    <div>
      {#if hasTitle}
        <Title />
      {/if}
      {#if hasParagraph}
        <Paragraph />
      {/if}
    </div>
  {/if}
</div>