export default function Avatar({ name, picture }) {
  return (
    <>
      <img
        src={picture.url}
        alt={name[0].text}
      />
      {name}
    </>
  )
}
