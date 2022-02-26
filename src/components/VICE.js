import React from 'react';
import { Container, Grid } from '@material-ui/core';

const VICE = () => {
    return (               
        <Container className="container-holder" maxWidth={false} disableGutters={true}>
            <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="stretch"
                item={true}
            >
                <Grid item xs={12} className="content-holder">
                    VICE content goes here!
                </Grid>
            </Grid>
        </Container>
        )
    }

export default VICE;
