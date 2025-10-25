<script setup>
import { computed } from 'vue';

const props = defineProps({
	size: { type: String, default: 'medium' },
	variant: { type: String, default: 'primary' },
	disabled: { type: Boolean, default: false },
	fullWidth: { type: Boolean, default: false }
});

const emit = defineEmits(['click']);

const classes = computed(() => [
	'primary-btn',
	`primary-btn--${props.size}`,
	`primary-btn--${props.variant}`,
	{ 'primary-btn--full': props.fullWidth, 'primary-btn--disabled': props.disabled }
]);


function onClick(e) {
	if (props.disabled) return;
	emit('click', e);
}

</script>

<template>
	<button :class="classes" :disabled="disabled" @click="onClick" aria-pressed="false">
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<style scoped>

.primary-btn {
	font-weight: 700;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
}

.primary-btn--small {
	padding: 0.4rem 0.8rem;
	font-size: 0.85rem;
	border-radius: 6px;
}

.primary-btn--medium {
	padding: 0.9rem 2rem;
	font-size: 1rem;
	border-radius: 8px;
}

.primary-btn--large {
	padding: 1.25rem 2.5rem;
	font-size: 1.125rem;
	border-radius: 10px;
}

.primary-btn--default {
	background: var(--primary-100);
	color: #fff;
}

.primary-btn--default:hover {
	box-shadow: 0 10px 15px -3px var(--primary-50);
}

.primary-btn--secondary {
	background: var(--secondary-100);
	color: #fff;
}

.primary-btn--outline {
	background: transparent;
	color: var(--primary-100);
	border: 2px solid var(--primary-100);
}

.primary-btn--full {
	width: 100%;
	justify-content: center;
}

.primary-btn--disabled,
.primary-btn:disabled {
	opacity: 0.6;
	cursor: not-allowed;
	pointer-events: none;
	box-shadow: none;
}
</style>