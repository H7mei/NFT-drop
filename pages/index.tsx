import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import { sanityClient, urlFor } from '../sanity'
import { Collection } from '../typings'

interface Props {
  collections: Collection[]
}

const Home = ({ collections }: Props) => {
  return (
    <div className="overflow-hidden bg-[#FDFFFC]">
      <Head>
        <title>NFT • Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Sidebar />
        <div className="m-10 mx-auto flex max-w-lg flex-col-reverse border-[#C22626] sm:border-x-8 lg:m-0 lg:grid lg:h-screen lg:max-w-none lg:grid-cols-10 lg:border-none">
          <div className="col-span-6 p-10 shadow-xl lg:border-r-4 lg:border-[#C22626] lg:p-0">
            <div className="grid grid-cols-1 space-x-3 md:grid-cols-2  lg:grid-cols-1 ">
              {collections.map((collection) => (
                <Link
                  href={`nft/${collection.slug.current}`}
                  key={`${collection._id}`}
                >
                  <div className="mt-10 border-[#C1292E] lg:border-b-4">
                    <div className=" flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105 lg:flex-row lg:pb-10 lg:pl-10">
                      <img
                        className="h-60 w-96 rounded-2xl object-cover lg:mr-3"
                        src={urlFor(collection.mainImage).url()}
                        alt=""
                      />
                      <div>
                        <h2 className="mt-2 text-3xl">{collection.title}</h2>
                        <p className="mt-2 text-sm text-gray-400">
                          {collection.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mx-10 hidden lg:inline-block">
              <div className="flex flex-col justify-center lg:min-h-[30vh]">
                <h1 className="mt-10 text-3xl font-bold">NFT • Drop</h1>
                <h2>
                  brings artists and creators together on a single platform.
                </h2>
                <div className="cursor-pointer py-2">
                  <Link href="/">
                    <div className="w-14 border-2 border-[#C1292E] bg-[#FDFFFC] text-center hover:bg-[#C1292E] hover:text-[#FDFFFC]">
                      MINT
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-col items-center justify-center lg:min-h-screen">
              <div className="rounded-xl">
                <img
                  className="w-screen rounded-xl object-center lg:h-screen lg:w-screen"
                  src="https://i.postimg.cc/25SCWb0t/Desain-tanpa-judul.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "collection"]{
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

  const collections = await sanityClient.fetch(query)
  return {
    props: {
      collections,
    },
  }
}
