import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

export default function Navbar({
  seoData = {
    title: 'Parv, Tyohar',
    description: 'Kab hai Parv aur Tyohar',
    image: '',
  },
}) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <div>
      <Head>
        <title>{seoData.title}</title>
        <meta name="title" content={`${seoData.title}`} />
        <meta name="description" content={`${seoData.description}`} />
        <meta property="og:description" content={`${seoData.description}`} />
        <meta property="og:description" content={`${seoData.description}`} />
        <meta property="og:type" content="article" />

        <link rel="icon" href="" type="image/png" />
        <link rel="canonical" href="" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link rel="next" href="" />

        <meta property="og:site_name" content="Kab Hai" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${seoData.title}`} />
        <meta property="og:description" content={`${seoData.description}`} />
        <meta property="og:url" content="" />
        <meta property="og:image" content={`${seoData.image}`} />
        <meta property="article:publisher" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${seoData.title}`} />
        <meta name="twitter:description" content={`${seoData.description}`} />
        <meta name="twitter:url" content="" />
        <meta name="twitter:image" content={`${seoData.image}`} />
        <meta name="twitter:site" content="" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />

        {/* <link rel="icon" href="/favicon.ico" /> */}

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XR0S76PQL6"
        />
      </Head>

      <div className="navbar z-50 bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 shadow-xl text-slate-900 font-extrabold">
        <div className="flex-1">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <Link
            href="/"
            as="/"
            className="btn btn-ghost normal-case text-xl bg-white"
            aria-label="Kab Hai"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 675.000000 195.000000"
              preserveAspectRatio="xMidYMid meet"
              className="fill-current text-white h-10 w-auto mr-2"
            >
              <g
                transform="translate(0.000000,195.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M5660 1639 c-113 -5 -360 -16 -550 -25 -260 -13 -563 -17 -1225 -19
-702 -1 -924 -5 -1095 -18 -255 -19 -439 -36 -460 -42 -8 -2 -73 -11 -145 -20
-284 -35 -313 -67 -207 -233 27 -43 52 -86 54 -97 2 -11 10 -19 16 -17 7 1 22
-7 34 -18 12 -11 29 -20 37 -20 35 0 44 -16 32 -53 -10 -29 -9 -43 9 -88 11
-30 20 -55 20 -55 0 -1 -27 -7 -60 -13 -44 -9 -65 -19 -80 -39 -12 -15 -35
-29 -52 -32 -24 -4 -33 -12 -44 -45 -12 -37 -13 -122 -1 -142 3 -5 8 -22 11
-38 3 -16 10 -31 15 -34 6 -4 6 -12 1 -21 -18 -29 -9 -37 68 -64 133 -46 215
-56 567 -66 182 -5 350 -14 375 -19 27 -5 51 -6 62 0 20 11 44 12 35 2 -9 -8
47 -33 74 -33 11 0 19 7 19 15 0 8 7 15 15 15 8 0 15 5 15 10 0 6 -5 10 -11
10 -5 0 -7 4 -4 10 12 19 26 10 41 -25 14 -35 34 -47 34 -21 0 7 10 16 23 20
32 9 35 8 42 -13 5 -17 41 -18 1023 -19 1246 -1 1544 6 1828 44 187 26 208 30
231 54 50 48 65 102 74 260 5 80 13 190 18 245 18 178 14 364 -9 438 -26 84
-56 119 -133 156 -135 64 -206 69 -697 50z m-2970 -619 l0 -330 -65 0 -65 0 0
330 0 330 65 0 65 0 0 -330z m362 318 c-61 -78 -212 -280 -212 -286 0 -10 224
-341 231 -342 3 0 50 144 104 320 l99 321 79 -3 79 -3 30 -95 c17 -52 63 -200
103 -327 l72 -233 -68 0 -68 0 -11 43 c-6 23 -16 57 -21 75 l-11 32 -108 0
-109 0 -11 -42 c-6 -24 -16 -58 -21 -75 l-11 -33 -134 0 -134 0 -110 166 c-61
91 -113 171 -116 179 -3 7 45 81 108 164 l113 151 69 0 c53 0 66 -3 58 -12z
m981 -9 c75 -25 91 -39 113 -95 23 -60 12 -109 -33 -151 -19 -18 -41 -33 -49
-33 -25 0 -15 -17 15 -23 74 -15 121 -102 102 -189 -13 -57 -39 -89 -97 -118
-45 -23 -62 -25 -211 -29 l-163 -3 0 331 0 331 130 0 c106 0 142 -4 193 -21z
m627 -109 l0 -130 120 0 120 0 0 130 0 130 65 0 65 0 0 -330 0 -330 -65 0 -65
0 0 145 0 145 -120 0 -120 0 0 -145 0 -145 -60 0 -60 0 0 330 0 330 60 0 60 0
0 -130z m902 -190 c53 -173 98 -321 98 -327 0 -9 -19 -13 -65 -13 l-64 0 -11
43 c-6 23 -16 57 -21 75 l-11 32 -108 0 -109 0 -16 -57 c-9 -32 -18 -66 -21
-75 -4 -15 -17 -18 -71 -18 -48 0 -64 3 -60 13 2 6 49 155 103 330 l98 318 80
-3 80 -3 98 -315z m308 -10 l0 -330 -65 0 -65 0 0 330 0 330 65 0 65 0 0 -330z"
                />
                <path
                  d="M3346 1230 c-8 -21 -76 -273 -76 -282 0 -5 36 -8 80 -8 44 0 80 3 80
8 -1 29 -79 294 -84 282z"
                />
                <path
                  d="M3840 1170 l0 -90 50 0 c78 0 116 20 131 69 10 34 9 44 -4 65 -19 28
-71 46 -134 46 l-43 0 0 -90z"
                />
                <path
                  d="M3840 884 l0 -107 63 7 c121 13 147 31 147 101 0 74 -44 105 -150
105 l-60 0 0 -106z"
                />
                <path
                  d="M5337 1091 c-21 -77 -37 -142 -37 -145 0 -3 36 -6 80 -6 44 0 80 3
80 6 0 19 -74 284 -80 284 -4 0 -23 -63 -43 -139z"
                />
                <path
                  d="M863 1568 c-30 -55 -43 -88 -95 -233 -71 -196 -199 -449 -261 -513
-18 -19 -70 -52 -117 -75 -47 -22 -88 -45 -92 -51 -22 -32 16 -155 67 -222 36
-47 61 -44 162 18 83 50 86 51 157 50 69 -2 73 -1 103 30 17 18 42 54 57 80
37 64 126 334 126 381 0 49 -15 77 -41 77 -16 0 -29 -19 -61 -87 -80 -174
-103 -215 -106 -190 -5 38 33 202 109 475 40 144 67 261 64 273 -10 32 -52 24
-72 -13z"
                />
                <path
                  d="M1096 1582 c-4 -11 22 -115 59 -242 81 -272 127 -461 123 -498 -2
-22 -18 3 -75 121 -57 115 -77 147 -93 147 -52 0 -52 -84 1 -237 57 -163 93
-237 144 -290 l43 -45 65 7 65 7 98 -56 c54 -31 103 -56 109 -56 41 0 136 199
120 249 -3 12 -41 37 -98 64 -51 25 -106 60 -124 79 -66 69 -198 323 -272 523
-68 185 -98 239 -133 243 -19 2 -28 -2 -32 -16z"
                />
                <path
                  d="M1255 1490 c-3 -5 19 -75 49 -155 89 -233 108 -255 55 -63 -45 163
-86 248 -104 218z"
                />
                <path
                  d="M741 1434 c-26 -69 -91 -282 -91 -298 1 -23 41 66 90 200 27 76 50
142 50 146 0 4 -6 8 -14 8 -7 0 -23 -25 -35 -56z"
                />
              </g>
            </svg>
          </Link>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl rounded-box w-52 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg"
            >
              <li>
                <Link
                  className="normal-case justify-between text-md nav-link btn-ghost active:text-slate-600"
                  href="/about"
                >
                  About Site
                </Link>
              </li>
              <li>
                <Link
                  className="normal-case justify-between text-md nav-link btn-ghost active:text-slate-600"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="normal-case justify-between text-md nav-link btn-ghost active:text-slate-600"
                  href="/dmca"
                >
                  DMCA
                </Link>
              </li>

              <li>
                <Link
                  className="normal-case justify-between text-md nav-link btn-ghost active:text-slate-600"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
