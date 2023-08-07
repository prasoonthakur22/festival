import moment from 'moment'
import QueryString from 'qs'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Festival({ festivals, slug }) {
  return (
    <div>
      {festivals?.map((festival) => (
        <div className="text-black bg-white" key={festival.id}>
          <div className="min-h-screen">
            <center>
              <div className="hero mt-16"></div>

              <div className="text-center py-5 flex justify-center align-middle place-items-center">
                <div className="backdrop-blur-sm rounded-3xl bg-white/30 max-w-full lg:p-20 md:p-20 p-5">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl justify-center break-normal italic font-bold">
                    {festival.attributes.title}
                  </h1>
                  <div className="lg:text-3xl md:text-2xl text-xl my-5">
                    <span>at </span>
                    <span className="font-bold">
                      {moment(festival.attributes.date_start).format(
                        'dddd, MMMM Do YYYY',
                      )}
                    </span>
                  </div>
                  <div className="py-5 max-w-full md:max-w-[60vw] lg:max-w-[60vw] rounded-3xl">
                    <div className="my-5 p-5 md:p-10 lg:p-10 bg-slate-50 text-slate-900 rounded-xl text-justify">
                      <article className="prose prose-slate max-w-full">
                        <ReactMarkdown escapeHtml={false}>
                          {festival.attributes.description}
                        </ReactMarkdown>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      ))}
    </div>
  )
}
const today = moment().format('YYYY-MM-DD')

const OneYearFromToday = moment(today).add(1, 'Y').format('YYYY-MM-DD')

export async function getStaticPaths() {
  let festivals
  var error
  const options = {
    populate: ['seo'],
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
    let backend_url = process.env.BACKEND_URL
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

  const paths = festivals.map((festival) => {
    return {
      params: { festival: festival.attributes.slug },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ req, res, params }) {
  const slug = params.festival
  let festivals
  var error

  const options = {
    populate: ['seo'],
    filters: {
      slug: slug,
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

  let seoData

  let title, description, image
  {
    festivals?.map(seoFunction)
    function seoFunction(festival) {
      if (festival.attributes.seo) {
        ;(title = festival.attributes.seo.metaTitle),
          (description = festival.attributes.seo.metaDescription)
      }
    }
  }

  if ((title, description)) {
    seoData = {
      title: title,
      description: description,
    }
  } else {
    seoData = {
      title: 'Parv, Tyohar',
      description: 'Kab hai Parv aur Tyohar',
    }
  }

  return {
    props: {
      festivals: festivals,
      backend_url: backend_url,
      seoData: seoData,
      slug: slug,
    },
    revalidate: 60,
  }
}
