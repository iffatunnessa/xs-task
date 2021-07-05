import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';

const ListTableHeader = ({ headers, keyName, handleSort }) => {
    const { title, hidden, sortable, searchable } = keyName;
    // const [header, setHeader] = useState(keyName);
    const fieldHandle = (title) => {
        handleSort(title);
    }
    return (
        <>
            {!hidden &&
                <TableCell onClick={() => fieldHandle(title.toLowerCase())} align="right">{title}</TableCell>}
        </>
    );
};

export default ListTableHeader;