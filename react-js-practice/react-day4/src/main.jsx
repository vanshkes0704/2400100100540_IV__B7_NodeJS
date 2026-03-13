import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Welcome from './components/Welcome.jsx'

import Student from './components/Student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome name='Vansh kesharwani'></Welcome>
    <Welcome greet='Vishal'></Welcome>

    <Student name="Vishal baba" course="BSC" roll="40"></Student>

    {/*<Student name='Utkarsh Singh'></Student>
    <Student course='B.Tech /' ></Student>
    <Student rollno='02'></Student> */}

  </StrictMode>,
)
