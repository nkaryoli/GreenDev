<script setup></script>

<template>
	<span class="badge">
		<slot></slot>
	</span>
</template>

<style scoped>

.badge {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background-color: var(--primary-10);
	padding: 0.4rem 1rem;
	border-radius: 24px;
	border: 1px solid var(--primary-30);
	font-size: 0.85rem;
	color: var(--primary-100);
	margin-bottom: 1.5rem;
	backdrop-filter: blur(10px);
}

</style>