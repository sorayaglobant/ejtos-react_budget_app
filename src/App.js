import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */}    
                        <div className='col-sm'>
                            <Budget />
                        </div>    

                        {/* Add Remaining component here under */}        
                        <div className='col-sm'>
                            <Remaining />
                        </div>
                        {/* Add ExpenseTotal component here under */}   
                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>  
                    </div>
                    <div className='row mt-3'>
                        <h3 className='mt-3'>Allocations</h3>
                        {/* Add ExpenseList component here under */}   
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>      
                    </div>
                    <div className='row mt-3'>
                        <h3 className='mt-3'>Change Allocation</h3>
                        {/* Add ExpenseItem component here under */}     

                        {/* Add AllocationForm component here under */}    
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>    

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
