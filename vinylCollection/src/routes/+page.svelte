<script>
    import { base } from '$app/paths';
    import { supabase } from '$lib/supabaseClient'
</script>

<div class="title">
    <p>Aleksandra's Vinyls</p>
</div>

<div class="vinylContainer">
    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/sunburnDF.jpg" alt="Cover picture for Dominic Fike's Sunburn album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - Sunburn</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/14minutesDF.jpg" alt="Cover picture for Dominic Fike's 14 Minutes album" width="95%">
        </div>
        
        <p class="vTitle">Dominic Fike - 14 Minutes</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/wcpgwDF.jpg" alt="Cover picture for Dominic Fike's What Could Possibly Go Wrong album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - What Could Possibly Go Wrong</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/thelovethatishowedyouwasyourstokeepLS.png" alt="Cover picture for Love Spells' The Love That I Showed You Was Yours To Keep album" width="95%">
        </div>

        <p class="vTitle">Love Spells - The Love That I Showed You Was Yours To Keep</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/BlushKA.jpg" alt="Cover picture for Kevin Abstract's Blush album" width="95%">
        </div>

        <p class="vTitle">Kevin Abstract - Blush</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/romanceFDC.jpg" alt="Cover picture for Fontaines D.C.'s Romance album" width="95%">
        </div>

        <p class="vTitle">Fontaines D.C. - Romance</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/SkintyFiaFDC.jpg" alt="Cover picture for Fontaines D.C.'s Skinty Fia album" width="95%">
        </div>

        <p class="vTitle">Fontaines D.C. - Skinty Fia</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/frootMATD.jpg" alt="Cover picture for Marina's FROOT album" width="95%">
        </div>

        <p class="vTitle">Marina - FROOT [10 YEAR ANNIVERSARY]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/midasWH.jpg" alt="Cover picture for Wunderhorse's Midas album" width="95%">
        </div>

        <p class="vTitle">Wunderhorse - Midas</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/geminirightsSL.jpg" alt="Cover picture for Steve Lacy's Gemini Rights album" width="95%">
        </div>

        <p class="vTitle">Steve Lacy - Gemini Rights</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/somerapsongsES.jpg" alt="Cover picture for Earl Sweatshirt's Some Rap Songs album" width="95%">
        </div>

        <p class="vTitle">Earl Sweatshirt - Some Rap Songs</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/sossza.webp" alt="Cover picture for SZA's SOS album" width="95%">
        </div>

        <p class="vTitle">SZA - SOS</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/ctrlsza.jpg" alt="Cover picture for SZA's CTRL album" width="95%">
        </div>

        <p class="vTitle">SZA - CTRL</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/eternalsunshineAG.jpg" alt="Cover picture for Ariana Grande's Eternal Sunshine album" width="95%">
        </div>

        <p class="vTitle">Ariana Grande - Eternal Sunshine</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/esbdaAG.jpg" alt="Cover picture for Ariana Grande's Deluxe Eternal Sunshine Brighter Days Ahead album" width="95%">
        </div>

        <p class="vTitle">Ariana Grande - Eternal Sunshine: Brighter Days Ahead</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/crybabyMM.jpg" alt="Cover picture for Melanie Martinez's Crybaby album" width="95%">
        </div>

        <p class="vTitle">Melanie Martinez - Crybaby [DELUXE EDITION]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/tdsotmPF.webp" alt="Cover picture for Pink Floyd's The Dark Side Of The Moon album" width="95%">
        </div>

        <p class="vTitle">Pink Floyd - The Dark Side Of The Moon [50TH ANNIVERSARY COLLECTOR'S EDITION]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/tbopfafitdPF.jpg" alt="Cover picture for Pink Floyd's The Best of Pink Floyd: A Foot in The Door album" width="95%">
        </div>

        <p class="vTitle">Pink Floyd - The Best of Pink Floyd: A Foot in The Door</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/gnxKL.webp" alt="Cover picture for Kendrick Lamar's GNX album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - GNX [WHITE EXCLUSIVE VINYL]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/damnKL.jpg" alt="Cover picture for Kendrick Lamar's DAMN. album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - DAMN.</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/tpabKL.jpg" alt="Cover picture for Kendrick Lamar's To Pimp A Butterfly album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - To Pimp A Butterfly</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/untitledunmKL.jpg" alt="Cover picture for Kendrick Lamar's untitled unmastered album" width="95%">
        </div>

        <p class="vTitle">Kendrick Lamar - untitled unmastered</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/submarineTM.jpg" alt="Cover picture for The Marías' Submarine album" width="95%">
        </div>

        <p class="vTitle">The Marías - Submarine</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/lovedeluxeS.webp" alt="Cover picture for Sade's Love Deluxe album" width="95%">
        </div>

        <p class="vTitle">Sade - Love Deluxe</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/promiseS.webp" alt="Cover picture for Sade's Promise album" width="95%">
        </div>

        <p class="vTitle">Sade - Promise</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/diamondlifeS.webp" alt="Cover picture for Sade's Diamond Life album" width="95%">
        </div>

        <p class="vTitle">Sade - Diamond Life</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/anatswtisoL.webp" alt="Cover picture for Laufey's A Night at The Symphony: With The Iceland Symphony Orchestra album" width="95%">
        </div>

        <p class="vTitle">Laufey - A Night at The Symphony: With The Iceland Symphony Orchestra</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/chromakopiaTTC.webp" alt="Cover picture for Tyler, The Creator's Chromakopia album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Chromakopia [TEST PRESSING VINYL]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/chromakopia2TTC.webp" alt="Cover picture for Tyler, The Creator's Chromakopia album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Chromakopia</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/cherrybombTTC.webp" alt="Cover picture for Tyler, The Creator's Cherry Bomb album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Cherry Bomb [10TH YEAR ANNIVERSARY]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/donttaptheglassTTC.jpg" alt="Cover picture for Tyler, The Creator's Don't Tap The Glass album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Don't Tap The Glass [TEST PRESSING VINYL]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/sfflowerboyTTC.jpg" alt="Cover picture for Tyler, The Creator's Scum Fuck Flower Boy album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Scum Fuck Flower Boy</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/wolfTTC.webp" alt="Cover picture for Tyler, The Creator's Wolf album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Wolf</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/callmeifugetlostTTC.webp" alt="Cover picture for Tyler, The Creator's Call Me If You Get Lost album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Call Me If You Get Lost</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/igorTTC.jpg" alt="Cover picture for Tyler, The Creator's Igor album" width="95%">
        </div>

        <p class="vTitle">Tyler, The Creator - Igor</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/freudianDC.jpg" alt="Cover picture for Daniel Caesar's Freudian album" width="95%">
        </div>

        <p class="vTitle">Daniel Caesar - Freudian</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/sonofspergyDC.jpg" alt="Cover picture for Daniel Caesar's Son Of Spergy album" width="95%">
        </div>

        <p class="vTitle">Daniel Caesar - Son Of Spergy</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/qmxxxtentacion.webp" alt="Cover picture for xxxtentacion's ? album" width="95%">
        </div>

        <p class="vTitle">xxxtentacion - ?</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/mcvolalphaC418.webp" alt="Cover picture for C418's Minecraft Volume Alpha album" width="95%">
        </div>

        <p class="vTitle">C418 - Minecraft Volume Alpha</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/mcvolbetaC418.webp" alt="Cover picture for C418's Minecraft Volume Beta album" width="95%">
        </div>

        <p class="vTitle">C418 - Minecraft Volume Beta</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/whocaresROC.jpg" alt="Cover picture for Rex Orange County's Who Cares? album" width="95%">
        </div>

        <p class="vTitle">Rex Orange County - Who Cares?</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/mansbestfriendSC.webp" alt="Cover picture for Sabrina Carpenter's Man's Best Friend album" width="95%">
        </div>

        <p class="vTitle">Sabrina Carpenter - Man's Best Friend</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/xsdeluxeCAS.webp" alt="Cover picture for Cigarettes After Sex's X's Deluxe album" width="95%">
        </div>

        <p class="vTitle">Cigarettes After Sex - X's [DELUXE]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/channelorangeFO.png" alt="Cover picture for Frank Ocean's Channel Orange album" width="95%">
        </div>

        <p class="vTitle">Frank Ocean - Channel Orange</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/kenopsiaQ.jpg" alt="Cover picture for quannnic's Kenopsia album" width="95%">
        </div>

        <p class="vTitle">quannnic - Kenopsia [ON THE WAY]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/heartJR.webp" alt="Cover picture for Jane Remover's Heart album" width="95%">
        </div>

        <p class="vTitle">Jane Remover - ♡ [ON THE WAY]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/rocketDF.jpg" alt="Cover picture for Dominic Fike's Rocket album" width="95%">
        </div>

        <p class="vTitle">Dominic Fike - Rocket [ON THE WAY]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/landofpineSC.jpg" alt="Cover picture for Sugar Cherry's Land Of Pine album" width="95%">
        </div>

        <p class="vTitle">Sugar Cherry - Land Of Pine [ON THE WAY]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/pissinthewindJ.jpg" alt="Cover picture for Joji's Piss in The Wind album" width="95%">
        </div>

        <p class="vTitle">Joji - Piss in The Wind [ON THE WAY, ONLINE STORE EXCLUSIVE BUNDLE]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/ngeOSS.webp" alt="Cover picture for Neon Genesis Evangelion album" width="95%">
        </div>

        <p class="vTitle">Neon Genesis Evangelion OST</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/evangelionfinally.jpg" alt="Cover picture for Evangelion Finally album" width="95%">
        </div>

        <p class="vTitle">Yoko Takahashi & Megumi Hayashibara - Evangelion Finally</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/bleachost1.2SS.webp" alt="Cover picture for Shiro Sagisu's Bleach OST Volume 1 - 2 album" width="95%">
        </div>

        <p class="vTitle">Shiro Sagisu - Bleach Vol. 1 - 2 OST</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/tlou2OST.jpg" alt="Cover picture for Gustavo Santaolalla's The Last of Us Part II album" width="95%">
        </div>

        <p class="vTitle">Gustavo Santaolalla - The Last of Us Part II</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/silenthill2EDDD.webp" alt="Cover picture for Konami Digital Entertainment's Silent Hill 2 album" width="95%">
        </div>

        <p class="vTitle">Konami Digital Entertainment - Silent Hill 2 [EXCLUSIVE EDITION DELUXE DOUBLE]</p>
    </div>

    <div class="vinyl">
        <div class="vImage">
            <img src="{base}/img/silenthill2boxsetKDE.webp" alt="Cover picture for Konami Digital Entertainment's Silent Hill 2 Boxset album" width="95%">
        </div>

        <p class="vTitle">Konami Digital Entertainment - Silent Hill 2 [LIMITED EDITION DELUXE X6LP BOXSET]</p>
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
</style>