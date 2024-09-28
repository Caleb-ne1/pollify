import React from 'react'

const Home = () => {
  return (
    <div className='home'>
        <h2>Public Polls</h2>
        <p>Bellow are the public polls created by Poll members</p>
      <div className='poll-container'>
        <div className='header'>
            <p className='category'>Web development</p>
            <p className='vote-count'>14 votes</p>
        </div>

        <div>
            <p className='question'>When was the last time you used the product category</p>
        </div>

        <div className='footer'>
            <p className='created-at'>About 3 hours ago</p>
            <p className='expires-at'>Expires at 10:40pm</p>
        </div>
      </div>
    </div>
  )
}

export default Home
