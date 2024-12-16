import { useContext } from 'react'
import { WorkoutContext } from '../context/WorkoutProvider'

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext)
  
  if(!context) throw Error('context is error')

  return context
}

export default useWorkoutContext

