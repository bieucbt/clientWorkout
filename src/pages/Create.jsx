import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useWorkoutContext from '../hooks/useWorkoutContext';

const Create = () => {
  const {dispatch} = useWorkoutContext()
 

  const [data, setData] = useState({
    title: '', reps: 0, load: 0
  })


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('http://localhost:5000/api/workout/' + id)
  //     const json = await res.json()
  //     const {title, reps, load} = json
  //     setData({title, reps, load})
  //   }
  //   fetchData()
  // }, [])
 

  const handleCreate = async (e) => {
    e.preventDefault()
   const res = await fetch('http://localhost:5000/api/workout', {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const json = await res.json()
    dispatch({type: 'CREATE_WORKOUTS', payload: json })
  }

  return (
    <form className='flex'>
      <div className='flex items-center'>
        <label htmlFor="title">title</label>
        <input type="text" id='title' value={data.title}
        onChange={e => setData({...data, title: e.target.value})} /></div>
      <div className='flex items-center'>
        <label htmlFor="reps">reps</label>
        <input type="number" id='reps' value={data.reps}
        onChange={e => setData({...data, reps: parseInt(e.target.value)})} /></div>
      <div className='flex items-center'>
        <label htmlFor="load">load</label>
        <input type="number" id='load' value={data.load}
        onChange={e => setData({...data, load: parseInt(e.target.value)})} /></div>
        
      <button onClick={handleCreate}>create</button>
    </form>
  )
}

export default Create