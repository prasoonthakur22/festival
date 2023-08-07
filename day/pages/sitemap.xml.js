import { renderToStaticMarkup } from 'react-dom/server'
import QueryString from 'qs'

const moment = require('moment')
const SitemapIndex = () => null
const today = moment().format('YYYY-MM-DD')
const OneYearFromToday = moment(today).add(1, 'Y').format('YYYY-MM-DD')
const origin = process.env.SITE_URL

const Sitemap = ({ pages, origin }) => {
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>{[origin]}</loc>
        <lastmod>{today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      {pages?.map((page, index) => {
        return (
          <url key={index}>
            <loc>{[origin, page.url].join('/')}</loc>
            <lastmod>{page?.mod}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
          </url>
        )
      })}
      <url>
        <loc>{[origin, 'about'].join('/')}</loc>
        <lastmod>{today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>

      <url>
        <loc>{[origin, 'privacy'].join('/')}</loc>
        <lastmod>{today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
  )
}

export const getServerSideProps = async ({ res }) => {
  let festivals
  var error

  const options = {
    populate: ['hero_image'],
    filters: {
      date_start: {
        $gt: today,
        $lt: OneYearFromToday,
      },
    },
    sort: ['date_start:asc'],
  }

  const queryString = QueryString.stringify(options)
  try {
    var backend_url = process.env.BACKEND_URL
    const req = await fetch(`${backend_url}/api/festivals?${queryString}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.BACKEND_KEY}`,
      },
    })
    let res = await req.json()
    festivals = res.data
  } catch (e) {
    error = e.toString()
    console.warn(error)
  }

  var pages = festivals.map((festival) => {
    return {
      url: festival.attributes.slug,
      mod: festival.attributes.publishedAt,
    }
  })

  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<Sitemap pages={pages} origin={origin} />))
  res.end()

  return {
    props: {},
  }
}

export default SitemapIndex
