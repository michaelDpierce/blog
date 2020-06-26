export default function Stats({ readingTime} ) {
  const { minutes, text, time, words } = readingTime;

  return (
    <>
      <time>{text}</time>
      {' or '}
      <time>{`${words} words`}</time>
      to consume
    </>
  );
}
