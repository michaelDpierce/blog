export default function Stats({ readingTime} ) {
  const { minutes, text, time, words } = readingTime;

  return (
    <>
      <style jsx>{`
        span {
          float: right;
        }
      `}</style>
      <span>
        <time>{text}</time>
        {' • '}
        <time>{`${words} words`}</time>
      </span>
    </>
  );
}
