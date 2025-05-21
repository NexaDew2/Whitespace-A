import React from 'react'

const OurClientCard = ({Quote,Avator,ourclientbg,cardtextcolor}) => {
  return (
  <div className="flex justify-center py-10">
      <div className={`max-w-sm mx-auto p-6 mb-10 min-w-[350px] rounded-xl shadow-xl space-y-4 ${ourclientbg}`}>
      <div className="text-blue-900 text-4xl my-5">
        <img src={Quote} alt="image" />
      </div>
      <p className={` text-base my-5 text-${cardtextcolor}`}>
        Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
      </p>
      <hr className={`border-t my-10 border-${cardtextcolor} `}   />
      <div className="flex items-center space-x-4">
        <img
          src={Avator} 
          alt="Oberon Shaw"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="text-blue-900 font-semibold text-lg leading-tight">Oberon Shaw,<br />MCH</h4>
          <p className={`text-sm text-${cardtextcolor}`}>Head of Talent Acquisition,<br />North America</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default OurClientCard