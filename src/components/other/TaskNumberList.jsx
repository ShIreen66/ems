import React from 'react'

const TaskNumberList = () => {
  return (
    <div className='flex justify-between w-full gap-5 mt-10 overflow-auto'>
        <div className='rounded-xl w-[45%] bg-red-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

         <div className='rounded-xl w-[45%] bg-blue-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

         <div className='rounded-xl w-[45%] bg-green-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

         <div className='rounded-xl w-[45%] bg-yellow-400 py-6 px-9'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskNumberList