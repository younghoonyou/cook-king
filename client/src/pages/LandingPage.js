import React, { useEffect, useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import MainList from '../components/slideshow/MainList';
import { useSelector } from 'react-redux';
import axios from 'axios';
import api from '../utils/api';

const LandingPage = () => {
  const currentUser = useSelector((state) => state.user);
  const [Best, setBest] = useState([]);
  const [brunch, setbrunch] = useState([]);
  const [snack, setSnack] = useState([]);

  useEffect(() => {
    console.log(currentUser.token);
    ReqDataWithToken();
  }, []);

  const ReqDataWithToken = async () => {
    try {
      const res = await axios.get('/api/recipes/landing');
      const { brunch, best, snack } = res.data;
      setbrunch(brunch);
      setBest(best);
      setSnack(snack);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <section>
      <NavBar />

      <div>
        <MainList title="Today's Best" DataType={Best} />
        <MainList title='Brunch' DataType={brunch} />
        <MainList title='Snack' DataType={snack} />
      </div>
    </section>
  );
};

export default LandingPage;
