"use client";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const calculateDaysDifference = (taskDate) => {
  const today = new Date();
  const targetDate = new Date(taskDate);
  const timeDifference = targetDate - today;
  const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
  return dayDifference;
};

export default function TaskDetails() {
  const router = useRouter();
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', date: '', completed: false });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/tasks/${id}`)
        .then(response => response.json())
        .then(data => {
          setTask(data);
          setFormData({
            title: data.title,
            description: data.description,
            date: data.date,
            completed: data.completed
          });
        });
    }
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(() => {
        setIsEditing(false);
        fetch(`http://localhost:3001/tasks/${id}`)
          .then(response => response.json())
          .then(data => setTask(data));
      });
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  const daysDifference = calculateDaysDifference(task.date);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label className="text-gray-700 text-sm font-bold">Completed</label>
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Save Changes
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <p className="mb-4">{task.description}</p>
          <p className="mb-4">{task.date}</p>
          <p className="mb-4">
            {daysDifference > 0 
              ? `${daysDifference} days remaining`
              : `${Math.abs(daysDifference)} days ago`}
          </p>
          <div className="flex space-x-4">
            <button onClick={handleEditClick} className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Edit
            </button>
            <Link href="/" className="bg-gray-500 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              Back to list
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};