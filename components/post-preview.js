import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import Date from './date'

export default function PostPreview({
  title,
  date,
  slug,
}) {
  return (
    <div>
      <Link as={`/posts/${slug}`} href="/posts/[slug]" prefetch={false}>
        <a>{RichText.asText(title)}</a>
      </Link>
      {' - '}
      <Date dateString={date} />
    </div>
  );
}

