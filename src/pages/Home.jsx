import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useWorkoutContext from '../hooks/useWorkoutContext'
import Create from './Create'

const Home = () => {
  const navigate = useNavigate()

  const {workouts, dispatch} = useWorkoutContext()
  
  useEffect(() => {
    const fetchWorkout = async () => {
      const res = await fetch('https://server-workout.vercel.app/api/workout')
      const json = await res.json()
      if(res.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkout()
  },[])

  async function handleDelete(id){
    const res = await fetch('https://server-workout.vercel.app/api/workout/'+id, {
      method: 'DELETE'
    })
    const json = await res.json()
    dispatch({type: 'DELETE_WORKOUTS', payload: json})
  }

  return (
    <div className='flex'>
      <div>
        {
          workouts && workouts.map(item => {
          return <div key={item._id}>
            <h4>{item.title}</h4>
            <p>load (kg): {item.load}</p>
            <p>reps: {item.reps}</p>
            <p>{item.createdAt}</p>
            <button>update</button>
            <button onClick={() => handleDelete(item._id)}>delete</button>
          </div>})
        }
      </div>
      <div>
      <Create />

      </div>
    </div>
  )
}

export default Home