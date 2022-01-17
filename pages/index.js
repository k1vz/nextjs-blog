import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h2 className={utilStyles.headingLg}>Minha trajetória na programação</h2>
				<p>Comecei na programação em 2019 com VisualG, após isso passei pelo C e pelo Python, e então fui para o JavaScript e TypeScript, o que programo atualmente.</p>

				<p>Minha experiência se dá por meio de projetos extracurriculares, como o <a href="https://github.com/Studio-024/memorize">Memorize</a>, um website de memorização por meio de Flashcards, e do <a href="https://github.com/Studio-024/self-wiser">Selfwiser</a>, um blog destinado a auxiliar alunos a aprender mais eficientemente (em desenvolvimento), além do meu <a href="https://github.com/AlexandreXYZ/CGE">TCC do curso técnico (CGE)</a>, um algoritmo que tem como objetivo definir a posição do sol por meio da localização geográfica e do horário.</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
						<Link href={`/posts/${id}`}>
							<a>{title}</a>
						</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={date} />
						</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}
