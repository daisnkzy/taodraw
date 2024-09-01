<script setup>
	const { data } = await useFetch('/api/drawing/drawing')
	console.log(data.value)
</script>

<template>
	<div v-for="drawing in data?.blobs" :key="drawing.pathname">1</div>
</template>
