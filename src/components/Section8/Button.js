import React from 'react';

export default function Button({text}) {
    return (
        <button type="button" className="btn btn-career bg-white w-100 d-flex align-items-center">
               <div className="left-career float-left">
                  <p className="career-head-title mb-0 text-left"> {text} </p>
               </div>
               <div className="float-right">
                  <span className="right-arrow"> &#8594;</span>
               </div>
        </button>
    )
}
