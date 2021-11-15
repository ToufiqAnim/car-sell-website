import { Button, Card, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';



const CarBuy = ({carDetail}) => {
    const {name} = carDetail;
    const {user} = useAuth();

    const info = { carBuyerName: user.displayName, email: user.email, phone: '', address:'' };

    const [carBuyInfo, setCarBuyInfo] = useState(info);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...carBuyInfo};
        newInfo[field] = value;
        setCarBuyInfo(newInfo);
    }
    const handleBuyCar = e =>{
        const carBuyer = {
            ...carBuyInfo,
            carName: name
        }
        fetch('http://localhost:5000/buyer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carBuyer)
        })
        .then(res => res.json())
      .then(data => {
          console.log(data)
         if(data.insertedId){
          alert('Your Order Has Been Placed')
        } 
      })

        e.preventDefault()
    }

    return (
        <Card sx={{boxShadow:1,my:5,backgroundColor:'#eeef'}}>
                <Box sx={{p:5}}>
                <Typography id="transition-modal-title" variant="h6" component="h2" sx={{m:1,color:"#1976d2", fontWeight:600}}>
                  {name}
              </Typography>
              <form onSubmit={handleBuyCar}>
                
                  <TextField
                      sx={{ width: '90%', m: 1 }}
                      id="outlined-basic"
                      
                      name="carBuyerName"
                      onBlur={handleOnBlur}
                      defaultValue={user.displayName}
                      
                  />
                  <TextField
                      sx={{ width: '90%', m: 1 }}
                      id="outlined-basic"
                      name="email"
                      onBlur={handleOnBlur}
                      defaultValue={user.email}
                     
                  />
                  <TextField
                      sx={{ width: '90%', m: 1 }}
                      id="outlined-basic"
                      name="phone"
                      onBlur={handleOnBlur}
                      defaultValue="Phone Number"
                      
                  />
                  <TextField
                      sx={{ width: '90%', m: 1 }}
                      id="outlined-basic"
                      name="address"
                      onBlur={handleOnBlur}
                      defaultValue="Address"
                     
                  />
                  
                  <Button type="submit" variant="contained" sx={{m:1}}>Submit</Button>
              </form>
                </Box>
          </Card>
    );
};

export default CarBuy;