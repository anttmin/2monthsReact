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
        people.length < 1 ? <p className='p-3  ml-4 bg-yellow-400 max-w-[200px] text-center rounded-md'>Please Fill Valid Data!!</p> : 
        ContentSection
       }

      
    </div>
  )
}

export default App