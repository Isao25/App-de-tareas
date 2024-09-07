// Material ui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// cards
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import React, { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from "../api/tasks.api"; // Importa la función deleteTask
import { useNavigate } from 'react-router-dom';

export function TasksList() {
  const [tasks, setTasks] = useState([]); // Cuando inicie va ser un arreglo vacio
  const navigate = useNavigate();

  useEffect(() => {
    // Es como decir que se ejecute esto apenas arranca la pagina
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      console.log("Tarea eliminada")
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center">
        TAREAS PARA EL PROYECTO
      </Typography>
      <Grid container spacing={5} style={{ marginTop: "10px" }}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={4} ms={4} key={task.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => navigate(`/tasks/${task.id}`)}>Editar</Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(task.id)}
                >
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
