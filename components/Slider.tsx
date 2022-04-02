import React, { useRef } from 'react'
import useInView from 'react-cool-inview'
import { Marqy } from 'marqy'

interface Props {
  img: string
  name: string
}

const Marquee = ({ img, name }: Props) => {
  const data = {
    pausable: false,
    reverse: false,
    speed: 0.6,
  }
  const { speed, reverse, pausable } = data

  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    threshold: 0.1,
  })

  return (
    <div ref={observe} className="marquee-section">
      <Marqy
        speed={speed}
        direction={reverse ? 'right' : 'left'}
        pauseOnHover={pausable}
      >
        <div className="my-1 flex flex-col  border-y-4 border-r-4 border-[#C22626] p-10 lg:my-14">
          <div>
            <img className="w-80 object-cover pb-10" src={img} alt="" />
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="p-1">0.01 eth</p>
          </div>
        </div>
      </Marqy>
    </div>
  )
}

export default Marquee
