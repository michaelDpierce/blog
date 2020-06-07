import Container from './container';

export default function Alert({ preview }) {
  return (
    <Container>
      {preview && (
        <>
          <mark>Preview Mode</mark>
          {' - '}
          <a
            href="/api/exit-preview"
            rel="nofollow"
          >
            Click here to exit preview mode.
          </a>
        </>
      )}
    </Container>
  )
}
