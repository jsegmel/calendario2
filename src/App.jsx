
import reactLogo from './assets/react.svg'
import './App.css'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin  from '@fullcalendar/daygrid' 
import timegridPlugin from '@fullcalendar/timegrid'
import iterationPluging  from '@fullcalendar/interaction'
import { useState } from 'react'
import { Calendar,formatDate } from '@fullcalendar/core'
import DatePiker from "react-datepicker"

function App() {
  const events=[{title: "", date: "" }]
  const[newEvent,setEvent]=useState({title: "", date: "" })
  const[allEvents,setAllEvents]=useState([])
  
    
   
  function handleAddEvent(arg) {
   setEvent({title:"evento", date:arg.date})
   setAllEvents(allEvents+newEvent)
   console.log(allEvents)
  }
  
  return (
    <div className="App">
        <FullCalendar
        plugins={[ dayGridPlugin,timegridPlugin ,iterationPluging]}
        initialView="dayGridMonth"
        dateClick={handleAddEvent}
        
        event={allEvents}
        
      />
      
    </div>
  )
}

export default App
