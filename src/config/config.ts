// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Dentistas Santa Coloma',
	siteDescription:
		'Directorio de dentistas y clínicas dentales en Santa Coloma de Gramenet. Encuentra el mejor dentista cerca de ti.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Dentistas Santa Coloma'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}