import { Button, Card, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Backdrop from '@mui/material/Backdrop';


const style = {
    position: 'absolute',
    top: '40%',
    right: '13%',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};
const CarBuy = ({carDetail, carBooking, handleCarBookingClose}) => {
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
        fetch('https://still-thicket-39779.herokuapp.com/buyer', {
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
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={carBooking}
        onClose={handleCarBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
            <Fade in= {carBooking}>
            
                <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2" sx={{m:1,color:"#dd3d53", fontWeight:600}}>
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
                      placeholder="Phone Number"
                      
                  />
                  <TextField
                      sx={{ width: '90%', m: 1 }}
                      id="outlined-basic"
                      name="address"
                      onBlur={handleOnBlur}
                      placeholder="Address"
                     
                  />
                  
                  <Button type="submit" variant="contained" sx={{m:1}}>Submit</Button>
              </form>
                </Box>
         
            </Fade>
        </Modal>
    );
};

export default CarBuy;