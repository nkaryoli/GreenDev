<script setup>
</script>

<template>
	<article class="card">
		<slot></slot>
	</article>
</template>

<style scoped>

	.card {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		border: 1px solid var(--primary-10);
		border-radius: 1rem;
		background-color: var(--bg-secondary-40);
		backdrop-filter: blur(5px);
		transition: all 0.3s ease;
	}

	.card:hover {
		border: 1px solid var(--primary-30);
	}

</style>