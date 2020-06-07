import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from '../components/date'

export default function PostPreview({
  title,
  date,
  slug,
}) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          {RichText.asText(title)}
        </a>
      </Link>
      {' - '}
      <Date dateString={date} />
    </div>
  )
}
