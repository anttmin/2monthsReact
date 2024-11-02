import React, { useState } from 'react'
import Form from './One/Form'
import People from './One/People'


const App = () => {
  let [people,setPeople] = useState([])

  let addNewMember = (menInfo) =>{
      setPeople([...people,menInfo])
  }

  let ContentSection = people.map((people)=>{
    return(
      <People name={people.name} live={people.live}  email={people.email} key={people.email}/>
    )
  })

  return (
    <div className='bg-slate-200 max-h-full p-2'>
      <Form addNewMember={addNewMember}/>
       {
        people.length < 1 ? <p className='p-4  text-blue-400  ml-14 bg-white max-w-[250px] text-center rounded-md'>Add a new User Right Now!!</p> : 
        ContentSection
       }

      
    </div>
  )
}

export default App