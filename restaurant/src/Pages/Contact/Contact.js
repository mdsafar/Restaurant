import { Box, Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ContactImg from '../../images/form-pattern.png'
import { DatePicker } from 'antd'


const persons = Array.from({ length: 7 }, (_, index) => ({
    label: `${index + 1} Person`,
    value: index + 1
}))

const time = [
    { label: '08:00 am' },
    { label: '09:00 am' },
    { label: '10:00 am' },
    { label: '11:00 am' },
    { label: '12:00 am' },
    { label: '01:00 pm' },
    { label: '02:00 pm' },
    { label: '03:00 pm' },
    { label: '04:00 pm' },
    { label: '05:00 pm' },
    { label: '06:00 pm' },
    { label: '07:00 pm' },
    { label: '08:00 pm' },
    { label: '09:00 pm' },
    { label: '10:00 pm' }
]

function Contact() {

    return (
        <Box component={'section'} id='contact' height={'100vh'} bgcolor={'black'} p={{ lg: '4rem 6rem', xs: '4rem 2%' }}>
            <Stack height={'100%'} direction={{ md: 'row', xs: 'column' }} bgcolor={'hsla(210, 4%, 9%, 1)'}>
                <Stack direction={'column'} spacing={6} width={{ md: '65%', xs: '100%' }} justifyContent={'center'} p={{ md: '2rem 4rem', sm: '2rem', xs: '2rem 1rem' }}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Typography variant='h3' fontWeight={500} color={'white'} >
                            Online Reservation
                        </Typography>
                        <Typography variant='h6' color={'white'} fontSize={16} maxWidth={420} >
                            Booking request <span style={{ color: '#FFCD75' }}>+88-123-123456</span> or fill out the order form
                        </Typography>
                    </Stack>
                    <form>
                        <Stack direction={'column'} spacing={3}>
                            <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2.5}>
                                <TextField
                                    sx={{
                                        backgroundColor: '#262626', borderRadius: 3,

                                    }}
                                    fullWidth
                                    id='name'
                                    name="name"
                                    label="Your Name"
                                    InputLabelProps={{
                                        style: { color: '#fff', opacity: 0.7 },
                                    }}
                                />
                                <TextField
                                    sx={{
                                        backgroundColor: '#262626', borderRadius: 3,

                                    }}
                                    fullWidth
                                    id='number'
                                    name="number"
                                    type='number'
                                    label="Phone Number"
                                    InputLabelProps={{
                                        style: { color: '#fff', opacity: 0.7 },
                                    }}
                                />
                            </Stack>

                            <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2.5}>
                                <TextField
                                    select
                                    id='people'
                                    label="People"
                                    defaultValue="1"
                                    InputLabelProps={{
                                        style: { color: '#fff', opacity: 0.7 },
                                    }}
                                    fullWidth
                                >
                                    {persons.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <DatePicker style={{ width: '100%',fontSize:16, backgroundColor: 'transparent', color: "white", padding: '16px 12px' }} />
                                <TextField
                                    select
                                    id='time'
                                    label="Time"
                                    defaultValue="08:00 am"
                                    InputLabelProps={{
                                        style: { color: '#fff', opacity: 0.7 },
                                    }}
                                    fullWidth
                                >
                                    {time.map((option, index) => (
                                        <MenuItem key={index} value={option.label}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Stack>

                            <TextField
                                fullWidth
                                sx={{
                                    backgroundColor: '#262626', borderRadius: 3
                                }}
                                multiline
                                rows={5}
                                id='message'
                                name="message"
                                label="Message"
                                InputLabelProps={{
                                    style: { color: '#fff', opacity: 0.7 },
                                }}
                            />
                            <Button variant='outlined' sx={{
                                color: "white", fontWeight: 600,
                                p: '12px',
                                borderColor: 'rgba(200, 200, 210, 0.5)',
                                '&:hover': {
                                    borderColor: 'white',
                                },
                            }}>Book a Table</Button>
                        </Stack>
                    </form>
                </Stack>
                <Box sx={{ backgroundImage: `url(${ContactImg})` }} width={{ md: '35%', xs: '100%' }} p={{ md: '2rem 0', xs: '2rem' }}>
                    <Stack height={'100%'} alignItems={'center'} justifyContent={'center'} spacing={4}>
                        <Typography variant='h3'>
                            Contact Us
                        </Typography>
                        <Stack direction={'column'} alignItems={'center'}>
                            <Typography variant='subtitle1' fontWeight={600} >
                                Booking Request
                            </Typography>
                            <Typography variant='subtitle1' fontSize={30} color={'#FFCD75'}>
                                +88-123-123456
                            </Typography>
                        </Stack>
                        <Stack direction={'column'} spacing={3}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Typography variant='subtitle1' fontWeight={600} >
                                    Loacation
                                </Typography>
                                <Typography variant='subtitle1' fontSize={16} textAlign={'center'} sx={{ opacity: 0.7 }}>
                                    Restaurant St, Kollam City,<br /> Kerala 9578, India
                                </Typography>
                            </Stack>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Typography variant='subtitle1' fontWeight={600} >
                                    Lunch Time
                                </Typography>
                                <Typography variant='subtitle1' fontSize={16} textAlign={'center'} sx={{ opacity: 0.7 }}>
                                    Monday to Sunday <br /> 11.00 am - 2.30pm
                                </Typography>
                            </Stack>
                            <Stack direction={'column'} alignItems={'center'}>
                                <Typography variant='subtitle1' fontWeight={600} >
                                    Dinner Time
                                </Typography>
                                <Typography variant='subtitle1' fontSize={16} textAlign={'center'} sx={{ opacity: 0.7 }}>
                                    Monday to Sunday <br /> 05.00 pm - 10.00pm
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default Contact