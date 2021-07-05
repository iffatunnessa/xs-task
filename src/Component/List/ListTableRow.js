import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const ListTableRow = ({ rows}) => {
    const { id, created_at, message, name} = rows;
    return (
        <>
        { 
            <TableRow component={Link} to={`/update/${id}`}>
            <TableCell align="right">{id}</TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{message}</TableCell>
            <TableCell align="right">{created_at}</TableCell>
        </TableRow>
        }
        </>
    );
};

export default ListTableRow;