// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Dentistas Santa Coloma',
		aboutText:
			'Directorio independiente de dentistas y clínicas dentales en Santa Coloma de Gramenet. Opiniones reales, datos verificados.',
		logo: {
			src: '/logo.svg',
			alt: 'Dentistas Santa Coloma',
			text: 'Dentistas'
		}
	},
	footerColumns: [
		{
			category: 'Legal',
			subCategories: [
				{
					subCategory: 'Aviso Legal',
					subCategoryLink: '/aviso-legal'
				},
				{
					subCategory: 'Política de Privacidad',
					subCategoryLink: '/politica-privacidad'
				},
				{
					subCategory: 'Política de Cookies',
					subCategoryLink: '/politica-cookies'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© 2026 Dentistas Santa Coloma. Santa Coloma de Gramenet, Barcelona.'
	}
}