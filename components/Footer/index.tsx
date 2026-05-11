"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-[#090E34] pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* COLUMN 1: BRAND & BIO */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.png" // Kept your original logo path
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.png" // Kept your original dark logo path
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color-dark">
                  Next-gen Chartered Accountancy for the Indian Startup Ecosystem. We handle the numbers so you can build the future with confidence.
                </p>
                
                {/* SOCIAL LINKS */}
                <div className="flex items-center space-x-5">
                  <a href="https://linkedin.com" aria-label="linkedin" className="text-[#959CB1] hover:text-primary transition-all">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" aria-label="twitter" className="text-[#959CB1] hover:text-primary transition-all">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.055-4.425 5.055H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" aria-label="instagram" className="text-[#959CB1] hover:text-primary transition-all">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.001zm-.008 1.441c2.144 0 2.398.007 3.246.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.848.047 1.102.047 3.246s-.008 2.398-.047 3.246c-.035.78-.166 1.203-.275 1.486a2.42 2.42 0 0 1-.599.919c-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.848.038-1.102.047-3.246.047s-2.398-.008-3.246-.047c-.78-.036-1.203-.166-1.486-.276a2.473 2.473 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.848-.046-1.102-.046-3.246s.008-2.398.046-3.246c.035-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.001zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.98 1.815a3.417 3.417 0 1 0 0 6.834 3.417 3.417 0 0 0 0-6.834zm0 1.441a1.976 1.976 0 1 1 0 3.952 1.976 1.976 0 0 1 0-3.952z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMN 2: SERVICES */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">Our Services</h2>
                <ul className="space-y-4">
                  <li><Link href="/services/startup-india" className="text-base text-body-color-dark hover:text-primary transition-all">Startup India</Link></li>
                  <li><Link href="/services/gst" className="text-base text-body-color-dark hover:text-primary transition-all">GST & Tax</Link></li>
                  <li><Link href="/services/loans" className="text-base text-body-color-dark hover:text-primary transition-all">Loan Advisory</Link></li>
                  <li><Link href="/services/cfo" className="text-base text-body-color-dark hover:text-primary transition-all">Virtual CFO</Link></li>
                </ul>
              </div>
            </div>

            {/* COLUMN 3: COMPLIANCE LINKS */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">Compliance</h2>
                <ul className="space-y-4">
                  <li><a href="https://gst.gov.in" target="_blank" className="text-base text-body-color-dark hover:text-primary transition-all">Check GST Status</a></li>
                  <li><a href="https://incometax.gov.in" target="_blank" className="text-base text-body-color-dark hover:text-primary transition-all">IT Portal</a></li>
                  <li><Link href="/privacy" className="text-base text-body-color-dark hover:text-primary transition-all">Privacy Policy</Link></li>
                  <li><Link href="/disclaimer" className="text-base text-body-color-dark hover:text-primary transition-all">Legal Disclaimer</Link></li>
                </ul>
              </div>
            </div>

            {/* COLUMN 4: WHATSAPP CONNECT */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-white">Get in Touch</h2>
                <p className="mb-7 text-base text-body-color-dark">Questions? Reach out directly via WhatsApp for a priority consultation.</p>
                <a 
                  href="https://wa.me/9272015705" // Replace with your actual number
                  className="flex items-center justify-center rounded-md bg-[#25D366] py-3 px-7 text-base font-medium text-white transition hover:bg-opacity-90 shadow-lg"
                >
                  <span className="mr-2 text-xl">💬</span> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          
          <div className="py-8">
            <p className="text-center text-base text-body-color-dark">
              © 2026 OneNess. All Rights Reserved. <br className="md:hidden" /> 
              <span className="hidden md:inline"> | </span> 
              Registered with ICAI
            </p>
          </div>
        </div>

        {/* Keeping your original background SVGs */}
        <div className="absolute right-0 top-14 z-[-1]">
            {/* ... Your original SVG code ... */}
        </div>
      </footer>
    </>
  );
};

export default Footer;