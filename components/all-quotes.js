import Quote from './quote';

export default function AllQuotes({ quotes }) {
  return (
    <>
      {quotes.map(({ node }) => (
        <Quote
          key={node._meta.uid}
          thoughts={node.thoughts}
          quote={node.quote}
          cite={node.cite}
        />
      ))}
    </>
  );
}
