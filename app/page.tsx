'use client';
import React, { useState } from 'react';

const Page: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleEdit = () => {
    console.log('Edit successfully:', todo);
  };

  const handleDelete = () => {
    console.log('Delete successfully:', todo); 
    setTodo('');
  };

  const handleSubmit = () => {
    console.log('Submit successfully:', todo);
    // You can add more logic here, like adding the todo to a list or sending it to an API
    setTodo(''); // Clear the input after submission if desired
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>
      <div className="flex items-center justify-center h-screen">
        <input
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Enter todo"
          className="border border-gray-300 rounded p-2 w-1/3 mr-2"
        />
        <button 
          onClick={handleSubmit} // Use handleSubmit for the submit button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
        >
          Submit
        </button>
        <button 
          onClick={handleEdit}
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button 
          onClick={handleDelete}
          className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition ml-2"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Page;