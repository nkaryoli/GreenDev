<script setup>

defineProps({
	title: {
		type: String,
		required: true
	}
})

</script>

<template>
	<div class="card">
		<article class="service-card">
			<div class="card-header">
				<span><slot name="badge"></slot></span>
				<slot name="title">
					<h3>{{ title }}</h3>
				</slot>
			</div>
			<div class="card-content">
				<slot name="description"></slot>
				<slot name="action"></slot>
				<slot name="features"></slot>
			</div>
		</article>
	</div>
</template>

<style scoped>

.card {
	width: 100%;
	max-width: 1000px;
	padding: 2rem;
	border-radius: 3rem;
	border: var(--secondary-30) 0.2rem solid;
	transition: all 0.4s ease-in;
	position: relative;
	overflow: hidden;
}

.card:hover {
	background: linear-gradient(135deg,  var(--secondary-30),  var(--bg-primary));
	transform: translateY(-0.5rem);
	border: var(--secondary-100) 0.2rem solid;
	border-radius: 5.5rem 0 5.5rem 0;
	box-shadow: 0.4rem 0.4rem 0.9rem var(--primary-10);

}

.card-header {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-bottom: 1.5rem;
	gap: 1rem;
}

.card-header h3 {
	font-size: 1.6rem;
	font-weight: 500;
	position: relative;
	max-width: 700px;
}

.card-content {
	flex: 1;
	opacity: 0.9;
}

span {
	background-color: var(--primary-10);
	padding: 0.4rem 1.5rem;
	border-radius: 3rem;
	border: 1px solid var(--primary-50);
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--primary-100);
	margin-bottom: 0.5rem;
	backdrop-filter: blur(10px);
}

</style>