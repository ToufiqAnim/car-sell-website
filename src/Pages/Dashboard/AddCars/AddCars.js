import React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'

import './AddCars.css'
import Typography from '@mui/material/Typography'
import axios from 'axios';
const AddCars = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

         axios.post('http://localhost:5000/cars', data)
        .then(res => {
            if(data.name){
                alert('Added New Plan Successfully');
                reset();
            }
        }) 
    };
    return (
        
            <Box className="add-tours" sx={{ mt:5}} >
       
                <Typography variant="h4" color="initial" sx={{textAlign:'center', mb:4}}>
                    Add New Cars
                </Typography> 
                <Container>
                <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" style={{fontWeight:600}} required/>

                <input {...register("image")} placeholder="Image Url" style={{fontWeight:600}}/>

                <textarea {...register("about")} placeholder="Description" style={{fontWeight:600}} />

                <input type="number" {...register("price")} placeholder="Price" style={{fontWeight:600}}/>

                <input type="text" {...register("mpg")} placeholder="MPG" style={{fontWeight:600}}/>

                <input type="text" {...register("transmission")} placeholder="Transmission" style={{fontWeight:600}}/>

                
                <input className='btn' type="submit" style={{fontWeight:600}}/>
                </form>
                </Container>
            </Box>
       
    );
};

export default AddCars;