import PostPreview from '../components/post-preview'

export default function MorePosts({ posts }) {
  return (
    <section>
      <h2>
        More Posts
      </h2>
      {posts.map(({ node }) => (
        <PostPreview
          key={node._meta.uid}
          title={node.title}
          date={node.date}
          slug={node._meta.uid}
        />
      ))}
    </section>
  )
}
