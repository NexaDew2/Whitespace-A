import React from 'react'
import OurClientCard from '../OurClientCard/OurClientCard'
import { Avator1, Avator2, Avator3, BlueQuote, WhiteQuote } from '../../assets'

const OurClientSection = () => {
  return (
    <div>
           <section className="p-3  plan" >
        <div className="items-center text-center mt-20">
          <h1 className="text-5xl font-bold" >What Our Clients Say</h1>
        </div>
        <div className="flex gap-5 overflow-x-auto justify-start lg:justify-center  items-center h-auto">
            <OurClientCard Quote={BlueQuote} Avator={Avator1} ourclientbg={"bg-white"} cardtextcolor={"gray-900"} />
            <OurClientCard Quote={WhiteQuote} Avator={Avator2} ourclientbg={"bg-blue-400 "} cardtextcolor={"white"} />
            <OurClientCard Quote={WhiteQuote} Avator={Avator3} ourclientbg={"bg-blue-400"} cardtextcolor={"white"} />
        </div>
      </section>
    </div>
  )
}

export default OurClientSection