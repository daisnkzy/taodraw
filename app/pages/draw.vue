<script setup>
	const { loggedIn, user, clear } = useUserSession()

	const handleSaveDraw = async (dataUrl) => {
		const blob = await fetch(dataUrl).then((res) => res.blob())
		const file = new File([blob], 'drawing.jpeg', { type: 'image/jpeg' })

		const formData = new FormData()
		formData.append('drawing', file)

		try {
			await $fetch('/api/drawing/upload', {
				method: 'POST',
				body: formData,
			})
			navigateTo('/')
		} catch (error) {
			alert(error)
		}
	}
</script>

<template>
	<div v-if="loggedIn">
		<UAvatar :src="user.avatar" :alt="user.login" size="lg" />
		<p>hello {{ user?.name }}</p>
	</div>
	<UButton v-else to="/api/auth/github" color="black" external>github</UButton>
	<UButton v-if="loggedIn" @click="clear" color="white">logout</UButton>
	<DrawPad v-if="loggedIn" @save="handleSaveDraw" />
</template>
