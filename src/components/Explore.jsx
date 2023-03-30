import React from 'react'
import './expore.scss'
import settings from '../images/settings.png'
import dots from '../images/dots.png'

const Explore = () => {
  return (
    <div className='searchside explore'>
    <div className='topsearch'>
    <input placeholder='Search Twitter'></input>
    <img src={settings}></img>
    </div>
    <div className='trendside'>
    <div className='trends'>
        <div className='div1'>
            <h2>Trends for you</h2>
        </div>
        <div className='cardd'>
        <div className=''>
            <span>Trending in Germany</span>
            <h3>Revolution</h3>
        </div>
        <img src={dots}></img>
        </div>

        <div className='cardd'>
        <div className=''>
            <span>Trending in Germany</span>
            <h3>Revolution</h3>
        </div>
        <img src={dots}></img>
        </div>

        <div className='cardd'>
        <div className=''>
            <span>Trending in Germany</span>
            <h3>Revolution</h3>
        </div>
        <img src={dots}></img>
        </div>

        <h6>Show More</h6>
    </div>
    </div>
</div>
  )
}

export default Explore