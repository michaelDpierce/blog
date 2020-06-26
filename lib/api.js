import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.LANGUAGE_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allPosts?.edges
}

export async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(
    `
    query {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            date
            title
            content
            excerpt
            author {
              ...on Author {
                name
                twitter_handle
                picture
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )

  return data.allPosts.edges
}

export async function getPostAndMorePosts(slug, previewData) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    post(uid: $slug, lang: $lang) {
      title
      content
      date
      og_section
      og_tags
      og_description
      author {
        ...on Author {
          name
          twitter_handle
          picture
        }
      }
      _meta {
        uid
      }
    }

   morePosts: allPosts(sortBy: date_DESC, first: 3) {
      edges {
        node {
          title
          content
          date
          excerpt
          author {
            ...on Author {
              name
              twitter_handle
              picture
            }
          }
          _meta {
            uid
          }
        }
      }
    }
  }
  `,
    {
      previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  )

  data.morePosts = data.morePosts.edges
    .filter(({ node }) => node._meta.uid !== slug)
    .slice(0, 2)

  return data
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query {
      allPosts {
        edges {
          node {
            title
            date
            _meta {
              uid
            }
          }
        }
      }
    }
  `
  );

  return data.allPosts.edges;
}

export async function getAllQuotes() {
  const data = await fetchAPI(
    `
    query {
      allQuotes {
        edges {
          node {
            thoughts
            quote
            cite
            _meta {
              uid
            }
          }
        }
      }
    }
  `
  );

  return data.allQuotes.edges;
}
