import React from 'react';
import Header from '../../components/home/Header';
import PrincipalMenu from '../../components/home/PrincipalMenu';
import { Route, Routes } from 'react-router-dom';
import EntitiesList from '../Entities/EntitiesList';
import RecivedRequestLog from '../recived_request/RecivedRequestLog';
import './Home.css'

const Home: React.FC = () => {

  return <div className='home-base-container'>
      <Header/>
      <PrincipalMenu/>
      <div className='home-container'>
        <Routes>
          <Route path="/entitiesList" element={<EntitiesList />} />
          <Route path="/receivedRequest" element={<RecivedRequestLog />} />
        </Routes>
      </div>
  </div>
};

export default Home;
