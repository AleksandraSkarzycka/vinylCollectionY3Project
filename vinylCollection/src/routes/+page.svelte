<script lang="ts">
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient'

    import Modal from '$lib/Modal.svelte';
    export let data;
</script>

<div class="title">
    <p>Aleksandra's Vinyls</p>
</div>

<div class="grid">
  {#each data.vinyls as vinyl}
    <div class="card">
      <img src={vinyl.vinylImg} alt={vinyl.vinylTitle} />
      <h2>{vinyl.vinylTitle}</h2>
    </div>
  {/each}
</div>


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
        background-color: rgba(251, 181, 194);
        padding: 1rem;
        border-radius: 5px;
        display: grid;
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
</style>