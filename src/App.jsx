

import './App.css'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin  from '@fullcalendar/daygrid' 
import timegridPlugin from '@fullcalendar/timegrid'
import iterationPluging  from '@fullcalendar/interaction'
import { useState } from 'react'

function App() {
  const [eventsData, setEventsData] = useState([{ title: "event 1", date: "2023-02-02" }]);
  const [showModal, setShowModal] = useState({visible:'false',text:"",accion:""})
  const [title, setTitle] = useState('')
 
  const obtenerTitulo=(e)=>{
    e.preventDefault()
    const t= document.getElementById('title').value
    setTitle(t)
    closeModal()
  }
  const closeModal =()=>{
    setShowModal({visible:'false',text:"",accion:""})
  }
  const handleClick=(e)=>{
    setShowModal({visible:'true', text:`Desea eliminar el evento ${e.event.title}`,accion:'eliminar'})
    if(confirm(`Desea eliminar el evento${e.event.title}`)){
      e.event.remove()
    }
    
     
  }
  
  const handleSelect = ({ start, end }) => {
    setShowModal({visible:'true', text:'NUEVO EVENTO'})
     
    
    //const title = window.prompt("Nuevo evento");
    
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
        <div className={showModal.visible==='true' ? 'modal-show' : 'modal-invisible' }>
           <div>{showModal.text}</div> 
           <form >
            <input id='title' className= {showModal.accion==='eliminar' ? 'inputEliminar' :''} type="text" name="title" />
            <div className='button-group'>
              <button id='title' type='submit' onClick={obtenerTitulo}>ACEPTAR</button>
              <button onClick={closeModal}>CANCELAR</button>
            </div>
           </form>
        </div>

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
