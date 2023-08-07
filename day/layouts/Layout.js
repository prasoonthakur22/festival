import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react'

export default function Layout({ children, seoData }) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Navbar seoData={seoData} />
      <main className="bg-white min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
