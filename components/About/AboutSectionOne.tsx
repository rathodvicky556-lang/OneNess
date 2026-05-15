import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  return (
    <section className="py-20 bg-white dark:bg-bg-color-dark overflow-hidden">
  <div className="container">
    <div className="flex flex-wrap items-center -mx-4">
      
      {/* LEFT CONTENT */}
      <div className="w-full px-4 lg:w-1/2">
        <div className="max-w-[540px]">
          <span className="block mb-4 text-lg font-semibold text-primary">
            Capital on Demand
          </span>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
            We Bridge the Gap Between Your Startup and Bank Capital.
          </h2>
          <p className="mb-8 text-base leading-relaxed text-body-color">
            As a registered DSA partner with India&apos;s leading Banks and NBFCs, we don&apos;t just &quot;apply&quot; for loans. We engineer your financials to ensure high-ticket sanctions with the lowest possible interest rates.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center text-black dark:text-white font-medium">
              <span className="mr-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary/10 text-primary">✔</span>
              Collateral-Free MSME Loans
            </li>
            <li className="flex items-center text-black dark:text-white font-medium">
              <span className="mr-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary/10 text-primary">✔</span>
              Working Capital & OD Limits
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT ANIMATED STATS */}
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative z-10 mt-12 lg:mt-0">
          {/* Main Animated Card */}
          <div className="relative p-8 bg-dark rounded-2xl shadow-2xl animate-bounce-slow">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-400 text-sm">Total Disbursement</p>
                <h3 className="text-white text-4xl font-bold">₹12.5 Cr+</h3>
              </div>
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-primary text-2xl">📈</span>
              </div>
            </div>
            
            {/* Mini Progress Bar Animation */}
            <div className="space-y-4">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-[85%] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Loan Approval Rate</span>
                <span className="text-white">98%</span>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -top-6 -right-6 bg-primary text-white py-2 px-4 rounded-lg font-bold shadow-lg rotate-12">
              DSA Partner
            </div>
          </div>

          {/* Background Decorative Circle */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]"></div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default AboutSectionOne;
