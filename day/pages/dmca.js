export default function Dmca() {
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
                      Disclaimer for KabHai.in
                    </h1>
                    <h1 className="font-medium text-lg leading-8 text-slate-800">
                      Last updated September 03, {`${new Date().getFullYear()}`}
                    </h1>
                    <br></br>
                    <p className="py-1 leading-normal text-slate-900 text-justify">
                      If you require any more information or have any questions
                      about our site&apos;s disclaimer, please feel free to contact
                      us by email at cyberlaxai@gmail.com.
                    </p>
                    <div className="my-2">
                      <p className="leading-normal text-slate-900 text-justify">
                        All the information on this website -
                        https://kabhai.in/ - is published in good faith and
                        for general information purpose only. Kab Hai does
                        not make any warranties about the completeness,
                        reliability and accuracy of this information. Any action
                        you take upon the information you find on this website
                        (Kab Hai), is strictly at your own risk. Kab Hai
                        will not be liable for any losses and/or damages in
                        connection with the use of our website.
                      </p>
                    </div>
                    <div className="my-2">
                      <p className="leading-normal text-slate-900 text-justify">
                        From our website, you can visit other websites by
                        following hyperlinks to such external sites. While we
                        strive to provide only quality links to useful and
                        ethical websites, we have no control over the content
                        and nature of these sites. These links to other websites
                        do not imply a recommendation for all the content found
                        on these sites. Site owners and content may change
                        without notice and may occur before we have the
                        opportunity to remove a link which may have gone &apos;bad&apos;.
                      </p>
                    </div>
                    {/*  */}
                    <div className="my-2">
                      <p className="leading-normal text-slate-900 text-justify">
                        Please be also aware that when you leave our website,
                        other sites may have different privacy policies and
                        terms which are beyond our control. Please be sure to
                        check the Privacy Policies of these sites as well as
                        their &apos;Terms of Service&apos; before engaging in any business
                        or uploading any information.
                      </p>
                    </div>
                    <br></br>
                    <h1 className="font-extrabold text-2xl leading-8 text-slate-900">
                      Consent
                    </h1>
                    <p className="leading-normal text-slate-900 text-justify">
                      By using our website, you hereby consent to our disclaimer
                      and agree to its terms.
                    </p>
                    <br></br>
                    <h1 className="font-extrabold text-2xl leading-8 text-slate-900">
                      Update
                    </h1>
                    <p className="leading-normal text-slate-900 text-justify">
                      Should we update, amend or make any changes to this
                      document, those changes will be prominently posted here.
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
  )
}

export async function getStaticProps({ req, res }) {
  return {
    props: {},
  }
}
