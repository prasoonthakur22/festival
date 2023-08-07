import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <>
      <footer className="footer footer-center mt-5 p-10 bg-black shadow-2xl text-white font-extrabo">
        <div className="grid grid-flow-col gap-4">
          <Link
            className="link link-hover text-black-500 font-bold"
            href="/about"
          >
            About Site
          </Link>

          <Link
            className="link link-hover text-black-500 font-bold"
            href="/privacy"
          >
            Privacy Policy
          </Link>

          <Link
            className="link link-hover text-black-500 font-bold"
            href="/dmca"
          >
            DMCA
          </Link>

          <Link
            className="link link-hover text-black-500 font-bold"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div>
          <div>
            Copyright &copy; {`${new Date().getFullYear()}`}
            <Link
              className="text-black-500 font-bold link link-hover mx-2"
              href="/"
            >
              KabHai
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
