export default defineEventHandler(async (event) => {
	const { user } = await requireUserSession(event)

	const formData = await readFormData(event)
	const drawing = formData.get('drawing') as File

	if (!drawing || !drawing.size) {
		throw createError({ statusCode: 400, statusMessage: 'drawing is required' })
	}

	ensureBlob(drawing, {
		types: ['image/jpeg'],
		maxSize: '1MB',
	})

	return hubBlob().put(
		`${new Date('2077-01-01').getTime() - Date.now()}.jpeg`,
		drawing,
		{
			// prefix: 'drawings/',
			addRandomSuffix: true,
			customMetadata: {
				userProvider: user.provider,
				userId: user.id,
				userName: user.name,
				userAvatar: user.avatar,
				userUrl: user.url,
			},
		}
	)
})
