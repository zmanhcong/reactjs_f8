import {useState } from 'react'

function App() {

  const courses = [
    {
      id: 1,
      name: 'Javascript',
    },
    {
      id: 2,
      name: 'HTML, CSS',
    },
    {
      id: 3,
      name: 'ReactJS',
    }
  ]

  const [checked, setChecked] = useState([])
  // console.log(checked)

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)  //filter trả về kết quả meet với yêu cầu => ở đây filter sẽ trả về mảng item(all checked) với điều kiện item # course.id
      } else {
        return [...prev, id]
      }
      
    })
  }

  const handleSubmit = () => {
    console.log({id: checked});
  }

  return (
    <div className="App" style={{padding: 20, }}>
      {courses.map(course => (
         <div key={course.id}> 
            <input
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
         </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
    </div>
  );
}


export default App;
