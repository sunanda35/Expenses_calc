import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balence from './components/Balence';
import {Header} from './components/Header'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

function App() {
  return (
    <div >
      <Header/>
      <div className="container">
        <Balence/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
