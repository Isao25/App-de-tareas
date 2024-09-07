import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Import Grid component
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { updateTask,getTask } from "../api/tasks.api";
import { useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"; // valida y captura los datos
//yup y zop son 2 bibliotecas que complementan
export function EditTask() {
  const navigate = useNavigate();
  const params = useParams();// recoge parametros  
  const {register, handleSubmit, setValue} = useForm() // Da unas funciones que lo tomamos
  //registrer permite registrar input(los captura) y permite validarlos
  //handleSubmit permite extraer los datos y maneja el envio
  //setValue permite colocar valores al formulario
  const onSubmit = handleSubmit(async data =>{
    const res = await updateTask(params.id,data) // llamamos a la función que envia los datos al backend
    console.log(res)// los datos se visualizan en consola
    navigate('/tasks')
  })

  useEffect(() => {
    //Es como decir que se ejecute esto apenas arranca la pagina
    async function loadTasks() {
      const res = await getTask(params.id);
      //Ahora se podra visualizar los datos de esa tarea en el formulario para editarlo
      setValue('title', res.data.title)
      setValue('description', res.data.description)
    }
    loadTasks();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="left">
        CREAR TAREA
      </Typography>
      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off" marginTop={3}>
        <Grid container spacing={2}> {/* Use Grid for responsiveness */}
          <Grid item xs={12}> {/* Title TextField */}
            <InputLabel htmlFor="outlined-basic">Titulo</InputLabel>
            <TextField
              id="outlined-basic"
              
              variant="outlined"
              sx={{ width: "40ch" }}
              helperText="Campo obligatorio"
              required
              {...register("title", {required: true})}
            />
          </Grid>
          <Grid item xs={12}> {/* Description TextField */}
            <InputLabel htmlFor="outlined-basic">Descipción</InputLabel>
            <TextField
              id="outlined-textarea"
              rows={6}
              multiline
              fullWidth // Make description TextField span full width
              helperText="Campo obligatorio"
              required
              {...register("description", {required: true})}
            />
          </Grid>
        </Grid>
        <Button size="small" variant="contained" type="submit" sx={{mt:3}}>Save</Button>
      </Box>
      

    </Container>
  );
}
