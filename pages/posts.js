import Header from '@components/header';
import Container from '@components/container';
import Layout from '@components/layout';
import AllPosts from '@components/all-posts';

import { getAllPosts } from '@lib/api';

export default function Quotes({ allPosts }) {
  const posts = allPosts;

  return (
    <>
      <Layout preview={false}>
        <Container>
          <Header />
          <h1>Posts</h1>
          <AllPosts posts={posts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // No Preview Mode for All Posts
  const allPosts = await getAllPosts();
  return {
    props: { allPosts },
  };
}
