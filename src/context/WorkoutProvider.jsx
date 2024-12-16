import React, { createContext, useReducer } from 'react'


export const WorkoutContext = createContext(null)

function workoutReducer(state, action){
  switch(action.type){
   case 'SET_WORKOUTS': return {workouts: action.payload}
   case 'CREATE_WORKOUTS': return {workouts: [action.payload, ...state.workouts]}
   case 'DELETE_WORKOUTS': return {workouts: state.workouts.filter(workout => workout._id != action.payload._id)}
   default: return state
  }
}

const WorkoutProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(workoutReducer, {workouts: null})

  
  return (
    <WorkoutContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}

export default WorkoutProvider