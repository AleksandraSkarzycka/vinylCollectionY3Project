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
        text-align: center;
		position: fixed;
		width: 100%;
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
		font-family: 'font3', sans-serif;
		font-size: large;
        text-decoration: none;
        color: rgb(0, 0, 0);
    }
    
    main {
        padding: 0;
        text-align: center;
    }
    
    footer {
		font-family: 'font3', sans-serif;
		font-size: large;
        background-color: #FDF5E6;
        color: rgb(0, 0, 0);
        text-align: center;
        padding: 1rem;
        bottom: 0;
        width: 100%;
    }
</style>