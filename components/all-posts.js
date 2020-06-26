import Post from './post';

export default function AllPosts({ posts }) {
  return (
    <>
      {posts.map(({ node }) => (
        <Post
          title={node.title}
          date={node.date}
          slug={node._meta.uid}
        />
      ))}
    </>
  );
}
