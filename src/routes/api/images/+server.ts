import { json } from '@sveltejs/kit'

export async function GET() {
	const images = []
	for (let i = 10; i < 20; i++) {
		images.push({ id: i, alt: 'Placeholder', src: `https://picsum.photos/id/${i}/800` })
	}
	return json(images)
}
