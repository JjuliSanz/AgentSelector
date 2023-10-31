import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen flex flex-col relative bgValo">
      {/* Home Button */}
      <Link
        href="/"
        className="w-auto h-auto absolute top-4 left-10 z-10 homeIcon cursor-pointer p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#c03636"
          class="bi bi-house-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        </svg>
      </Link>

      {/* V */}
      <div className="flex w-full h-[70%] justify-around relative ">
        <div className="flex flex-col self-end justify-between h-[30%] w-[20%]">
          {/* Github */}
          <div className="glowing-txt creditsText flex justify-center items-center gap-3 self-start">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            {/* Text */}
            <Link
              href="https://github.com/JjuliSanz?tab=repositories"
              target="_blank"
            >
              Github
            </Link>
          </div>
          {/* Linkedin */}
          <div className="glowing-txt creditsText flex justify-center items-center gap-3 self-end">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            {/* Text */}
            <Link
              href="https://www.linkedin.com/in/julian-sanz-ba4270240/"
              target="_blank"
            >
              Linkedin
            </Link>
          </div>
        </div>

        <div className="w-[500px] flex relative mt-6">
          {/* LEFT */}
          <div className="relative flex">
            <svg
              width="330"
              height="400"
              viewBox="0 0 330 474"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-50 vBorder"
            >
              <path
                d="M326.415 469.431L4.32251 3.63563C3.76476 2.82903 2.5 3.22373 2.5 4.20438V236.275C2.5 236.479 2.56193 236.677 2.67752 236.844L164.306 470.569C164.492 470.839 164.8 471 165.128 471H325.593C326.399 471 326.874 470.095 326.415 469.431Z"
                fill="#C03636"
                stroke="#D98181"
                strokeWidth="5"
                strokeMiterlimit="16"
                strokeLinecap="round"
                class=""
              ></path>
            </svg>

            {/* Shadow */}
            <svg
              width="508"
              height="550"
              viewBox="0 0 508 622"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-0 absolute top-[-15%] left-[-25%] vBorder"
            >
              <g filter="url(#filter0_f_43_36)">
                <path
                  d="M429.409 541.93L79.8213 38.6222C79.2625 37.8176 78 38.2131 78 39.1927V302.187C78 302.391 78.0621 302.59 78.1781 302.757L244.702 543.07C244.889 543.339 245.196 543.5 245.524 543.5H428.588C429.395 543.5 429.87 542.593 429.409 541.93Z"
                  fill="#FE5454"
                />
                <path
                  d="M432.694 539.648L83.1066 36.3403C80.3125 32.3175 74 34.2948 74 39.1927V302.187C74 303.205 74.3105 304.199 74.8903 305.035L241.414 545.348C242.348 546.696 243.884 547.5 245.524 547.5H428.588C432.625 547.5 434.997 542.963 432.694 539.648Z"
                  stroke="#D98181"
                  stroke-width="8"
                  stroke-miterlimit="3.8637"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_43_36"
                  x="0"
                  y="-39.8243"
                  width="507.604"
                  height="661.324"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="35"
                    result="effect1_foregroundBlur_43_36"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          {/* RIGHT */}
          <div className="absolute top-0 left-[50%]">
            <svg
              width="220"
              height="260"
              viewBox="0 0 220 310"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-[100] relative vBorderRight"
            >
              <path
                d="M217.5 200.69V4.1627C217.5 3.18588 216.243 2.78853 215.682 3.58779L3.60655 305.425C3.14098 306.088 3.61495 307 4.42477 307H144.325C144.654 307 144.963 306.837 145.149 306.565L217.325 201.256C217.439 201.089 217.5 200.892 217.5 200.69Z"
                fill="#C03636"
                stroke="#D98181"
                strokeWidth="5"
                strokeMiterlimit="3.8637"
                strokeLinecap="round"
              />
            </svg>

            {/* Shadow */}
            <svg
              width="393"
              height="400"
              viewBox="0 0 393 452"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-10 right-[-35%] top-[-25%] vBorderRight"
            >
              <g filter="url(#filter0_f_43_47)">
                <path
                  d="M318.5 267.697V39.6145C318.5 38.6423 317.253 38.2418 316.687 39.0324L75.1327 376.418C74.659 377.08 75.132 378 75.9458 378H244.465C244.799 378 245.111 377.833 245.297 377.556L318.331 268.252C318.441 268.088 318.5 267.894 318.5 267.697Z"
                  fill="#FE5454"
                />
                <path
                  d="M318.5 267.697V39.6145C318.5 38.6423 317.253 38.2418 316.687 39.0324L75.1327 376.418C74.659 377.08 75.132 378 75.9458 378H244.465C244.799 378 245.111 377.833 245.297 377.556L318.331 268.252C318.441 268.088 318.5 267.894 318.5 267.697Z"
                  stroke="#D98181"
                  strokeWidth="8"
                  strokeMiterlimit="3.8637"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_43_47"
                  x="0.937012"
                  y="-35.395"
                  width="391.563"
                  height="487.395"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="35"
                    result="effect1_foregroundBlur_43_47"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="flex flex-col self-end justify-between h-[30%] w-[20%]">
          {/* Portfolio */}
          <div className="glowing-txt creditsText flex justify-center items-center gap-3 self-end">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>
            {/* Text */}
            <Link
              href="https://my-portfoli-website.netlify.app/"
              target="_blank"
            >
              Portfolio
            </Link>
          </div>
          {/* Figma */}
          <div className="glowing-txt creditsText flex justify-center items-center gap-3 self-start">
            {/* Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9999 8.66667H8.66658M11.9999 8.66667V2H8.66659C6.82564 2 5.33325 3.49238 5.33325 5.33333C5.33325 7.17428 6.82563 8.66667 8.66658 8.66667M11.9999 8.66667V15.3333H8.66658M11.9999 8.66667L15.3333 8.66667M8.66658 8.66667C6.82563 8.66667 5.33325 10.1591 5.33325 12C5.33325 13.8409 6.82563 15.3333 8.66658 15.3333M8.66658 15.3333C6.82564 15.3333 5.33325 16.8257 5.33325 18.6667C5.33325 20.5076 6.82564 22 8.66659 22C10.5075 22 11.9999 20.5076 11.9999 18.6667M15.3333 8.66667C13.4923 8.66667 11.9999 10.1591 11.9999 12C11.9999 13.8409 13.4923 15.3333 15.3333 15.3333C17.1742 15.3333 18.6666 13.8409 18.6666 12C18.6666 10.1591 17.1742 8.66667 15.3333 8.66667ZM15.3333 8.66667C17.1742 8.66667 18.6666 7.17428 18.6666 5.33333C18.6666 3.49238 17.1742 2 15.3333 2"
                stroke="#c03636"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Text */}
            <Link
              href="https://www.figma.com/file/OCt7G2CdaMmwPQQXYFdsox/Valorant?type=design&node-id=0%3A1&mode=design&t=DlFBVRGbmM6butH8-1"
              target="_blank"
            >
              Figma Design
            </Link>
          </div>
        </div>
      </div>

      {/* LINKS */}
      <div className="w-full h-[30%] flex justify-evenly items-center overflow-hidden">
        {/* Phone */}
        <div className="glowing-txt creditsText flex justify-center items-center gap-3">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          {/* Text */}
          <Link href="https://wa.me/54901160299989" target="_blank">
            +54 9 011 6029-9989
          </Link>
        </div>
        {/* Mail */}
        <div className="glowing-txt creditsText flex justify-center items-center gap-3">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-envelope-at-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
          </svg>
          {/* Text */}
          <Link href="mailto:Jjulisanz@gmail.com" target="_blank">
            Jjulisanz@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
