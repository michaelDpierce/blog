function Error({ statusCode }) {
  return (
    <center>
      <h1>{`${statusCode}`}: Issues in outer space</h1>

      <img
        src="/error.png"
        title="Error"
        alt="Error"
        width="500"
        widheightth="500"
      />
    </center>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
