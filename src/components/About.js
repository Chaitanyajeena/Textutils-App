import React, { useState } from 'react'

export default function About(props) {
  
  // const[myStyle,setMyStyle] = useState({
  //       color: 'black',
  //       backgroundColor: 'white'
  // })

  let myStyle = {
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor:props.mode ==='dark'?'#042743':'white',
    // border: '2px solid',
    borderColor: props.mode ==='dark'?'white':'#042743'
  }
  return (
    <div className="container " style={myStyle}>
      <h1 className='my-3'>About US</h1>
              <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
              TextUitls gives you a way to Analyze your text quickly and efficiently.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUitls is Free to use for everyone. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This word counter software work in web browsers such as chrome,firefox , etc .
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <strong>About Creater</strong>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                The Creator of this website is from INDIA,UTTRAKHAND and it created by  single user not a team.
                <strong>and this website is created using REACT.</strong>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
