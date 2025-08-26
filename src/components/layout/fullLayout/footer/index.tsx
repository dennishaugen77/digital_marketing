import { FooterLogo } from "@/assets/icons/FooterLogo"

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#26262c]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 divide-y-1 divide-gray-300 px-10 py-28 md:flex-row md:divide-x-1 md:divide-y-0">
          <div className="flex flex-col pb-10 md:w-1/2 md:pr-25">
            <p className="font-primary mb-4 text-start text-4xl font-semibold text-white">
              Ready to take your internet marketing to the next level?
            </p>
            <p className="font-secondary text-start font-semibold text-white">
              Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus
              lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam
              et nunc justo.
            </p>
            <p className="font-secondary mt-8 text-start text-white">
              Risus tincidunt in laoreet risus dignissim montes, velit egestas
              eu nec et in tincidunt amet, etiam at turpis adipiscing volutpat
              amet, adipiscing purus elementum risus, vitae euismod leo amet
              eget quam enim blandit diam quis diam proin enim suspendisse
              massa.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 md:px-20">
            <p className="font-secondary mb-5 text-start text-4xl font-semibold text-white">
              Let's talk
            </p>
            <input
              placeholder="Full name"
              className="font-secondary bg-white px-4 py-3"
            ></input>
            <input
              placeholder="Email address"
              className="font-secondary bg-white px-4 py-3"
            ></input>
            <textarea
              placeholder="Your message"
              className="font-secondary bg-white px-4 py-4"
            ></textarea>
            <div className="flex">
              <div className="bg-primary font-secondary cursor-pointer rounded-lg px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                Get a Free Quote
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background flex">
        <div className="mx-auto flex w-full max-w-7xl flex-col divide-y-2 divide-white">
          <div className="grid w-full grid-cols-1 gap-4 px-10 pt-24 pb-16 md:grid-cols-4">
            <div className="mx-auto max-w-300 md:max-w-50">
              <FooterLogo
                style={{ color: "var(--color-primary)" }}
              />
              <p className="text-global-color2 font-secondary text-center text-xl sm:text-start mt-2">
                Volutpat commodo at dictum amet tincidunt facilisis id lorem eu
                vitae cursus auctor laoreet fermentum.
              </p>
            </div>
            <div className="mx-auto max-w-300 md:max-w-50">
              <p className="text-global-color3 font-primary text-center text-2xl sm:text-start">
                Service
              </p>
              <div className="mt-5 flex flex-col">
                {serviceList.map((el, index) => {
                  return (
                    <p
                      className="hover:text-primary font-secondary cursor-pointer py-0.5 text-center sm:text-start"
                      key={index}
                    >
                      {el}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="mx-auto max-w-300 md:max-w-50">
              <p className="text-global-color3 font-primary text-center text-2xl sm:text-start">
                Agency
              </p>
              <div className="mt-5 flex flex-col">
                {agencyList.map((el, index) => {
                  return (
                    <p
                      className="hover:text-primary font-secondary cursor-pointer py-0.5 text-center sm:text-start"
                      key={index}
                    >
                      {el}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="mx-auto max-w-300 md:max-w-50">
              <p className="text-global-color3 font-primary text-center text-2xl sm:text-start">
                Contact Info
              </p>
              <div className="mt-5 flex flex-col">
                {contactList.map((el, index) => {
                  return (
                    <p
                      className="hover:text-primary font-secondary cursor-pointer py-0.5 text-center sm:text-start"
                      key={index}
                    >
                      {el}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="text-global-color2 px-10 py-10">
            © 2025 Digital Marketing Agency | Powered by Digital Marketing
            Agency
          </div>
        </div>
      </div>
    </div>
  )
}

const serviceList = [
  "SEO",
  "Digital Marketing",
  "Digital Strategy",
  "CRO",
  "Analytics",
]

const agencyList = [
  "About Us",
  "Our Team",
  "Careers",
  "News & Blog",
  "Contact Us",
]

const contactList = [
  "123 Demo St, Lakeland, FL 45678, United States.",
  "+1 123-456-7890",
  "mail@example.com",
]
