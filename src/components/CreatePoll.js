import { useState } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import axios from 'axios';

const CreatePoll = () => {
    const [options, setOptions] = useState(['']);
    const [question, setQuestion] = useState('');
    const [allowMultipleVotes, setAllowMultipleVotes] = useState(false);
    const [expireDate, setExpireDate] = useState('');
    const [expireTime, setExpireTime] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };


    const addOption = () => {
        setOptions([...options, '']);
    };

    const removeOption = (index) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const pollData = {
            question,
            optionNames: options,
            allowMultiple: allowMultipleVotes,
            expireDate,
            expireTime,
            category,
            description,
            tagNames: tags.split(',').map(tag => tag.trim()),
        };

        try {
            const response = await axios.post('http://localhost:3001/vote/poll', pollData,  {
                withCredentials: true, 
            });
            alert('Poll created successfully:', response.data);
            alert(pollData);
        } catch (err) {
            alert('Error creating poll:', err);
        }
    };


    return (
        <div className='create-poll'>
            <h6><MdOutlineNavigateNext />Home</h6>
            <h1>Create a poll</h1>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label htmlFor="question">Question</label>
                    <textarea name="question" value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                </div>
                <hr />
                <div className='row'>
                    <label htmlFor="options">Options: </label>
                    {options.map((option, index) => (
                        <div key={index}>
                            <input
                                className='options-input'
                                type="text"
                                placeholder={`Option ${index + 1}`}
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                            />
                            <button type="button" onClick={() => removeOption(index)} className='remove-btn'>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addOption} className='addOptions-btn'>Add Option</button>
                    <div>
                        <input
                            type="checkbox"
                            name='multiple-votes'
                            checked={allowMultipleVotes}
                            onChange={() => setAllowMultipleVotes(!allowMultipleVotes)}
                        />
                        <label htmlFor="multiple-votes">Allow multiple votes</label>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <label htmlFor="">Expires At: </label>
                    <div className='date-time-input'>
                        <label htmlFor="date">Set date:</label>
                        <input
                            type="date"
                            name="date"
                            value={expireDate}
                            onChange={(e) => setExpireDate(e.target.value)}
                        />
                        <label htmlFor="time">Set time: </label>
                        <input
                            type="time"
                            name='time'
                            value={expireTime}
                            onChange={(e) => setExpireTime(e.target.value)}
                        />
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <label htmlFor="Category">Category:</label>
                    <input
                        type="text"
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <hr />

                <div className='row'>
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <hr />
                <div className='row'>
                    <label htmlFor="tags">Tags:</label>
                    <input
                        type="text"
                        name='tags'
                        placeholder="Enter tags separated by commas"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <button type="submit" className='create-btn'>Create Poll</button>
            </form>
        </div>
    );
};

export default CreatePoll;
