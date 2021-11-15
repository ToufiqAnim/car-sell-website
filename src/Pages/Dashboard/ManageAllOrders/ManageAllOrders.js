import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const ManageAllOrders = () => {
    
    const  [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        const url =  `https://still-thicket-39779.herokuapp.com/buyer`
        fetch(url)
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[]);

    const handleCancelOrder = id =>{
        const url = `https://still-thicket-39779.herokuapp.com/buyer/${id}`;
        fetch(url, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount ){
                alert('Your Order is Canceled')
                const remaining =allOrders.filter(order => order._id !== id);
            setAllOrders(remaining);
            }
            
        })
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="myOrders table">
                    <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Car Name</TableCell>
                        <TableCell align="center">Action</TableCell>

                    </TableRow>
                    </TableHead>
                    <TableBody  >
                        {allOrders.map((row) => (
                            <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row"  >
                                {row.carBuyerName}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.carName}</TableCell>
                            <TableCell align="center">
                                <Button onClick = {()=> handleCancelOrder(row._id)}> Cancel Orders</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
};

export default ManageAllOrders;