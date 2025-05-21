import React from 'react'
import PriceCard from '../PriceCard/PriceCard'

const PlanCardSection = () => {
  return (
    <div>
      <section className="p-3  plan" >
        <div className="items-center text-center mt-20">
          <h1 className="text-5xl font-bold" >Choose Your Plan</h1>
          <p className="text-lg  mt-4 mb-5">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>
        <div className="flex gap-5 overflow-x-auto justify-start lg:justify-center  items-center h-auto">
          <PriceCard category={"Free"}
            price={0}
            textColor="black"
            cardcolor={"bg-white h-auto"}
            cardpara={"Capture ideas and find them quickly"}
            btncolor={"transparent"} />
          <PriceCard category={"Personal"}
            price={11.99}
            priceColor={"text-yellow-200"}
            textColor="white"
            cardcolor={"bg-blue-900 py-22 "}
            cardpara={"Keep home and family on track"}
            btncolor={"blue-400"} />
          <PriceCard category={"Organization"}
            price={49.99}
            textColor="black"
            cardcolor={"bg-white h-auto"}
            cardpara={"Capture ideas and find them quickly"} />
        </div>
      </section>
    </div>
  )
}

export default PlanCardSection