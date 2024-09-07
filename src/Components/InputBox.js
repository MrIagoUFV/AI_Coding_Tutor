import React, { useState } from 'react';
import './InputBox.css';

const InputBox = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite seu tópico de aprendizagem"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Aprender
      </button>
    </form>
  );
};

export default InputBox;