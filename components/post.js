import Link from 'next/link';
import { RichText } from 'prismic-reactjs';
import Date from './date';

export default function Post({ title, date, slug }) {
  return (
    <section>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]" prefetch={false}>
          <a>{RichText.asText(title)}</a>
        </Link>
        <br />
        <Date dateString={date} />
      </h3>
    </section>
  );
}
