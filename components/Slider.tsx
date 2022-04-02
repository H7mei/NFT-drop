import React, { useRef } from 'react'
import useInView from 'react-cool-inview'
import { Marqy } from 'marqy'

const Marquee = () => {
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
            <img
              className="w-80 object-cover pb-10"
              src="https://i.postimg.cc/Cx5R5dnL/cuaks.png"
              alt=""
            />
            <h2 className="text-3xl font-bold">Wolf #21</h2>
            <p className="p-1">0.01 eth</p>
          </div>
        </div>
      </Marqy>
    </div>
  )
}

export default Marquee
