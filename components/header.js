import Link from 'next/link'

import { SITE_NAME } from '@lib/constants'

export default function Header() {
  return (
    <h2>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </h2>
  )
}
