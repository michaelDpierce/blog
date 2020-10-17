import Post from './post';

export default function AllPosts({ posts }) {
  return (
    <>
      {posts.map(({ node }) => (
        <Post
          key={node._meta.uid}
          title={node.title}
          date={node.date}
          slug={node._meta.uid}
        />
      ))}
    </>
  );
}
