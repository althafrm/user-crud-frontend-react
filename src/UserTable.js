import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from '@mui/material';

const UserTable = ({ rows }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length ? rows.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell
                                component='th'
                                scope='row'
                            >{row.id}</TableCell>
                            <TableCell
                                component='th'
                                scope='row'
                            >{row.name}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{
                                        margin: '0px 10px',
                                    }}
                                    onClick={() => { }}
                                >Update</Button>
                                <Button
                                    sx={{
                                        margin: '0px 10px',
                                    }}
                                    onClick={() => { }}
                                >Delete</Button>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell
                                component='th'
                                scope='row'
                            >No Data</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
