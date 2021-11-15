import React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import WarningIcon from '@mui/icons-material/Warning';
import './AddReview.css'
import Typography from '@mui/material/Typography'
import axios from 'axios';
const AddReview = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

         axios.post('https://still-thicket-39779.herokuapp.com/review', data)
        .then(res => {
            if(data.ratings){
                alert('Review Added Successfully');
                reset();
            }
        }) 
    };
    return (
        <Box className="add-tours" sx={{ mt:5}} >
       
                <Typography variant="h4" color="initial" sx={{textAlign:'center', mb:4}}>
                    Add Your Review
                </Typography> 
                <Container>
                <form onSubmit={handleSubmit(onSubmit)} >
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Car Name" style={{fontWeight:500, fontSize:17}} required />
               

                <textarea {...register("reviewDescription")} placeholder="Review" style={{fontWeight:500, fontSize:17}} />

                <input type="number" {...register("ratings", { min: 1, max: 5 })} placeholder="Ratings" style={{fontWeight:500, fontSize:17}} required/>
                {errors.ratings && (
                <p style={{color:'red',display:'flex'}}><WarningIcon style={{paddingRight:3}}/><span>Rating Must Be Between 1 to 5</span></p>
                 )}
                <input className='btn' type="submit" style={{fontWeight:600}}/>
                </form>
                </Container>
            </Box>
    );
};

export default AddReview;