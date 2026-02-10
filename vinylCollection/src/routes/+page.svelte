<script>
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient'

    import Modal from '$lib/Modal.svelte';
    let isOpen = false;
    let activeCard = 0;
</script>

<div class="title">
    <p>Aleksandra's Vinyls</p>
</div>

<div class="vinylContainer">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 1; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/sunburnDF.jpg" alt="Cover picture for Dominic Fike's Sunburn album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - Sunburn</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 2; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/14minutesDF.jpg" alt="Cover picture for Dominic Fike's 14 Minutes album" width="95%">
        </div>
        
        <p class="vTitle">Dominic Fike - 14 Minutes</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 3; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/wcpgwDF.jpg" alt="Cover picture for Dominic Fike's What Could Possibly Go Wrong album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - What Could Possibly Go Wrong</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 4; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/thelovethatishowedyouwasyourstokeepLS.png" alt="Cover picture for Love Spells' The Love That I Showed You Was Yours To Keep album" width="95%">
        </div>

        <p class="vTitle">Love Spells - The Love That I Showed You Was Yours To Keep</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 5; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/BlushKA.jpg" alt="Cover picture for Kevin Abstract's Blush album" width="95%">
        </div>

        <p class="vTitle">Kevin Abstract - Blush</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 6; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/romanceFDC.jpg" alt="Cover picture for Fontaines D.C.'s Romance album" width="95%">
        </div>

        <p class="vTitle">Fontaines D.C. - Romance</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 7; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/SkintyFiaFDC.jpg" alt="Cover picture for Fontaines D.C.'s Skinty Fia album" width="95%">
        </div>

        <p class="vTitle">Fontaines D.C. - Skinty Fia</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 8; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/frootMATD.jpg" alt="Cover picture for Marina's FROOT album" width="95%">
        </div>

        <p class="vTitle">Marina - FROOT [10 YEAR ANNIVERSARY]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 9; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/midasWH.jpg" alt="Cover picture for Wunderhorse's Midas album" width="95%">
        </div>

        <p class="vTitle">Wunderhorse - Midas</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 10; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/geminirightsSL.jpg" alt="Cover picture for Steve Lacy's Gemini Rights album" width="95%">
        </div>

        <p class="vTitle">Steve Lacy - Gemini Rights</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 11; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/somerapsongsES.jpg" alt="Cover picture for Earl Sweatshirt's Some Rap Songs album" width="95%">
        </div>

        <p class="vTitle">Earl Sweatshirt - Some Rap Songs</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 12; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/sossza.webp" alt="Cover picture for SZA's SOS album" width="95%">
        </div>

        <p class="vTitle">SZA - SOS</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 13; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/ctrlsza.jpg" alt="Cover picture for SZA's CTRL album" width="95%">
        </div>

        <p class="vTitle">SZA - CTRL</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 14; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/eternalsunshineAG.jpg" alt="Cover picture for Ariana Grande's Eternal Sunshine album" width="95%">
        </div>

        <p class="vTitle">Ariana Grande - Eternal Sunshine</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 15; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/esbdaAG.jpg" alt="Cover picture for Ariana Grande's Deluxe Eternal Sunshine Brighter Days Ahead album" width="95%">
        </div>

        <p class="vTitle">Ariana Grande - Eternal Sunshine: Brighter Days Ahead</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 16; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/crybabyMM.jpg" alt="Cover picture for Melanie Martinez's Crybaby album" width="95%">
        </div>

        <p class="vTitle">Melanie Martinez - Crybaby [DELUXE EDITION]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 17; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/tdsotmPF.webp" alt="Cover picture for Pink Floyd's The Dark Side Of The Moon album" width="95%">
        </div>

        <p class="vTitle">Pink Floyd - The Dark Side Of The Moon [50TH ANNIVERSARY COLLECTOR'S EDITION]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 18; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/tbopfafitdPF.jpg" alt="Cover picture for Pink Floyd's The Best of Pink Floyd: A Foot in The Door album" width="95%">
        </div>

        <p class="vTitle">Pink Floyd - The Best of Pink Floyd: A Foot in The Door</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 19; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/gnxKL.webp" alt="Cover picture for Kendrick Lamar's GNX album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - GNX [WHITE EXCLUSIVE VINYL]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 20; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/damnKL.jpg" alt="Cover picture for Kendrick Lamar's DAMN. album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - DAMN.</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 21; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/tpabKL.jpg" alt="Cover picture for Kendrick Lamar's To Pimp A Butterfly album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - To Pimp A Butterfly</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 22; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/untitledunmKL.jpg" alt="Cover picture for Kendrick Lamar's untitled unmastered album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - untitled unmastered</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 23; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/submarineTM.jpg" alt="Cover picture for The Marías' Submarine album" width="95%">
        </div>

        <p class="vTitle">The Marías - Submarine</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 24; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/lovedeluxeS.webp" alt="Cover picture for Sade's Love Deluxe album" width="95%">
        </div>

        <p class="vTitle">Sade - Love Deluxe</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 25; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/promiseS.webp" alt="Cover picture for Sade's Promise album" width="95%">
        </div>

        <p class="vTitle">Sade - Promise</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 26; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/diamondlifeS.webp" alt="Cover picture for Sade's Diamond Life album" width="95%">
        </div>

        <p class="vTitle">Sade - Diamond Life</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 27; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/anatswtisoL.webp" alt="Cover picture for Laufey's A Night at The Symphony: With The Iceland Symphony Orchestra album" width="95%">
        </div>

        <p class="vTitle">Laufey - A Night at The Symphony: With The Iceland Symphony Orchestra</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 28; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/chromakopiaTTC.webp" alt="Cover picture for Tyler, The Creator's Chromakopia album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Chromakopia [TEST PRESSING VINYL]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 29; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/chromakopia2TTC.webp" alt="Cover picture for Tyler, The Creator's Chromakopia album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Chromakopia</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 30; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/cherrybombTTC.webp" alt="Cover picture for Tyler, The Creator's Cherry Bomb album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Cherry Bomb [10TH YEAR ANNIVERSARY]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 31; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/donttaptheglassTTC.jpg" alt="Cover picture for Tyler, The Creator's Don't Tap The Glass album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Don't Tap The Glass [TEST PRESSING VINYL]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 32; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/sfflowerboyTTC.jpg" alt="Cover picture for Tyler, The Creator's Scum Fuck Flower Boy album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Scum Fuck Flower Boy</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 33; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/wolfTTC.webp" alt="Cover picture for Tyler, The Creator's Wolf album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Wolf</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 34; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/callmeifugetlostTTC.webp" alt="Cover picture for Tyler, The Creator's Call Me If You Get Lost album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Call Me If You Get Lost</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 35; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/igorTTC.jpg" alt="Cover picture for Tyler, The Creator's Igor album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Igor</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 36; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/freudianDC.jpg" alt="Cover picture for Daniel Caesar's Freudian album" width="95%">
        </div>

        <p class="vTitle">Daniel Caesar - Freudian</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 37; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/sonofspergyDC.jpg" alt="Cover picture for Daniel Caesar's Son Of Spergy album" width="95%">
        </div>

        <p class="vTitle">Daniel Caesar - Son Of Spergy</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 38; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/qmxxxtentacion.webp" alt="Cover picture for xxxtentacion's ? album" width="95%">
        </div>

        <p class="vTitle">xxxtentacion - ?</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 39; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/mcvolalphaC418.webp" alt="Cover picture for C418's Minecraft Volume Alpha album" width="95%">
        </div>

        <p class="vTitle">C418 - Minecraft Volume Alpha</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 40; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/mcvolbetaC418.webp" alt="Cover picture for C418's Minecraft Volume Beta album" width="95%">
        </div>

        <p class="vTitle">C418 - Minecraft Volume Beta</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 41; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/whocaresROC.jpg" alt="Cover picture for Rex Orange County's Who Cares? album" width="95%">
        </div>

        <p class="vTitle">Rex Orange County - Who Cares?</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 42; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/mansbestfriendSC.webp" alt="Cover picture for Sabrina Carpenter's Man's Best Friend album" width="95%">
        </div>

        <p class="vTitle">Sabrina Carpenter - Man's Best Friend</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 43; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/xsdeluxeCAS.webp" alt="Cover picture for Cigarettes After Sex's X's Deluxe album" width="95%">
        </div>

        <p class="vTitle">Cigarettes After Sex - X's [DELUXE]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 44; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/channelorangeFO.png" alt="Cover picture for Frank Ocean's Channel Orange album" width="95%">
        </div>

        <p class="vTitle">Frank Ocean - Channel Orange</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 45; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/kenopsiaQ.jpg" alt="Cover picture for quannnic's Kenopsia album" width="95%">
        </div>

        <p class="vTitle">quannnic - Kenopsia [ON THE WAY]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 46; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/heartJR.webp" alt="Cover picture for Jane Remover's Heart album" width="95%">
        </div>

        <p class="vTitle">Jane Remover - ♡ [ON THE WAY]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 47; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/rocketDF.jpg" alt="Cover picture for Dominic Fike's Rocket album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - Rocket [ON THE WAY]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 48; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/landofpineSC.jpg" alt="Cover picture for Sugar Cherry's Land Of Pine album" width="95%">
        </div>

        <p class="vTitle">Sugar Cherry - Land Of Pine [ON THE WAY]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 49; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/pissinthewindJ.jpg" alt="Cover picture for Joji's Piss in The Wind album" width="95%">
        </div>

        <p class="vTitle">Joji - Piss in The Wind [ON THE WAY, ONLINE STORE EXCLUSIVE BUNDLE]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 50; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/ngeOSS.webp" alt="Cover picture for Neon Genesis Evangelion album" width="95%">
        </div>

        <p class="vTitle">Neon Genesis Evangelion OST</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 51; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/evangelionfinally.jpg" alt="Cover picture for Evangelion Finally album" width="95%">
        </div>

        <p class="vTitle">Yoko Takahashi & Megumi Hayashibara - Evangelion Finally</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 52; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/bleachost1.2SS.webp" alt="Cover picture for Shiro Sagisu's Bleach OST Volume 1 - 2 album" width="95%">
        </div>

        <p class="vTitle">Shiro Sagisu - Bleach Vol. 1 - 2 OST</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 53; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/tlou2OST.jpg" alt="Cover picture for Gustavo Santaolalla's The Last of Us Part II album" width="95%">
        </div>

        <p class="vTitle">Gustavo Santaolalla - The Last of Us Part II</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 54; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/silenthill2EDDD.webp" alt="Cover picture for Konami Digital Entertainment's Silent Hill 2 album" width="95%">
        </div>

        <p class="vTitle">Konami Digital Entertainment - Silent Hill 2 [EXCLUSIVE EDITION DELUXE DOUBLE]</p>
    </div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="vinyl" on:click={() => { isOpen = true; activeCard = 55; }}>
        <div class="vImage">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="{base}/img/silenthill2boxsetKDE.webp" alt="Cover picture for Konami Digital Entertainment's Silent Hill 2 Boxset album" width="95%">
        </div>

        <p class="vTitle">Konami Digital Entertainment - Silent Hill 2 [LIMITED EDITION DELUXE X6LP BOXSET]</p>
    </div>
</div>

<Modal open={isOpen}>
    <div class="cardBtn">
        <button on:click={() => isOpen = false}>Close</button>
    </div>
    {#if activeCard === 1}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/sunburnVinylDF.webp" alt="Picture of the Sunburn vinyl and inner sleeve and booklet." height="650px">
        </div>
        <div class="cardContent">
            <h1>Sunburn - Dominic Fike</h1>
            <p>IMAGES WILL BE REPLACED WITH MY OWN</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 2}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/14minutesDF.jpg" alt="Picture of the 14 Minutes vinyl." height="650px">
        </div>
        <div class="cardContent">
            <h1>14 Minutes - Dominic Fike</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 3}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/wcpgwVinylDF.jpg" alt="Picture of the What Could Possibly Go Wrong vinyl." height="650px">
        </div>
        <div class="cardContent">
            <h1>What Could Possibly Go Wrong - Dominic Fike</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 4}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/tltisywytkVinylLS.webp" alt="Picture of The Love That I Showed You Was Yours To Keep vinyl." height="650px">
        </div>
        <div class="cardContent">
            <h1>The Love That I Showed You Was Yours To Keep - Love Spells</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 5}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/blushVinylKA.jpg" alt="Picture of Blush vinyl." height="650px">
        </div>
        <div class="cardContent">
            <h1>Blush - Kevin Abstract</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 6}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/romanceVinylFDC.png" alt="Picture of the Romance vinyls." height="650px">
        </div>
        <div class="cardContent">
            <h1>Romance - Fontaines D.C.</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 7}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/skintyfiaVinylFDC.png" alt="Picture for Skinty Fia vinyl." height="650px">
        </div>
        <div class="cardContent">
            <h1>Skinty Fia - Fontaines D.C.</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 8}
    <div class="cardContainer">
        <div class="cardImg">
            <img src="{base}/img/frootVinylM.webp" alt="Picture of Froot vinyl." height="650px">
        </div>
        <div class="cardContent">
            <h1>Froot - Marina</h1>
            <p>WIP</p>
        </div>
    </div>
    {/if}

    {#if activeCard === 9}
        <h2>Card 9</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 10}
        <h2>Card 10</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 11}
        <h2>Card 11</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 12}
        <h2>Card 12</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 13}
        <h2>Card 13</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 14}
        <h2>Card 14</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 15}
        <h2>Card 15</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 16}
        <h2>Card 16</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 17}
        <h2>Card 17</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 18}
        <h2>Card 18</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 19}
        <h2>Card 19</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 20}
        <h2>Card 20</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 21}
        <h2>Card 21</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 22}
        <h2>Card 22</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 23}
        <h2>Card 23</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 24}
        <h2>Card 24</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 25}
        <h2>Card 25</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 26}
        <h2>Card 26</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 27}
        <h2>Card 27</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 28}
        <h2>Card 28</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 29}
        <h2>Card 29</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 30}
        <h2>Card 30</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 31}
        <h2>Card 31</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 32}
        <h2>Card 32</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 33}
        <h2>Card 33</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 34}
        <h2>Card 34</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 35}
        <h2>Card 35</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 36}
        <h2>Card 36</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 37}
        <h2>Card 37</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 38}
        <h2>Card 38</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 39}
        <h2>Card 39</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 40}
        <h2>Card 40</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 41}
        <h2>Card 41</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 42}
        <h2>Card 42</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 43}
        <h2>Card 43</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 44}
        <h2>Card 44</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 45}
        <h2>Card 45</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 46}
        <h2>Card 46</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 47}
        <h2>Card 47</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 48}
        <h2>Card 48</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 49}
        <h2>Card 49</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 50}
        <h2>Card 50</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 51}
        <h2>Card 51</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 52}
        <h2>Card 52</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 53}
        <h2>Card 53</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 54}
        <h2>Card 54</h2>
        <p>Different content here</p>
    {/if}

    {#if activeCard === 55}
        <h2>Card 55</h2>
        <p>Different content here</p>
    {/if}
</Modal>

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
    .vinyl {
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

    .cardBtn {
        display: flex;
        justify-content:right;
        margin-bottom: 0.5%;
    }

    .cardContainer {
        display: flex;
    }

    .cardImg {
        margin-right: 1%;
    }

    .cardContent {
        max-width: 47%;
        min-width: 47%;
        justify-items: left;
    }

    h1 {
        font-size: xx-large;
        font-family: 'font3';
        font-weight: 100;
    }
</style>