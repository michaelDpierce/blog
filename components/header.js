import Link from 'next/link'

import { SITE_NAME } from '@lib/constants'

export default function Header() {
  return (
    <span>
      <style jsx>{`
        .navLink {
          margin-top: 6px;
          padding-left: 7px;
        }

        h2 {
          margin: 0px;
        }
      `}</style>

      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>

      <Link href="/posts">
        <a className="navLink right">Posts</a>
      </Link>

      <Link href="/quotes">
        <a className="navLink right">Quotes</a>
      </Link>
      <br />
      <hr />
    </span>
  );
}
