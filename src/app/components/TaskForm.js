"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TaskForm({ task = {} }) {
  const [title, setTitle] = useState(task.title || '')
  const [description, setDescription] = useState(task.description || '')
  const [date, setDate] = useState(task.date || '')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const method = task.id ? 'PUT' : 'POST'
    const url = task.id ? `http://localhost:3001/tasks/${task.id}` : 'http://localhost:3001/tasks'
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, date, completed: task.completed || false })
    }).then(() => {
      router.push('/')
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mt-8 mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
        </label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date:
        </label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Save
      </button>
    </form>
  )
}