import { RichText } from 'prismic-reactjs';

import SectionSeparator from '@components/section-separator';

export default function Quote({ thoughts, quote, cite }) {
  return (
    <blockquote>
      <RichText render={thoughts} />
      <SectionSeparator />
      <RichText render={quote} />
      <footer>
        <cite>{RichText.asText(cite)}</cite>
      </footer>
    </blockquote>
  );
}
