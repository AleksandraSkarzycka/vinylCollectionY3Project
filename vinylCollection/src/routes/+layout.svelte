<script>
	import { base } from "$app/paths";
	import "$lib/css/fonts.css";

    // Import components
</script>


<!-- Header -->
<header>
    <nav>
        <ul>
            <li><a href="{base}/">Collection</a></li>
            <li><a href="{base}/wishlist">Wishlist</a></li>
            <li><a href="{base}/selling">Selling</a></li>
        </ul>
    </nav>
    <div class="dropdown">
        <img class="profile" src="{base}/img/ProfileIcon.png" alt="A blue profile icon" width="30px">
        <div class="dropdown-content">
            <a href="#">Login/Register</a>
            <a href="#">Likes</a>
        </div>
    </div>
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer>
    <p>&copy; 2026 My Vinyl Collection. All rights reserved.</p>
</footer>


<style>
    
    header {
        background-color: #FDF5E6;
        padding: 1rem;
		position: fixed;
		width: 100%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .profile {
        float: right;
    }
    
    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }
    
    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
		font-family: 'font4', sans-serif;
        font-weight: 1000;
        letter-spacing: 5px;
		font-size: large;
        text-decoration: none;
        color: rgb(0, 0, 0);
    }
    
    main {
        padding: 0;
        text-align: center;
    }
    
    footer {
		font-family: 'font4', sans-serif;
        font-weight: 1000;
        letter-spacing: 5px;
		font-size: large;
        background-color: #FDF5E6;
        color: rgb(0, 0, 0);
        text-align: center;
        padding: 1rem;
        bottom: 0;
        width: 100%;
    }

    /* I got this dropdown css from W3Schools, tweaked colours and a bit of the positioning myself */
    .dropdown {
        position: relative;
    }

    /* Dropdown content */
    .dropdown-content {
        background-color: #FDF5E6;
        display: none;
        position: absolute;
        right: 0;
        margin-top: 1.7%;
        min-width: fit-content;
        max-width: fit-content;
        width: fit-content;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    /* Links inside dropdown content */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {
        background-color: #f1f1f1
    }

    /* Show the dropdown content on hover */
    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>