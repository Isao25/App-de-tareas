import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {TasksPage} from './pages/TasksPage'
import {TaskFormPage} from './pages/TaskFormPage'
import {EditTask} from './pages/EditTask'
import { Navbar } from "./components/Navbar";
import './App.css'
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Box height={30} />
      <Routes>
        <Route path="/" element={<Navigate to = '/tasks'/>} />
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks-create" element={<TaskFormPage/>} />
        <Route path="/tasks/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
