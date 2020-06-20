export default function Footer() {
  const now = new Date();

  return <footer>{`Michael Pierce © ${now.getFullYear()}`}</footer>;
}
