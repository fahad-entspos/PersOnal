import React, { useState, useRef, useEffect } from 'react';

const AutoHeightTextarea = () => {
  const textareaRef = useRef();
  const [textareaValue, setTextareaValue] = useState('');

  useEffect(() => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, [textareaValue]);

  const handleChange = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={textareaValue}
      onChange={handleChange}
      className="resize-none block w-full p-2 border rounded-md focus:ring focus:ring-indigo-400"
    />
  );
};

export default AutoHeightTextarea;
