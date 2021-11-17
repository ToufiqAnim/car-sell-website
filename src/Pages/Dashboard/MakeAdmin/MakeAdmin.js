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
        fetch('https://still-thicket-39779.herokuapp.com/users/admin', {
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
            <Container>
                <Typography variant="h4" color="#1976d2">Create New Admin</Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                sx={{width:300, backgroundColor:'#eeef',my:2}}
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