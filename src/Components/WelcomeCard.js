import React from 'react'

const WelcomeCard = () => {
    
  return (
    <>
      <div>
        <h2 > About me </h2>
        <h6 className='text-muted'>Meet your new software engineer! </h6>
        <hr/>
        </div>
    <div  className="card mb-5" style={{width: '90%'}}>
      <img src="https://avatars.githubusercontent.com/u/107439864?v=4" alt='me'/>
      <div className="card-body">
        <h3 className="card-title">Hey there!</h3>
        <p>I'm Faisal. I'm a Full-Stack software engineering student proficient in using JavaScript for full-stack programming, React, HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, and frameworks like Bootstrap.</p>

<p>I've learned industry best practices and software development standards with a focus on JavaScript, HTML5, CSS3, React Native, Node.js, PostgreSQL, RESTful API's, algorithms, and data structures.</p>
<p>When not coding or sleeping, You can find me tending to my plants, getting my pump at the gym, or playing video games!</p>

      </div>
    </div>
    </>
  )
}

export default WelcomeCard