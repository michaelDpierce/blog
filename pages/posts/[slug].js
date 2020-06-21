import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { SITE_NAME } from '@lib/constants'

import Container from '@components/container'
import Header from '@components/header'
import Layout from '@components/layout'
import MorePosts from '@components/more-posts'
import PostBody from '@components/post-body'
import PostHeader from '@components/post-header'
import PostTitle from '@components/post-title'
import SectionSeparator from '@components/section-separator'
import Subscribe from '@components/subscribe';

import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api';

export const HOST_URL = process.env.HOST_URL

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  let isoDate;

  if (post) {
    isoDate = new Date(post?.date).toISOString();
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{`${post.title[0].text} | ${SITE_NAME}`}</title>

              <link
                rel="canonical"
                content={`${HOST_URL}/posts/${post._meta.uid}`}
              />

              {/* Open Graph */}
              <meta property="og:site_name" content={SITE_NAME} />
              <meta property="og:title" content={post.title[0].text} />
              <meta property="og:description" content={post.og_description} />
              <meta
                property="og:url"
                content={`${HOST_URL}/posts/${post._meta.uid}`}
              />
              <meta property="og:locale" content="en_us" />
              <meta property="og:image" content="/opengraph.png" />
              <meta property="og:type" content="article" />

              {/* Open Graph Article */}
              <meta property="article:published_time" content={isoDate} />
              <meta property="article:author" content={post.author.name} />
              <meta property="article:section" content={post.og_section} />
              <meta property="article:tag" content={post.og_tags} />

              {/* Twitter */}
              <meta name="twitter:card" content={post.og_description} />
              {post.author.twitter_handle && (
                <meta
                  name="twitter:creator"
                  content={post.author.twitter_handle}
                />
              )}
              <meta name="twitter:domain" content={HOST_URL} />
            </Head>
            <PostHeader
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.content}
            />
            <PostBody content={post.content} />
            <br />
            <SectionSeparator />
            <br />
            <Subscribe />
            {morePosts && morePosts.length > 0 && (
              <MorePosts posts={morePosts} />
            )}
            <br />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: true,
  }
}
