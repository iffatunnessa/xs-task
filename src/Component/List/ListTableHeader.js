import React from 'react';
import TableCell from '@material-ui/core/TableCell';

const ListTableHeader = ({keyName}) => {
    const { title, hidden } = keyName;
    return (
        <>
           {!hidden && 
            <TableCell align="right">{title}</TableCell>}
        </>
    );
};

export default ListTableHeader;