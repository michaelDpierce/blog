import Header from '@components/header';
import Container from '@components/container';
import Layout from '@components/layout';

export default function Dashboard() {
  return (
    <>
      <Layout preview={false}>
        <Container>
          <Header />
          <h1>Dashboard</h1>
        </Container>
      </Layout>
    </>
  );
}

