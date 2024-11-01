import React, { useState } from 'react'
import Form from './One/Form'
import Stundent from './One/Stundent'

const App = () => {
  const [students, setStudents] = useState([])

  let addNewMember = (memberInfo) => {
    setStudents([...students, memberInfo])
  }

  let ContentSection = students.length < 1 ? <p className='bg-yellow-300 text-black p-2 rounded-md m-3'>Please Fill Yours Data!!!</p> : students.map((students) => {
    return (
      <Stundent name={students.name} key={students.live} live={students.live} />
    )
  })

  return (
    <div>
      {


        <section className='flex' >
          {
            ContentSection
          }
        </section>


      }
      <Form addNewMember={addNewMember} />
    </div>
  )
}

export default App