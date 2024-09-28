import React, {useState} from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";

const CreatePoll = () => {
    const [options, setOptions] = useState(['']);

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

  return (
    <div className='create-poll'>
        <h6><MdOutlineNavigateNext />Home</h6>
      <h1>Create a poll</h1>
      <form>
        <div className='row'>
            <label for="question">Question</label>
            <textarea name="question"></textarea>
        </div>
        <hr />
        <div className='row'>
            <label for="options">Options: </label>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        className='options-input'
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                    />
                    <button type="button" onClick={() => removeOption(index)} className='remove-btn'>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addOption} className='addOptions-btn'>Add Option</button>
            <div>
                <input type="checkbox" name='multiple-votes'/>
                <label for="multiple-votes">Allow multiple votes</label>
            </div>
        </div>
        <hr />
        <div className='row'>
            <label for="">Expires At: </label>
            <div>
                <div className='date-time-input'>
                    <label for="date">Set date:</label>
                    <input type="date" name="date" />
                    <label for="time">Set time: </label>
                    <input type="time" name='time'/>
                </div>
            </div>
        </div>
        <hr />

        <div className='row'>
            <label for="Category">Category:</label>
            <input type="text" name='category' />
        </div>
        <hr />

        <div className='row'>
            <label for="description">Description: </label>
            <input type="text" name="description" />
        </div>
        <hr />
        <div className='row'>
            <label for="tags">Tags:</label>
            <input type="text" name='tags'/>
        </div>
        <button type="submit" className='create-btn'>Create Poll</button>
      </form>
    </div>
  )
}

export default CreatePoll
