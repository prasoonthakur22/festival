export default function Contact() {
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
                      Contact
                    </h1>
                    <div className="my-1">
                      <br />
                      <p className="leading-normal text-slate-900 text-justify">
                        Mail: cyberlaxai@gmail.com
                      </p>
                      <br />
                      <br />
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
