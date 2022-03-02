import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success,  setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://still-thicket-39779.herokuapp.com/makeadmin', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               if(data.modifiedCount){
                console.log(data);
               
                setSuccess(true);
               }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Container maxWidth="xl" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="h4" color="#1976d2" sx={{mt:5}}>Create New Admin</Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                sx={{width:400, backgroundColor:'#eeef',my:2}}
                     id="outlined-basic"
                    label = "Email"
                    type = "emai"
                    onBlur = {handleOnBlur}
                    variant = "outlined"
               />
               <br/>
               <Button type="submit" variant="outlined">Make Admin</Button>
            </form>
            {success && <Alert severity="success">New Admin Created Successfully</Alert>}
            </Container>
        </div>
    );
};

export default MakeAdmin;