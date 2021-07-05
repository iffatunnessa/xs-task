import React, { createContext, useEffect, useState } from 'react';
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
import { useRowState, useSortBy } from 'react-table';

export const UserContext = createContext();

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
    const [defaultRows, setDefaultRows] = useState([]);
    const [sortedField, setSortedField] = useState(null);
    const [sortOrder, setSortOrder] = useState('ascending');

    useEffect(() => {
        fetch('http://localhost/api/list.php')
            .then(res => res.json())
            .then(data => {
                setList(data);
                setDefaultRows(data.data.rows);
                setHeaders(data.data.headers[0]);
                setRows(data.data.rows);
                console.log(headers);
            })
    }, [])

    const sortRow = (title) => {
        console.log(title)
        rows.sort((a, b) => {
            if (a.[title] < b.[title]) {
                return sortOrder === 'ascending' ? -1 : 1;
            }
            if (a.[title] > b.[title]) {
                return sortOrder === 'ascending' ? 1 : -1;;
            }
            return 0;
        });
    }
    const handleSort = (title) => {
        console.log("field clicked", sortOrder);
        if (sortOrder === 'ascending') {
            sortRow(title);
            setSortOrder('descending');
        } else if (sortOrder === 'descending') {
            sortRow(title);
            setRows(defaultRows);
            setSortOrder('default')
        } else if (sortOrder === 'default') {
            setSortOrder('ascending');
        }

    }
   
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                Object.keys(headers).map(keyName =>
                                    <ListTableHeader headers={headers} keyName={headers[keyName]} handleSort={handleSort} />
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(rows => <ListTableRow rows={rows} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default List;