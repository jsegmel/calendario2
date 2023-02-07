

import './App.css'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin  from '@fullcalendar/daygrid' 
import timegridPlugin from '@fullcalendar/timegrid'
import iterationPluging  from '@fullcalendar/interaction'
import { useState } from 'react'

function App() {
  const [eventsData, setEventsData] = useState([{ title: "event 1", date: "2023-02-02" }]);
 console.log(eventsData)
  const handleClick=(e)=>{
    if(confirm(`Desea eliminar el evento${e.event.title}`)){
      e.event.remove()
    }
    
     
  }
  
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Nuevo evento");

    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
        
      ]);
  };
  return (
    <div className="App">
        <FullCalendar
       
        plugins={[ dayGridPlugin,timegridPlugin ,iterationPluging]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={eventsData}
        eventClick={handleClick}
        select={handleSelect}
      />
      
    </div>
  )
 
   
  
}

export default App
