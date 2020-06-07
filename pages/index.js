import Container from '../components/container'
import MorePosts from '../components/more-posts'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import Intro from '../components/intro'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

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
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
