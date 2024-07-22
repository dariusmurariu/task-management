import TaskForm from '../../components/TaskForm'

export default function NewTask() {
  return (
    <div>
      <header 
            className="p-10 shadow-lg 
                    bg-gradient-to-r from-primary via-purple-800 via-[percentage:20%_70%] to-pink-600
                    flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl text-center font-semibold text-white">New Task</h1>
      </header>
      
      <TaskForm/>
    </div>
  )
}