import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Comecei na programação em 2019 com VisualG, após isso passei pelo C e pelo Python, e então fui para o JavaScript e TypeScript, o que programo atualmente.</p>

				<p>Minha experiência se dá por meio de projetos extracurriculares, como o <a href="https://github.com/Studio-024/memorize">Memorize</a>, um website de memorização por meio de Flashcards, e do <a href="https://github.com/Studio-024/self-wiser">Selfwiser</a>, um blog destinado a auxiliar alunos a aprender mais eficientemente (em desenvolvimento), além do meu <a href="https://github.com/AlexandreXYZ/CGE">TCC do curso técnico (CGE)</a>, um algoritmo que tem como objetivo definir a posição do sol por meio da localização geográfica e do horário.</p>
			</section>
		</Layout>
	)
}
