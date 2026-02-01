<script>
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient'
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
            <img src="{base}/img/thelovethatishowedyouwasyourstokeepLS.png" alt="Cover picture for Love Spells' The Love That I Showed You Was Yours To Keep album" width="95%">
        </div>

        <p class="vTitle">Love Spells - The Love That I Showed You Was Yours To Keep</p>
    </div>

    <div class="vinyl5">
        <div class="vImage">
            <img src="{base}/img/BlushKA.jpg" alt="Cover picture for Kevin Abstract's Blush album" width="95%">
        </div>

        <p class="vTitle">Kevin Abstract - Blush</p>
    </div>

    <div class="vinyl6">
        <div class="vImage">
            <img src="{base}/img/romanceFDC.jpg" alt="Cover picture for Fontaines D.C.'s Romance album" width="95%">
        </div>

        <p class="vTitle">Fontaines D.C. - Romance</p>
    </div>

    <div class="vinyl7">
        <div class="vImage">
            <img src="{base}/img/SkintyFiaFDC.jpg" alt="Cover picture for Fontaines D.C.'s Skinty Fia album" width="95%">
        </div>

        <p class="vTitle">Fontaines D.C. - Skinty Fia</p>
    </div>

    <div class="vinyl8">
        <div class="vImage">
            <img src="{base}/img/frootMATD.jpg" alt="Cover picture for Marina's FROOT album" width="95%">
        </div>

        <p class="vTitle">Marina - FROOT [10 YEAR ANNIVERSARY]</p>
    </div>

    <div class="vinyl9">
        <div class="vImage">
            <img src="{base}/img/midasWH.jpg" alt="Cover picture for Wunderhorse's Midas album" width="95%">
        </div>

        <p class="vTitle">Wunderhorse - Midas</p>
    </div>

    <div class="vinyl10">
        <div class="vImage">
            <img src="{base}/img/geminirightsSL.jpg" alt="Cover picture for Steve Lacy's Gemini Rights album" width="95%">
        </div>

        <p class="vTitle">Steve Lacy - Gemini Rights</p>
    </div>

    <div class="vinyl11">
        <div class="vImage">
            <img src="{base}/img/somerapsongsES.jpg" alt="Cover picture for Earl Sweatshirt's Some Rap Songs album" width="95%">
        </div>

        <p class="vTitle">Earl Sweatshirt - Some Rap Songs</p>
    </div>

    <div class="vinyl12">
        <div class="vImage">
            <img src="{base}/img/sossza.webp" alt="Cover picture for SZA's SOS album" width="95%">
        </div>

        <p class="vTitle">SZA - SOS</p>
    </div>

    <div class="vinyl13">
        <div class="vImage">
            <img src="{base}/img/ctrlsza.jpg" alt="Cover picture for SZA's CTRL album" width="95%">
        </div>

        <p class="vTitle">SZA - CTRL</p>
    </div>

    <div class="vinyl14">
        <div class="vImage">
            <img src="{base}/img/eternalsunshineAG.jpg" alt="Cover picture for Ariana Grande's Eternal Sunshine album" width="95%">
        </div>

        <p class="vTitle">Ariana Grande - Eternal Sunshine</p>
    </div>

    <div class="vinyl15">
        <div class="vImage">
            <img src="{base}/img/esbdaAG.jpg" alt="Cover picture for Ariana Grande's Deluxe Eternal Sunshine Brighter Days Ahead album" width="95%">
        </div>

        <p class="vTitle">Ariana Grande - Eternal Sunshine: Brighter Days Ahead</p>
    </div>

    <div class="vinyl16">
        <div class="vImage">
            <img src="{base}/img/crybabyMM.jpg" alt="Cover picture for Melanie Martinez's Crybaby album" width="95%">
        </div>

        <p class="vTitle">Melanie Martinez - Crybaby [DELUXE EDITION]</p>
    </div>

    <div class="vinyl17">
        <div class="vImage">
            <img src="{base}/img/tdsotmPF.webp" alt="Cover picture for Pink Floyd's The Dark Side Of The Moon album" width="95%">
        </div>

        <p class="vTitle">Pink Floyd - The Dark Side Of The Moon [50TH ANNIVERSARY COLLECTOR'S EDITION]</p>
    </div>

    <div class="vinyl18">
        <div class="vImage">
            <img src="{base}/img/tbopfafitdPF.jpg" alt="Cover picture for Pink Floyd's The Best of Pink Floyd: A Foot in The Door album" width="95%">
        </div>

        <p class="vTitle">Pink Floyd - The Best of Pink Floyd: A Foot in The Door</p>
    </div>

    <div class="vinyl19">
        <div class="vImage">
            <img src="{base}/img/gnxKL.webp" alt="Cover picture for Kendrick Lamar's GNX album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - GNX [WHITE EXCLUSIVE VINYL]</p>
    </div>

    <div class="vinyl20">
        <div class="vImage">
            <img src="{base}/img/damnKL.jpg" alt="Cover picture for Kendrick Lamar's DAMN. album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - DAMN.</p>
    </div>

    <div class="vinyl21">
        <div class="vImage">
            <img src="{base}/img/tpabKL.jpg" alt="Cover picture for Kendrick Lamar's To Pimp A Butterfly album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - To Pimp A Butterfly</p>
    </div>

    <div class="vinyl22">
        <div class="vImage">
            <img src="{base}/img/untitledunmKL.jpg" alt="Cover picture for Kendrick Lamar's untitled unmastered album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - untitled unmastered</p>
    </div>

    <div class="vinyl23">
        <div class="vImage">
            <img src="{base}/img/submarineTM.jpg" alt="Cover picture for The Marías' Submarine album" width="95%">
        </div>

        <p class="vTitle">The Marías - Submarine</p>
    </div>

    <div class="vinyl24">
        <div class="vImage">
            <img src="{base}/img/lovedeluxeS.webp" alt="Cover picture for Sade's Love Deluxe album" width="95%">
        </div>

        <p class="vTitle">Sade - Love Deluxe</p>
    </div>

    <div class="vinyl25">
        <div class="vImage">
            <img src="{base}/img/promiseS.webp" alt="Cover picture for Sade's Promise album" width="95%">
        </div>

        <p class="vTitle">Sade - Promise</p>
    </div>

    <div class="vinyl26">
        <div class="vImage">
            <img src="{base}/img/diamondlifeS.webp" alt="Cover picture for Sade's Diamond Life album" width="95%">
        </div>

        <p class="vTitle">Sade - Diamond Life</p>
    </div>

    <div class="vinyl27">
        <div class="vImage">
            <img src="{base}/img/anatswtisoL.webp" alt="Cover picture for Laufey's A Night at The Symphony: With The Iceland Symphony Orchestra album" width="95%">
        </div>

        <p class="vTitle">Laufey - A Night at The Symphony: With The Iceland Symphony Orchestra</p>
    </div>

    <div class="vinyl28">
        <div class="vImage">
            <img src="{base}/img/anatswtisoL.webp" alt="Cover picture for Laufey's A Night at The Symphony: With The Iceland Symphony Orchestra album" width="95%">
        </div>

        <p class="vTitle"></p>
    </div>

    <div class="vinyl29">
        <div class="vImage">
            <img src="{base}/img/tbopfafitdPF.jpg" alt="Cover picture for Pink Floyd's The Best of Pink Floyd: A Foot in The Door album" width="95%">
        </div>

        <p class="vTitle"></p>
    </div>
</div>

<style>
    .vinylContainer {
        display: inline-flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: rgba(241, 231, 191);
        max-width: 90%;
        max-height: fit-content;
        align-self: center;
    }
    .vinyl1, .vinyl2, .vinyl3, .vinyl4, .vinyl5,
    .vinyl6, .vinyl7, .vinyl8, .vinyl9, .vinyl10,
    .vinyl11, .vinyl12, .vinyl13, .vinyl14, .vinyl15,
    .vinyl16, .vinyl17, .vinyl18, .vinyl19, .vinyl20,
    .vinyl21, .vinyl22, .vinyl23, .vinyl24, .vinyl25,
    .vinyl26, .vinyl27, .vinyl28, .vinyl29 {
        background-color: rgba(251, 181, 194);
        max-width: 300px;
        min-width: 300px;
        max-height: 450px;
        min-height: 350px;
        margin: 1rem;
        border-radius: 2%;

        display: grid;
        place-items: top;
    }

    .vImage {
        background-color: rgba(255, 160, 195, 0.7);
        max-width: fit-content;
        min-width: fit-content;
        max-height:fit-content;
        min-height: fit-content;
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
        font-size: large;
        width: 90%;
        justify-self: center;
    }
</style>