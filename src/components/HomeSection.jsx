import React from 'react'
import './HomeSection.scss'
import profilepic from '../images/profile.png'
import icons from '../images/icons.png';
import profile2 from '../images/profile2.png'
import profile3 from '../images/profile3.png'
import frame1 from '../images/frame1.png'
import frame2 from '../images/frame2.png'
import dots from '../images/dots.png'

const HomeSection = () => {
  return (
    <div className='centerhome'>
    <div className='hometop'>
      <h1>Home</h1>
    </div>
    <div className='myprofile'>
      <img src={profilepic} alt='qwerty'></img>
      <div className='texts'>
      <span>What’s happening</span>
      <img src={icons} alt="sdasd"></img>
      <button>Tweet</button>
      </div>
    </div>
    <div className='yourprofile'>
      <img className='profile2' src={profile2} alt='sdas'></img>
      <div className='yourtext'>
      <div>
        <div className='firstline'>
        <div className='firsttext'>
          <h4>Designsta</h4>
          <span>@inner · 25m</span>
          </div>
          <img src={dots}></img>
        </div>
      
      </div>
      <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
      <img className='frames' src={frame1}></img>
      </div>
    </div>

    <div className='yourprofile'>
      <img className='profile3' src={profile3} alt='sdas'></img>
      <div className='yourtext'>
      <div>
        <div className='firstline'>
        <div className='firsttext'>
          <h4>cloutexhibition</h4>
          <span>@RajLahoti · 22m</span>
          </div>
          <img src={dots}></img>
        </div>
      
      </div>
      <p>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
      <img className='frames' src={frame2}></img>
      </div>
    </div>


    </div>
  )
}

export default HomeSection