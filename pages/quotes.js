import Header from '@components/header';
import Container from '@components/container';
import Layout from '@components/layout';
import AllQuotes from '@components/all-quotes';

import { getAllQuotes } from '@lib/api';

export default function Quotes({ allQuotes }) {
  const quotes = allQuotes;

  return (
    <>
      <Layout preview={false}>
        <Container>
          <Header />
          <h1>Quotes I Love</h1>
          <AllQuotes quotes={quotes} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // No Preview Mode for Quotes
  const allQuotes = await getAllQuotes();
  return {
    props: { allQuotes },
  };
}
