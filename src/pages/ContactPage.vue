<script setup>
import ContactSection from '../components/features/Contact/ContactSection.vue';
import LeaftsAnimation from '../components/global/LeaftsAnimation.vue';
</script>

<template>
	<div class="content">
		<ContactSection />
		<LeaftsAnimation />
	</div>
</template>

<style scoped>
	.content {
		background: linear-gradient(to bottom, var(--primary-10), var(--bg-primary), var(--bg-primary));
		min-height: 100vh;
	}
</style>
