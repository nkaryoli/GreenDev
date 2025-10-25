<script setup>

defineProps({
	number: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})

</script>
<template>
	<div class="card-container">
		<div class="card">
			<div class="front-content">
				<slot name="title">
					<span>{{ number }}</span>
					<p>{{ title }}</p>
				</slot>
			</div>
			<div class="content">
				<slot name="description">
					<p>{{ description }}</p>
				</slot>
			</div>
		</div>
	</div>
</template>
<style scoped>

.card-container {
	width: 250px;
	height: 200px;
	position: relative;
	border-radius: 10px;
	background-color: var(--bg-secondary-40);
	/* box-shadow: 0 10px 20px var(--bg-secondary); */
	backdrop-filter: blur(5px);
	overflow: hidden;
}

.card {
	width: 100%;
	height: 100%;
	border-radius: inherit;
}

.card .front-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
	padding: 1rem;
}

.card .front-content span {
	font-size: 2rem;
	font-weight: 700;
	color: var(--primary-100);
	margin-bottom: 0.625rem;
	transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .front-content p {

	font-weight: 500;
	text-align: center;
	opacity: 1;
	/* background: linear-gradient(-45deg, var(--primary-100) 0%, var(--secondary-100) 100%); */
	color: white;
	/* background-clip: text; 
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;*/
	transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .content {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 10px;
	background: linear-gradient(-45deg, var(--secondary-30) 0%, var(--secondary-50) 100%);
	color: white;
	padding: 0.8rem;
	line-height: 1.2rem;
	font-size: 0.9rem;
	border-radius: 5px;
	pointer-events: none;
	transform: translateY(96%);
	transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover .content {
	transform: translateY(0);
}

.card:hover .front-content {
	transform: translateY(-30%);
}

.card:hover .front-content p, .card:hover .front-content span {
	opacity: 0;
}
</style>