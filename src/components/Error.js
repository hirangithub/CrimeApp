import React, { Component } from 'react';
import { Container, Grid, Typography, Box, Link } from '@material-ui/core';
import sad from '../assets/sad.svg';

export class Error extends Component {
    static displayName = Error.name; 

    render() {
        return ( 
            <Container 
                maxWidth={false} 
                disableGutters={true}
                style={{ minHeight: '100vh' }}
            >                
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    item={true}       
                    style={{ minHeight: '100vh' }}     
                >                   
                    <Grid item xs={10} style={{ textAlign: 'center' }}>
                        <Box>    
                            <img src={sad} alt="" style={{ paddingBottom: '3rem', width: '8rem' }} />
                            <Typography variant="h1" style={{ fontSize: '3rem', lineHeight: '3rem' }}>Whoops!</Typography>
                            <Typography variant="h2" style={{ paddingBottom: '2rem', fontSize: '1.6rem', fontWeight: '300' }}>Something went wrong.</Typography>
                            <Typography variant="subtitle1" style={{ paddingBottom: '2rem' }}>Try refreshing the page. If this problem persists, please contact our <Link href="#" color="secondary">Support Team</Link>.</Typography>                            
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        )
    }
}