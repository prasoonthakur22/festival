import Link from 'next/link'
import moment from 'moment'
import React from 'react'

function FestivalCard({ festivals, backend_url }) {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return (
    <div>
      <div className="mx-auto mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16 p-[1rem] md:px-[5rem] lg:px-[5rem] md:pb-[5rem] lg:pb-[5rem]">
          {festivals?.map((festival) => (
            <div key={festival.id}>
              <Link
                href={`/${festival.attributes.slug}`}
                as={`/${festival.attributes.slug}`}
              >
                <div className="group border-[1px] border-solid border-slate-200 shadow-lg hover:shadow-md flex justify-center cursor-pointer hover:cursor-pointer rounded-3xl">
                  <div className="w-full rounded-3xl  overflow-hidden">
                    <div className="align-middle place-items-center">
                      <div className="bg-white w-full h-auto image-full text-slate-800">
                        <div className="card-body">
                          <div className="text-xl md:text-2xl lg:text-3xl justify-center break-normal italic font-bold">
                            {festival.attributes.title}
                          </div>

                          <div className="card-actions justify-start mt-1">
                            <div className="text-md md:text-xl lg:text-xl break-normal">
                              <span>
                                {moment(
                                  festival.attributes.date_start,
                                ).fromNow()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FestivalCard
