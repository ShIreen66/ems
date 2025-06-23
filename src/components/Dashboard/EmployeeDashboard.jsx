import Header from '../other/Header'
import TaskNumberList from '../other/TaskNumberList'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C]  text-white h-screen'>
      <Header />
      <TaskNumberList />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard