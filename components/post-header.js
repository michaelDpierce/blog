import Date from './date'
import PostTitle from './post-title'

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <Date dateString={date} />
    </>
  )
}
