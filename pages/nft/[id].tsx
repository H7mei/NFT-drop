import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Head from 'next/head'
import Marquee from '../../components/Slider'
import { sanityClient, urlFor } from '../../sanity'
import { GetServerSideProps } from 'next'
import { Collection } from '../../typings'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
  // Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  //
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <Head>
        <title>NFT • Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* left */}
      <div className="border-b-4 border-[#C22626] lg:col-span-3 lg:border-0 lg:border-r-4">
        <img
          className="absolute -z-10 h-[100vh] w-screen rounded-xl object-center lg:h-screen lg:w-[80vh]"
          src="https://i.postimg.cc/25SCWb0t/Desain-tanpa-judul.png"
          alt=""
        />
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl rounded-b-none bg-[#C22626] p-1 pb-0">
            <img
              className="w-44 rounded-xl rounded-b-none object-center lg:h-72 lg:w-72"
              src="https://i.postimg.cc/Y956fYg3/pic3.jpg"
              alt=""
            />
          </div>
          <div className="space-y-2 rounded-xl border-4 border-[#C22626] bg-[#FDFFFC] p-3 text-center lg:rounded-t-none">
            <h1 className="text-4xl font-bold text-[#161925]">Wolf</h1>
            <h2 className="text-xl text-[#161925d8]">
              Colllection more Wolf anytime
            </h2>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-1 flex-col justify-between bg-[#FDFFFC] lg:col-span-7">
        {/* Header */}
        <div className="">
          <header className="flex items-center justify-between border-b-4 border-[#C22626] px-5 pt-3 pb-2 lg:px-16">
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{' '}
              <span className="font-extrabold underline decoration-[#C1292E]">
                MOMA
              </span>{' '}
              NFT Market Place
            </h1>
            <button
              onClick={() => (address ? disconnect() : connectWithMetamask())}
              className="border-4 border-[#C1292E] px-4 py-2 text-xs font-bold text-black hover:bg-[#C1292E] hover:text-[#FDFFFC] lg:px-5 lg:py-2 lg:text-base"
            >
              {address ? 'Sign Out' : 'Sign In'}
            </button>
          </header>
          {address && (
            <p className="text-center text-sm text-[#161925]">
              You're Logged in with wallet {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </p>
          )}
          <div className="text-center">
            <Marquee />
            <div className="py-10 lg:py-0">
              <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
                {collection.title}
              </h1>
              <p className="pt-2 text-xl text-green-500 lg:pb-5">
                3 / 10 NFT's claimed
              </p>
            </div>
          </div>
        </div>
        {/* Mint Button */}
        <div className="border-t-4 border-[#C22626]">
          <div className="py-10 px-5 lg:px-16">
            <button className="text- h-16 w-full border-4 border-[#C1292E] font-bold text-black hover:bg-[#C1292E] hover:text-[#FDFFFC]">
              Mint NFT (0.01 ETH)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
    asset
  },
  priviewImage {
    asset
  },
  slug {
    current
  },
  creator-> {
    _id,
    name,
    address,
    slug {
    current
  },
  },
  }`

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  })

  if (!collection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      collection,
    },
  }
}
