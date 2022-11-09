import {useState } from 'react'

function App() {
    
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState( () => {     // đưa parsed json vào giá trị initial để tăng performance , không cần reload lại.
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storageJobs ?? [];    // nếu initial của  storage là null thì sẽ lấy null.
    })   


const handleSubmit = () => {
    setJobs(prev => {
        const newJobs = [...prev,job]
        const jsonJobs = JSON.stringify(newJobs) //js to json > '{"x":5,"y":6}'
        console.log("json is", jsonJobs)
        localStorage.setItem('jobs', jsonJobs)

        return newJobs
    })
    setJob('')
    console.log(jobs)
}

  return (
    <div className="App" style={{padding: 20 , margin: 30 }}>
    
      <input  
        style={{padding :10, margin:10}}
        value={job}
        onChange = {e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

        <ul >
            {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                    </li>
            ))}
        </ul>
    </div>
  );
}


export default App;
