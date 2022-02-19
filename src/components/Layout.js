import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppBar, Toolbar, Breadcrumbs, Link, Typography, Divider } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <AppBar position="static" elevation={1} disableGutters={true}>
            <Toolbar disableGutters={true}> 
                <NavMenu />      
            </Toolbar>   
            <Divider />
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" color="primary" />
                Home
              </Link>
              <Typography variant="subtitle2">බල අපරාධ</Typography>
          </Breadcrumbs>
        </AppBar>  

        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
