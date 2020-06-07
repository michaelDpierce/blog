import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from '../components/date'

export default function HeroPost({
  title,
  date,
  slug,
}) {
  return (
    <section>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>
            <RichText render={title} />
          </a>
        </Link>
      </h3>

      <Date dateString={date} />
    </section>
  )
}
