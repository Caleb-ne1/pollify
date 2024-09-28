import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [Polls, setPolls] = useState([]);

    useEffect(() => {
        const fetchPolls = async () => {
            try {
                const response = await axios.get("http://localhost:3001/vote/all")
                setPolls(response.data)
            } catch (err) {
                alert(err)
            }
        }

        fetchPolls();
    }, []);

    const formatDuration = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);

        const totalHours = Math.floor((now - createdDate) / (1000 * 60 * 60));
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} + ${hours} hour${hours !== 1 ? 's' : ''}`;
        }
        return `${hours} hour${hours !== 1 ? 's' : ''}`;
    };
    
    return (
        <div className='home'>
            <h2>Public Polls</h2>
            <p>Bellow are the public polls created by Poll members</p>
            <>
                {Polls.map(poll => (
                    <div className='poll-container' key={poll.id}>
                        <div className='header'>
                            <div className='tags-container'>
                            {poll.tags.map((tagObj, tagIndex) => (
                                <p className='category' key={tagIndex}>
                                    {Object.values(tagObj)[0]}
                                </p>
                            ))}
                            </div>

                            <div>
                                <p className='vote-count'>14 votes</p>
                            </div>
                        </div>

                        <div>
                            <p className='question'>{poll.question}</p>
                        </div>

                        <div className='footer'>
                            <p className='created-at'>About {formatDuration(poll.createdAt)}</p>
                            <p className='expires-at'>Expires at 10:40pm</p>
                        </div>
                    </div>
                ))}

            </>
            <div className='poll-container'>
                <div className='header'>
                    <p className='category'>Web development</p>
                    <p className='vote-count'>14 votes</p>
                </div>

                <div>
                    <p className='question'>Hello</p>
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
