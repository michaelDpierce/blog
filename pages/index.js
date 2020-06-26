import Header from '@components/header';
import Container from '@components/container'
import HeroPost from '@components/hero-post'
import Intro from '@components/intro'
import Layout from '@components/layout'
import MorePosts from '@components/more-posts'
import SectionSeparator from '@components/section-separator';
import Subscribe from '@components/subscribe';

import { getAllPostsForHome } from '@lib/api'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Header />
        <Intro />
        <br />
        <SectionSeparator />
        <h2>Posts</h2>
        <Container>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost._meta.uid}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
          <br />
          <SectionSeparator />
          <Subscribe />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
