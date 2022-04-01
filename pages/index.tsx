import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden bg-[#FDFFFC]">
      <Head>
        <title>NFT • Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidebar />
        <div className=" m-10 mx-auto flex max-w-lg flex-col-reverse lg:m-0 lg:grid lg:h-screen lg:max-w-none lg:grid-cols-10">
          <div className="col-span-4 p-10">
            <div className="flex flex-col justify-center lg:min-h-[750px]">
              <h1 className="mt-10 text-3xl font-bold">NFT • Drop</h1>
              <h2>
                brings artists and creators together on a single platform.
              </h2>
              <div className="cursor-pointer py-2">
                <Link href="/nft/mint">
                  <div className="w-14 border-2 border-[#C1292E] bg-[#FDFFFC] text-center hover:bg-[#C1292E] hover:text-[#FDFFFC]">
                    MINT
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-6 items-center justify-center p-9">
            <div className="flex flex-col justify-center lg:min-h-screen">
              <Image
                src="https://i.postimg.cc/25SCWb0t/Desain-tanpa-judul.png"
                height="100px"
                width="100px"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
