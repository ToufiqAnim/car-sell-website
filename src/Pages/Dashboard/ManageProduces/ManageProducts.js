import { Card, CardContent, CardMedia, Grid, Typography,CardActions, Button, Container } from '@mui/material';

import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [deleteCars, setDeleteCars] = useState([]);

    useEffect(() => {
        fetch('https://still-thicket-39779.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setDeleteCars(data))
    },[]);

    const handleDeleteCars = id =>{
        const url = `https://still-thicket-39779.herokuapp.com/cars/${id}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount ){
                alert('Your Plan is Canceled')
                const remaining =deleteCars.filter(car => car._id !== id);
            setDeleteCars(remaining);
            }
            
        })
    }
    return (
        <div>
            <h1>Managing products</h1>
            
                <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        deleteCars.map(car =>
                            <Grid item xs={4} sm={4} md={4} >
                                <Card sx={{ borderRadius: 2  }}>
                                    <CardMedia
                                        component="img"
                                        sx={{height:200}}
                                        image={car.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography  variant="h5" component="div" sx={{fontWeight:"bold"}}>
                                            {car.name}
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                               
                                <Button variant='contained' sx={{textAlign:'center', mb:2}}  onClick={() => handleDeleteCars(car._id)}>Remove This Product</Button>
                              
                                     </CardActions>
                                </Card>
                            </Grid>
                        
                                )
                    }
                     </Grid>
                </Container>
               
        </div>
    );
};

export default ManageProducts;