import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrders = () => {

    const {user} = useAuth();
    const  [myOrders, setMyOrders] = useState([]);
    /* const { email } = useParams(); */

    useEffect(() => {
        const url =  `https://still-thicket-39779.herokuapp.com/myorders/${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[user.email]);

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
                const remaining =myOrders.filter(order => order._id !== id);
            setMyOrders(remaining);
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
                        {myOrders.map((row) => (
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
                                <Button onClick={() => handleCancelOrder(row._id)}> Cancel Orders</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    );
};

export default MyOrders;