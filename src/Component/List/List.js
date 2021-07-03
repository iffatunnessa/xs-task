import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListTableHeader from './ListTableHeader';
import ListTableRow from './ListTableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const List = () => {
    const classes = useStyles();
    const [list, setList] = useState('');
    const [headers, setHeaders] = useState([]);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        fetch('http://localhost/api/list.php')
            .then(res => res.json())
            .then(data => {
                setList(data);
                setHeaders(data.data.headers[0]);
                setRows(data.data.rows);
            })
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            Object.keys(headers).map(keyName =>
                                <ListTableHeader keyName={headers[keyName]} />
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                        {rows.map(rows => <ListTableRow rows={rows}/>)}

                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default List;