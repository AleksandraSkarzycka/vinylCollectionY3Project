<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, SubmitFunction } from './$types.js'

	interface Props {
		form: ActionData
	}
	let { form }: Props = $props()

	let loading = $state(false)

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<form class="row flex flex-center" method="POST" use:enhance={handleSubmit}>
	<div class="col-6 form-widget">
		<h1 class="header">Login via Email</h1>
		<p class="description">Sign in via magic link with your email below</p>
		{#if form?.message !== undefined}
		<div class="success {form?.success ? '' : 'fail'}">
			{form?.message}
		</div>
		{/if}
		<div>
			<label for="email">Email address</label>
			<input 
				id="email" 
				name="email" 
				class="inputField" 
				type="email" 
				placeholder="Your email" 
				value={form?.email ?? ''} 
			/>
		</div>
		{#if form?.errors?.email}
		<span class="flex items-center text-sm error">
			{form?.errors?.email}
		</span>
		{/if}
		<div>
			<button class="button primary block">
				{ loading ? 'Loading' : 'Send magic link' }
			</button>
		</div>
	</div>
</form>

<style>

	.flex-center {
		background-color: #fdf5e6;
		height: 100vh;
		max-width: 100%;
		align-content: center;
		justify-items: center;
	}
	.form-widget {
		max-width: 50%;
		width: 50%;
		height: 50vh;
		background-color: #e6dfd1;
		border-radius: 20px;
		justify-content: center;
		align-content: center;
	}
	.inputField {
		width: 40%;
		padding: 0.5rem;
		margin-top: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	.button {
		margin-top: 1rem;
		padding: 0.75rem;
		border: none;
		border-radius: 4px;
		color: black;
		background-color: #cccccc;
		cursor: pointer;
	}
	.button.primary {
		background-color: #cccccc;
	}
	.success {
		width: 60%;
		margin-top: 1rem;
		padding: 0.75rem;
		border-radius: 4px;
		color: white;
		background-color: #28a745;
		justify-self: center;
	}
	.success.fail {
		background-color: #dc3545;
	}

</style>