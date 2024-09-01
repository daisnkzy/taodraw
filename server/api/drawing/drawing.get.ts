export default defineEventHandler(async () => {
	const { blobs } = await hubBlob().list({
		limit: 100,
	})
	return blobs
})
