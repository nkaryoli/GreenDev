<script setup>
import { computed } from 'vue';

const props = defineProps({
	size: { type: String, default: 'medium' },
	variant: { type: String, default: 'primary' },
	disabled: { type: Boolean, default: false },
	fullWidth: { type: Boolean, default: false },
	icon: { type: [Object, Function, String], default: null },
	iconPosition: { type: String, default: 'right' }
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
        <template v-if="$slots.icon">
            <slot name="icon" v-if="iconPosition === 'left'"></slot>
        </template>
        <component v-else-if="icon && iconPosition === 'left'" :is="icon" class="primary-btn__icon" />

        <span>
            <slot></slot>
        </span>

        <template v-if="$slots.icon">
            <slot name="icon" v-if="iconPosition === 'right'"></slot>
        </template>
        <component v-else-if="icon && iconPosition === 'right'" :is="icon" class="primary-btn__icon" />
    </button>
</template>

<style scoped>

.primary-btn {
	font-weight: 700;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	display: inline-flex;
	justify-content: center;
    align-items: center; 
	border-radius: 3rem;
    gap: 0.5rem; 
}

.primary-btn__icon {
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
	transition: transform 0.1s ease;
	stroke-width: 3;
}

.primary-btn:hover .primary-btn__icon {
	transform: translateX(5px);
}

.primary-btn--small {
	padding: 0.6rem 1.2rem;
	font-size: 0.85rem;
}

.primary-btn--medium {
	min-width: 300px;
	padding: 0.7rem 2rem;
	font-size: 1rem;
}

.primary-btn--large {
	padding: 0.8rem 2.5rem;
	font-size: 1.15rem;
}

.primary-btn--default {
	background: var(--primary-100);
	color: var(--bg-primary);
}

.primary-btn--default:hover {
	box-shadow: 0 10px 15px -3px var(--primary-50);
	scale: 1.02;
}

.primary-btn--secondary {
	background: var(--secondary-100);
	color: #fff;
}

.primary-btn--outline {
	background: transparent;
	color: var(--primary-100);
	border: 1px solid var(--primary-100);
}

.primary-btn--outline:hover {
	background: var(--primary-10);
	box-shadow: 0 10px 15px -3px var(--primary-50);
	scale: 1.02;
}

.primary-btn--full {
	width: 100%;
	justify-content: center;
	border-radius: 5%;
}

.primary-btn--disabled,
.primary-btn:disabled {
	opacity: 0.6;
	cursor: not-allowed;
	pointer-events: none;
	box-shadow: none;
}
</style>