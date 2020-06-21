import { RichText } from 'prismic-reactjs';
import rt from 'reading-time';

import Date from './date'
import PostTitle from './post-title'
import Stats from './stats';
import Avatar from './avatar';

export default function PostHeader({ title, author, date, content }) {
  const plainText = RichText.asText(content);
  const readingTime = rt(plainText)

  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <Avatar name={author.name} />
      {' • '}
      <Date dateString={date} />
      <Stats readingTime={readingTime} />
    </>
  );
}
