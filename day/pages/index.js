import FestivalCard from '../components/FestivalCard'
import QueryString from 'qs'
const moment = require('moment')

export default function Home({ festivals, backend_url }) {
  return (
    <>
      <div className="hero mt-16"></div>
      <FestivalCard festivals={festivals} backend_url={backend_url} />
    </>
  )
}

const today = moment().format('YYYY-MM-DD')

const OneYearFromToday = moment(today).add(1, 'Y').format('YYYY-MM-DD')

export async function getServerSideProps({ res }) {
  let festivals
  var error

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )

  const options = {
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
    var site_url = process.env.SITE_URL
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

  let seoData = {
    title: 'Kab Hai | Parv aur Tyohar',
    description: 'Kab Hai | Parv aur Tyohar',
    image: '',
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10000000, stale-while-revalidate=59',
  )

  return {
    props: {
      festivals,
      backend_url,
      site_url,
      seoData,
    },
  }
}
