
import { RichText } from 'prismic-reactjs'

export default function PostBody({ content }) {
  return (
    <RichText render={content} />
  )
}