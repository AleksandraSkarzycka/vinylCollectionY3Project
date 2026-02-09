<script>
  import { fade, scale } from 'svelte/transition';
  export let open = false;
</script>

{#if open}
  <div class="overlay" transition:fade>
    <div class="modal" transition:scale>
      <slot />
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background: rgba(255, 160, 195);
    padding: 24px;
    border-radius: 12px;
    max-width: 90%;
    width: 90%;
    max-height: 80%;
    height: 80%;
    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  }
</style>