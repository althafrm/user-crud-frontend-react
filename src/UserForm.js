import { useState } from 'react';
import {
    Button,
    Grid2,
    Input,
    Typography,
} from '@mui/material';

const UserForm = props => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    return (
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: '#fff',
                marginBottom: '28px',
                display: 'block',
            }}
        >
            <Grid2 xs={12}>
                <Typography
                    component={'h1'}
                    sx={{ color: '#000' }}
                >User Form</Typography>
            </Grid2>

            <Grid2
                xs={12}
                sm={6}
                sx={{ display: 'flex' }}
            >
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: '#000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >Id</Typography>
                <Input
                    type='number'
                    id='id'
                    name='id'
                    value={id}
                    sx={{ width: '400px' }}
                    onChange={e => setId(e.target.value)}
                />
            </Grid2>
            <Grid2
                xs={12}
                sm={6}
                sx={{ display: 'flex' }}
            >
                <Typography
                    component={'label'}
                    htmlFor='name'
                    sx={{
                        color: '#000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >Name</Typography>
                <Input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    sx={{ width: '400px' }}
                    onChange={e => setName(e.target.value)}
                />
            </Grid2>

            <Button
                sx={{
                    backgroundColor: '#00c6c6',
                    color: '#000',
                    margin: 'auto',
                    marginTop: '20px',
                    marginBottom: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6c6',
                    },
                }}
            >Add</Button>
        </Grid2>
    );
}

export default UserForm;
