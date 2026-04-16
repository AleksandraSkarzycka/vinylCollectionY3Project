<script lang="ts">
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient'

    export let data;

    let selectedVinyl: { vinylImg: any; vinylTitle: any; vinylDesc: any; spotifyEmbed: any; } | null = null;
    let showModal = false;

    function openModal(vinyl: { vinylImg: any; vinylTitle: any; vinylDesc: any; spotifyEmbed: any; } | null) {
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
        <div class="vImg">
            <img src={vinyl.vinylImg} alt={vinyl.vinylTitle} />
        </div>
        <div class="vTitle">
            <h2>{vinyl.vinylTitle}</h2>
        </div>
    </div>
  {/each}
</div>

{#if showModal && selectedVinyl}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-backdrop" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>
        <div class="mImg">
            <img src={selectedVinyl.vinylImg} alt={selectedVinyl.vinylTitle} />
        </div>
        <div class="vDesc">
            <h1 class="mTitle">{selectedVinyl.vinylTitle}</h1>
            <p class="thoughts">{selectedVinyl.vinylDesc}</p>

        {#if selectedVinyl.spotifyEmbed}
            <!-- svelte-ignore a11y_missing_attribute -->
            <iframe
                src={selectedVinyl.spotifyEmbed}
                width="100%"
                height="352"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        {/if}
        </div>
        <div class="mBtn">
            <button on:click={closeModal}>Close</button>
        </div>
    </div>
  </div>
{/if}

<style>
    .title {
        font-family: 'font1', sans-serif;
        font-weight: 1000;
        letter-spacing: 5px;
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
        object-fit: cover;
    }

    h2 {
        font-family: 'font2', sans-serif;
        font-weight: 1000;
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
        background: #FFFAF0;
        padding: 2rem;
        border-radius: 12px;
        max-width: 70%;
        width: 70%;
        max-height: 65%;
        height: 65%;
        display: flex;
        flex-direction: row;
    }

    button {
        padding: 0.4rem 1rem;
        background-color: #666666;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 10px;
        margin-left: 1rem;
    }

    .vImg {
        margin-bottom: 0.75rem;
    }

    .mImg {
        max-width: 40%;
        width: 40%;
        height: auto;
        margin-bottom: 1rem;
        align-self: center;
        margin-right: 1rem;
    }

    .vDesc {
        max-width: 60%;
        width: 60%;
        text-align: left;
        overflow-y: auto;
    }

    .mTitle {
        font-family: 'font1', sans-serif;
        font-size: 45px
    }

    .thoughts {
        font-size: 20px;
        font-family: 'font2', sans-serif;
    }
</style>