<script setup>

defineProps({
	icon: {
		type: Object,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})

</script>

<template>
	<div class="wrapper">
		<article class="service-card">
			<div class="card-header">
				<div class="icon-wrapper">
					<component :is="icon" />
				</div>
				<slot name="title">
					<h3>{{  title }}</h3>
				</slot>
			</div>
			<div class="card-content">
				<slot name="description"></slot>
				<slot name="action"></slot>
			</div>
		</article>
	</div>
</template>

<style scoped>

	.wrapper {
		background: linear-gradient(to bottom right, var(--primary-10), var(--secondary-30) );
		padding: 0.05rem;
		border-radius: 0.525rem;
	}

	.service-card {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1.2rem;
		border: 1px solid transparent;
		border-radius: 0.525rem;
		background-color: var(--bg-primary-50);
		transition: all 0.3s ease;
	}

	.service-card:hover {
		border: 1px solid var(--primary-10);
		box-shadow: 0 0px 15px -3px var(--primary-50);
	}

	.card-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	.icon-wrapper {
		color:  var(--primary-100);
		background-color:var(--primary-10);
		padding: 1rem;
		border-radius: 0.4rem;
		display: flex;
		transition: all 0.3s ease;
	}
	
	.service-card:hover .icon-wrapper {
		transform: scale(1.2);
	}

	.icon-wrapper svg {
		width: 40px;
		height: 40px;
	}

	h3 {
		color: var(--text-primary);
		margin: 0;
	}

	.card-content {
		flex: 1;
		opacity: 0.9;
	}

</style>