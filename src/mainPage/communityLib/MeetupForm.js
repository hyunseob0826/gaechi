import React, { useState } from 'react';
import './Meetup.css';
import Menu from '../menu';


const MeetupForm = ({ onAddMeetup }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleSubmit = () => {
    if (title && description) {
      onAddMeetup({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="meetup-form-container">
      <div className="header-bar">
        <a className="logo" href="/">
          개취존중
        </a>
      </div>
      <Menu />
      <div className="meetup-form">
        <h2>스터디 모임 공고</h2>
        <label>방 이름:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
        <label>부가 설명</label>
        <textarea value={description} onChange={handleDescriptionChange} />
        <button onClick={handleSubmit}>Add Meetup</button>
      </div>
    </div>
  );
};

export default MeetupForm;
