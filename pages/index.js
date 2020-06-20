import Head from 'next/head';

import Container from '@components/container'
import HeroPost from '@components/hero-post'
import Intro from '@components/intro'
import Layout from '@components/layout'
import MorePosts from '@components/more-posts'
import SectionSeparator from '@components/section-separator';

import { getAllPostsForHome } from '@lib/api'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Michael Pierce's Blog</title>
        </Head>
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
