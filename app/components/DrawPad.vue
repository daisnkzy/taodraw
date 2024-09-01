<script setup>
	import SignaturePad from 'signature_pad'

	const emit = defineEmits(['save'])
	const canvas = ref(null)
	const signaturePad = ref(null)

	onMounted(() => {
		signaturePad.value = new SignaturePad(canvas.value, {
			penColor: '#030712',
			backgroundColor: '#f9fafb',
		})
	})

	const save = async () => {
		if (!signaturePad.value) return
		const dataUrl = signaturePad.value.toDataURL('image/jpeg')
		emit('save', dataUrl)
	}
</script>

<template>
	<div class="max-w-md mx-auto">
		<canvas ref="canvas" class="border rounded-md" />
		<UButton @click="save">Save Draw</UButton>
	</div>
</template>
