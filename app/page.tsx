import Image from "next/image"
import Me from '@/public/hafizul-haque.jpg'

export default function Home() {
  return (
    <div className="divide-y divide-gray-100 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Home
        </h1>
      </div>
      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        {/* left part  */}
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="picture of hafizul haque"
            src={Me}
            className="h-48 w-48 rounded-full object-cover object-top"/>
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Hafizul Haque</h3>
          <p className="text-gray-500 dark:text-gray-300 text-center">
          Software Engineer, Reddot Digital IT Ltd.<br/>
          </p>
          <div className="flex space-x-5 pt-6">
            {/* email  */}
            <a href="mailto:hafizul.cse.cuet@gmail.com" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600">
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>
            {/* github  */}
            <a href="https://github.com/HafizulHaque" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            {/* linkedIn */}
            <a href="https://www.linkedin.com/in/hafizulhaque97" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600">
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            {/* skype */}
            <a href="skype:live:.cid.acf75006258744ba?chat" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-teal-500 hover:text-teal-600">
                <path d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 00-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 00335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 00112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-370 162.9c-134.2 0-194.2-66-194.2-115.4 0-25.4 18.7-43.1 44.5-43.1 57.4 0 42.6 82.5 149.7 82.5 54.9 0 85.2-29.8 85.2-60.3 0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9 0-101.4 95.5-139.5 185.2-139.5 82.6 0 180 45.7 180 106.5 0 26.1-22.6 41.2-48.4 41.2-49 0-40-67.8-138.7-67.8-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3 0 82.3-63.3 143.9-191 143.9z" />
              </svg>
            </a>
          </div>
        </div>
        {/* right part  */}
        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p>
            I am a professional Software Engineer with 2+ years of experience. I am currently working at Reddot Digital IT, a subsidery of reknowned telco company Robi Axiata Ltd.
          </p>
          <p>
            I completed my B.Sc. in CSE from Chittagong University of Engineering & Technology (CUET) in 2021 and H.S.C. from Notre Dame College in 2015.
          </p>
          <p>
            I have expertise in full-stack web development with a primary focus on frontend. Currently I am working on 'Robi Distribution Management System' project. Tech Stack I am skilled at, but not limited to, includes JavaScript, React, Next.js, Angular, Tailwind CSS, Node.js, Nest.js, Java, Kotlin, Spring Boot, and Docker.
          </p>
        </div>
      </div>
    </div>
  )
}
