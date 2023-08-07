import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap mt-12 md:mt-0 lg:mt-0 p-[0rem] md:p-[5rem] lg:p-[5rem]">
        <div className="w-full min-h-[80vh] flx flex-col  rounded-3xl ">
          <div className="card p-2 md:p-10 rounded-3xl drop-shadow-xl overflow-hidden flex-1 flex flex-col items-center">
            <div className="mb-9 w-full sm:container mx-auto">
              <div className="pt-[0rem]">
                <div className="card bg-white my-12 p-5">
                  <div className="shadow-none">
                    <h1 className="font-extrabold text-2xl leading-8 text-slate-900">
                      About Site
                    </h1>
                    <div className="my-1">
                      <p className="leading-normal text-slate-900 text-justify">
                        The
                        <Link href="https://kabhai.in/" as="https://kabhai.in/">
                          <span className="mx-1 cursor-pointer text-blue-700 hover:text-blue-800">
                            https://kabhai.in/
                          </span>
                        </Link>
                        was created to provide Festival information to people
                        all over the world. A platform where anyone can check
                        when it will start and end, as well as other pertinent
                        information. We love hearing from you because it was
                        created for you. So, if you notice any errors, please
                        email us and we will correct them as soon as possible.
                        We are attempting to cover almost all festival
                        information, but if any festivals are missing, please
                        email us and we&apos;ll add them. Please help us grow by
                        sharing and believing in us.
                      </p>
                      <br></br>
                      <p className="leading-normal text-slate-900 text-justify">
                        I wish you lots of happiness, love, joy, laughter, and
                        smiles!
                      </p>

                      <p className="leading-normal text-slate-900 text-justify">
                        Keep Celebrating
                      </p>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ req, res }) {
  return {
    props: {},
  }
}
