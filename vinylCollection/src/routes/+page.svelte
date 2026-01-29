<script>
    import { base } from '$app/paths';
</script>

<div class="title">
    <p>Aleksandra's Vinyls</p>
</div>

<div class="vinylContainer">
    <div class="vinyl1">
        <div class="vImage">
            <img src="{base}/img/sunburnDF.jpg" alt="Cover picture for Dominic Fike's Sunburn album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - Sunburn</p>
    </div>
    <div class="vinyl2">
        <div class="vImage">
            <img src="{base}/img/14minutesDF.jpg" alt="Cover picture for Dominic Fike's 14 Minutes album" width="95%">
        </div>
        
        <p class="vTitle">Dominic Fike - 14 Minutes</p>
    </div>
    <div class="vinyl3">
        <div class="vImage">
            <img src="{base}/img/wcpgwDF.jpg" alt="Cover picture for Dominic Fike's What Could Possibly Go Wrong album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - What Could Possibly Go Wrong</p>
    </div>
    <div class="vinyl4">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl5">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl6">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl7">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl8">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl9">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl10">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl11">
        <div class="vImage">
            
        </div>
    </div>
    <div class="vinyl12">
        <div class="vImage">
            
        </div>
    </div>
</div>

<style>
    .vinylContainer {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: rgba(241, 231, 191);
        max-width: 70%;
        max-height: fit-content;
    }
    .vinyl1, .vinyl2, .vinyl3, .vinyl4, .vinyl5,
    .vinyl6, .vinyl7, .vinyl8, .vinyl9, .vinyl10,
    .vinyl11, .vinyl12 {
        background-color: rgba(251, 181, 194);
        max-width: 300px;
        min-width: 300px;
        max-height: 350px;
        min-height: 350px;
        margin: 1rem;
        border-radius: 2%;

        display: grid;
        place-items: center;
    }

    .vImage {
        background-color: rgba(255, 160, 195, 0.7);
        max-width: 100%;
        min-width: 70%;
        max-height: 100%;
        min-height: 70%;
        margin: 0.5rem;
        border-radius: 2%;
        padding-top: 2%;
    }
    .title {
        font-family: 'font3', sans-serif;
        padding-top: 85px;
        font-size: xxx-large;
    }

    img {
        border-radius: 2%;
    }

    .vTitle {
        font-family: 'font3', sans-serif;
        font-size: 15px;
    }
</style>