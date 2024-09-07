import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Import Grid component
import { Button } from "@mui/material";

import { createTask } from "../api/tasks.api";

import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"; // valida y captura los datos
//yup y zop son 2 bibliotecas que complementan
export function TaskFormPage() {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm() // Da unas funciones que lo tomamos
  //registrer permite registrar input(los captura) y permite validarlos
  //handleSubmit permite extraer los datos y maneja el envio

  const onSubmit = handleSubmit(async data =>{
    const res = await createTask(data) // llamamos a la función que envia los datos al backend
    console.log(res)// los datos se visualizan en consola
    navigate('/tasks')
  })
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="left">
        CREAR TAREA
      </Typography>
      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off" marginTop={3}>
        <Grid container spacing={2}> {/* Use Grid for responsiveness */}
          <Grid item xs={12}> {/* Title TextField */}
            <TextField
              id="outlined-basic"
              label="Titulo"
              variant="outlined"
              placeholder="Titulo"
              sx={{ width: "40ch" }}
              helperText="Campo obligatorio"
              required
              {...register("title", {required: true})}
            />
          </Grid>
          <Grid item xs={12}> {/* Description TextField */}
            <TextField
              id="outlined-textarea"
              label="Descripción"
              placeholder="Descipción"
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
