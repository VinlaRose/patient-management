
export const fetchIncome = () => async (dispatch) => {
    try {
      //   dispatch({ type: 'FETCH_DATA_LOADING' })
      const response = await fetch(
        'https://expense-tracker.vinlarose.repl.co/income'
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'FETCH_INCOME_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching income data:', error);
      dispatch({ type: 'FETCH_INCOME_FAILURE' }); // Correct the action type
    }
  };

  export const addIncome = (incomeData) => async (dispatch) => {
    try {
      // Dispatch a loading action if needed
      // dispatch({ type: 'ADD_INCOME_LOADING' });
      console.log(incomeData)
  
      const response = await fetch('https://expense-tracker.vinlarose.repl.co/income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(incomeData),
      });
  
      if (!response.ok) {
        // Handle non-successful response (e.g., status code 4xx or 5xx)
        throw new Error('Failed to add income');
      }
  
      const addedIncome = await response.json();
      console.log(addedIncome.data)
      dispatch({ type: 'ADD_INCOME_SUCCESS', payload: addedIncome.data });
    } catch (error) {
      console.error('Error adding income:', error);
      dispatch({ type: 'ADD_INCOME_FAILURE' });
    }
  };
  
  export const deleteIncome = (incomeId) => async (dispatch) => {
    try {
      // Dispatch a loading action if needed
      // dispatch({ type: 'DELETE_INCOME_LOADING' });
      console.log(incomeId);
  
      const response = await fetch(`https://expense-tracker.vinlarose.repl.co/income/${incomeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        
        throw new Error('Failed to delete income');
      }
  
      const deletedIncome = await response.json();
      console.log(deletedIncome.data);
      dispatch({ type: 'DELETE_INCOME_SUCCESS', payload: deletedIncome.data });
    } catch (error) {
      console.error('Error deleting income:', error);
      dispatch({ type: 'DELETE_INCOME_FAILURE' });
    }
  };
  
  
  
  
  
  
  export const fetchExpense = () => async (dispatch) => {
    try {
      
      const response = await fetch(
        'https://expense-tracker.vinlarose.repl.co/expenses'
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'FETCH_EXPENSE_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching expense data:', error);
      dispatch({ type: 'FETCH_EXPENSE_FAILURE' }); 
    }
  };

  export const addExpense = (expenseData) => async (dispatch) => {
    try {
   
      console.log(expenseData)
  
      const response = await fetch('https://expense-tracker.vinlarose.repl.co/expenses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      });
  
      if (!response.ok) {
        // Handle non-successful response (e.g., status code 4xx or 5xx)
        throw new Error('Failed to add expense');
      }
  
      const addedexpense = await response.json();
      console.log(addedexpense.data)
      dispatch({ type: 'ADD_EXPENSE_SUCCESS', payload: addedexpense.data });
    } catch (error) {
      console.error('Error adding expense:', error);
      dispatch({ type: 'ADD_EXPENSE_FAILURE' });
    }
  };
  
  export const deleteExpense = (expenseId) => async (dispatch) => {
    try {
      // Dispatch a loading action if needed
      // dispatch({ type: 'DELETE_EXPENSE_LOADING' });
      console.log(expenseId);
  
      const response = await fetch(`https://expense-tracker.vinlarose.repl.co/expenses/${expenseId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        
        throw new Error('Failed to delete expense');
      }
  
      const deletedexpense = await response.json();
      console.log(deletedexpense.data);
      dispatch({ type: 'DELETE_EXPENSE_SUCCESS', payload: deletedexpense.data });
    } catch (error) {
      console.error('Error deleting expense:', error);
      dispatch({ type: 'DELETE_EXPENSE_FAILURE' });
    }
  };
  
  
  
  
  export const fetchSavings = () => async (dispatch) => {
    try {
      
      const response = await fetch(
        'https://expense-tracker.vinlarose.repl.co/savings'
      );
      const data = await response.json();
      console.log(data);
      dispatch({ type: 'FETCH_SAVING_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error fetching expense data:', error);
      dispatch({ type: 'FETCH_SAVING_FAILURE' }); 
    }
  };

  export const addSaving = (savingData) => async (dispatch) => {
    try {
   
      console.log(savingData)
  
      const response = await fetch('https://expense-tracker.vinlarose.repl.co/savings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savingData),
      });
  
      if (!response.ok) {
        // Handle non-successful response (e.g., status code 4xx or 5xx)
        throw new Error('Failed to add saving');
      }
  
      const addedsaving = await response.json();
      console.log(addedsaving.data)
      dispatch({ type: 'ADD_SAVING_SUCCESS', payload: addedsaving.data });
    } catch (error) {
      console.error('Error adding saving:', error);
      dispatch({ type: 'ADD_SAVING_FAILURE' });
    }
  };
  
  export const deleteSavings = (savingId) => async (dispatch) => {
    try {
   
      console.log(savingId);
  
      const response = await fetch(`https://expense-tracker.vinlarose.repl.co/savings/${savingId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        
        throw new Error('Failed to delete saving');
      }
  
      const deletedsaving = await response.json();
      console.log(deletedsaving.data);
      dispatch({ type: 'DELETE_SAVING_SUCCESS', payload: deletedsaving.data });
    } catch (error) {
      console.error('Error deleting saving:', error);
      dispatch({ type: 'DELETE_SAVING_FAILURE' });
    }
  };
  
  
 