export default function Stats({ readingTime }) {
  const { text, words } = readingTime;

  return (
    <>
      <time>{text}</time>
      {' or '}
      <time>{`${words} words`}</time>
    </>
  );
}
