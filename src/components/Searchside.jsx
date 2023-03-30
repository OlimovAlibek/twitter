import React from 'react'
import "./searchside.scss";
import settings from '../images/settings.png'
import dots from '../images/dots.png'


const Searchside = () => {
  return (
    <div className='searchside'>
        <input placeholder='Search Twitter'></input>
        <div className='trendside'>
        <div className='trends'>
            <div className='div1'>
                <h2>Trends for you</h2>
                <img src={settings}></img>
            </div>
            <div className='cardd'>
            <div className=''>
                <span>Trending in Germany</span>
                <h3>Revolution</h3>
                <p>50.4K Tweets</p>
            </div>
            <img src={dots}></img>
            </div>

            <div className='cardd'>
            <div className=''>
                <span>Trending in Germany</span>
                <h3>Revolution</h3>
                <p>50.4K Tweets</p>
            </div>
            <img src={dots}></img>
            </div>

            <div className='cardd'>
            <div className=''>
                <span>Trending in Germany</span>
                <h3>Revolution</h3>
                <p>50.4K Tweets</p>
            </div>
            <img src={dots}></img>
            </div>

            <h6>Show More</h6>
        </div>
        </div>
    </div>
  )
}

export default Searchside