import React from 'react'
import { apple, google, microsoft, slack } from '../../assets'

const Sponser = () => {
  return (
    <div className='py-20'>
        <div className="bg-white py-20">
            <h1 className="text-5xl font-bold text-center p-20">Our Sponser</h1>
<div className="imagesection justify-center items-center flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-10 lg:gap-20">
  <img src={apple} className="w-fit h-auto" alt="Apple logo" />
  <img src={google} className="w-fit h-auto" alt="Google logo" />
  <img src={microsoft} className="w-fit h-auto" alt="Microsoft logo" />
  <img src={slack} className="w-fit h-auto" alt="Slack logo" />
</div>
         </div>
    </div>
  )
}

export default Sponser