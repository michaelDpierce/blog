import Date from '../components/date'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, date }) {
  console.log(date)

  return (
    <>
      <PostTitle>{title[0].text}</PostTitle>
      <Date dateString={date} />
    </>
  )
}
