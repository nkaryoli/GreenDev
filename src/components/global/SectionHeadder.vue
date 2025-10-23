<script setup>
</script>

<template>
	<header class="section-header">
		<h2><slot name="title">Section Title</slot></h2>
		<p><slot name="subtitle">This is a subtitle for the section header.</slot></p>
	</header>
</template>

<style scoped>
h2 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	text-align: center;
}

p {
	font-size: 1.2rem;
	text-align: center;
	max-width: 800px;
	margin-bottom: 3rem;
}

@media (max-width: 768px) {
	h2 {
		font-size: 2rem;
	}
	
	span {
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}
}

@media (max-width: 480px) {
	h2 {
		font-size: 1.75rem;
	}
	
	span {
		font-size: 1rem;
	}
}

@media (max-width: 360px) {
	h2 {
		font-size: 1.5rem;
	}
	
	span {
		font-size: 0.9rem;
	}
}
</style>