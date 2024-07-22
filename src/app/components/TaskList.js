"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const router = useRouter()
  
  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])

  if (!tasks) {
    return <div>Loading tasks...</div>
  }

  const onRowSelect = (id) => {
    router.push(`/tasks/${id}`)
  }

  return (
    <section className='p-10'>
      <Link 
        href="/tasks/new"
        className='bg-primary rounded-full px-8 py-1 text-white hover:bg-opacity-80 hover:transition hover:duration-300 font-medium'
      >
        Create new task
      </Link>
      
      <table className='table-fixed w-full mt-6'>
        <thead>
          <tr className='text-left border-y-[1px] border-gray-400'>
            <th className='py-2'>#</th>
            <th className='py-2'>Task</th>
            <th className='py-2'>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr
              key={ task.id }

              className={`cursor-pointer border-b-[1px] hover:transition hover:duration-200 ${task.completed ? 'bg-green-400 hover:bg-green-500' : 'hover:bg-slate-50'}`}
              onClick={ () => onRowSelect(task.id) }
              >
              <td className='py-3 pl-3'>{ task.id }</td>
              <td className='py-3'>{ task.title }</td>
              <td className='py-3'>{ task.date }</td>
            </tr>
          ))}
        </tbody>
         
        
      </table>
    </section>
  )
}