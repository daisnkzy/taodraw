declare module '#auth-utils' {
	interface User {
		provider: 'github' | 'google'
		id: string
		name: string
		avatar: string
		url: string
	}
}
// export is required to avoid type errors
export {}
