<script lang="ts">
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient'

    export let data;

    let selectedVinyl = null;
    let showModal = false;

    function openModal(vinyl) {
        console.log('Clicked:', vinyl); // debug
        selectedVinyl = vinyl;
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        selectedVinyl = null;
    }
</script>

<div class="title">
    <p>Aleksandra's Vinyls</p>
</div>

<div class="grid">
  {#each data.vinyls as vinyl (vinyl.id)}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="card" on:click={() => openModal(vinyl)}>
      <img src={vinyl.vinylImg} alt={vinyl.vinylTitle} />
      <h2>{vinyl.vinylTitle}</h2>
    </div>
  {/each}
</div>

{#if showModal && selectedVinyl}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-backdrop" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>
      <img src={selectedVinyl.vinylImg} alt={selectedVinyl.vinylTitle} />
      <h2>{selectedVinyl.vinylTitle}</h2>
      <button on:click={closeModal}>Close</button>
    </div>
  </div>
{/if}

<style>
    .title {
        font-family: 'font3', sans-serif;
        font-weight: 100;
        font-size: xx-large;
        text-align: center;
        padding-top: 4%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }

    .card {
        background-color: #FFFAF0;
        padding: 1rem;
        border-radius: 5px;
        display: grid;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .card:hover {
        transform: scale(1.02);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 2px;
        margin-bottom: 0.75rem;
        object-fit: cover;
    }

    h2 {
        font-family: 'font3', sans-serif;
        font-weight: 100;
        font-size: 20px;
        text-align: center;
        align-self: center;
    }

    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .modal {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        text-align: center;
    }
</style>