import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocketchat, faBitcoin } from '@fortawesome/free-brands-svg-icons'
import { faSortAlphaDown, faEgg } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <header className="z-10 grid h-16 grid-cols-4 items-center bg-[#C1292E] lg:absolute lg:right-0 lg:top-0 lg:flex lg:h-full lg:w-16 lg:flex-col lg:justify-between">
      {/*  */}
      <div className="col-span-1 grid text-[#161925]">
        <FontAwesomeIcon
          icon={faBitcoin}
          color="#ffff"
          className="m-auto w-10 lg:mt-5 "
        />
      </div>
      {/* Social */}
      <div className="col-span-2 h-16 text-[#161925] lg:flex lg:h-24 lg:w-16 lg:flex-col">
        <div className="grid grid-cols-2 lg:flex lg:flex-col">
          {/* 1 */}
          <Link href="/">
            <div className="group col-span-1 h-16 cursor-pointer items-center border-r-2 border-l-2 px-2 transition delay-75 ease-in-out hover:p-0 lg:flex lg:h-12 lg:w-16 lg:flex-col lg:border-none">
              <FontAwesomeIcon
                icon={faSortAlphaDown}
                color="#ffff"
                className="m-auto w-9 py-3 group-hover:hidden lg:py-0 lg:group-hover:inline-block"
              />
              <h1 className="mt-3 hidden w-full text-center text-3xl group-hover:inline-block lg:absolute lg:bg-[#161925] lg:text-[12px] lg:text-[#FDFFFC] lg:group-hover:-translate-x-16 lg:group-hover:-translate-y-1">
                home
              </h1>
            </div>
          </Link>

          {/* 2 */}
          <Link href="/about">
            <div className="group col-span-1 h-16 cursor-pointer items-center border-r-2  px-2 transition delay-75 ease-in-out hover:p-0 lg:flex lg:h-12 lg:w-16 lg:flex-col lg:border-none">
              <FontAwesomeIcon
                icon={faEgg}
                color="#ffff"
                className="m-auto w-7 py-3 group-hover:hidden lg:py-0 lg:group-hover:inline-block "
              />
              <h1 className="mt-3 hidden w-full text-center text-3xl group-hover:inline-block lg:absolute lg:bg-[#161925] lg:text-[12px] lg:text-[#FDFFFC] lg:group-hover:-translate-x-16 lg:group-hover:-translate-y-1">
                about
              </h1>
            </div>
          </Link>
        </div>
      </div>

      {/* chat */}
      <div className="col-span-1">
        <a
          href="https://moma-web3.vercel.app/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faRocketchat}
            color="#ffff"
            className="m-auto w-10 lg:mb-5"
          />
        </a>
      </div>
    </header>
  )
}

export default Sidebar
