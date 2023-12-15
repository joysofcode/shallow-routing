export async function load({ fetch }) {
	const response = await fetch('/api/images')
	return { thumbnails: await response.json() }
}
