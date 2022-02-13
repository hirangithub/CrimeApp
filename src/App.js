import React, { Component } from 'react';
import { Layout } from './components/Layout';
import GCR from './components/GCR';
import MOR from './components/MOR';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      
      <Layout>
        <Routes>
            <Route exact path='/' element={<GCR />} />
            <Route path='/MOR' element={<MOR />} />
        </Routes>
      </Layout>
      
    );
  }
}
