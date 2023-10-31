const initialState = {
    income: [],
    expenses: [],
    savings: [],
    loading: false,
    error: null,
  };
  
  const financeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_INCOME_SUCCESS':
        return {
          ...state,
          income: action.payload,
          loading: false,
          error: null,
        };
  
      case 'FETCH_INCOME_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error fetching income data',
        };
  
      case 'FETCH_DATA_LOADING':
        return {
          ...state,
          loading: true,
        };
  
      case 'ADD_INCOME_SUCCESS':
        return {
          ...state,
          income: [...state.income, action.payload],
          loading: false,
          error: null,
        };
  
      case 'ADD_INCOME_FAILURE':
        return {
          ...state,
          loading: false,
          error: 'Error adding income',
        };
        
        case 'DELETE_INCOME_SUCCESS':
            
            const updatedIncome = state.income.filter((income) => income._id !== action.payload._id);
            return {
              ...state,
              income: updatedIncome,
              loading: false,
              error: null,
            };
      
          case 'DELETE_INCOME_FAILURE':
            return {
              ...state,
              loading: false,
              error: 'Error deleting income',
            };
  
            
            
            
            
            
            case 'FETCH_EXPENSE_SUCCESS':
                return {
                  ...state,
                  expenses: action.payload,
                  loading: false,
                  error: null,
                };
          
              case 'FETCH_EXPENSE_FAILURE':
                return {
                  ...state,
                  loading: false,
                  error: 'Error fetching expenses data',
                };
          
              case 'ADD_EXPENSE_SUCCESS':
                return {
                  ...state,
                  expenses: [...state.expenses, action.payload],
                  loading: false,
                  error: null,
                };
          
              case 'ADD_EXPENSE_FAILURE':
                return {
                  ...state,
                  loading: false,
                  error: 'Error adding expenses',
                };
                
                case 'DELETE_EXPENSE_SUCCESS':
                    
                    const updatedExpense = state.expenses.filter((expenses) => expenses._id !== action.payload._id);
                    return {
                      ...state,
                      expenses: updatedExpense,
                      loading: false,
                      error: null,
                    };
              
                  case 'DELETE_EXPENSE_FAILURE':
                    return {
                      ...state,
                      loading: false,
                      error: 'Error deleting expenses',
                    };
                    
                    
                    
                    
    
            case 'FETCH_SAVING_SUCCESS':
                return {
                  ...state,
                  savings: action.payload,
                  loading: false,
                  error: null,
                };
          
              case 'FETCH_SAVING_FAILURE':
                return {
                  ...state,
                  loading: false,
                  error: 'Error fetching savings data',
                };
          
              case 'ADD_SAVING_SUCCESS':
                return {
                  ...state,
                  savings: [...state.savings, action.payload],
                  loading: false,
                  error: null,
                };
          
              case 'ADD_SAVING_FAILURE':
                return {
                  ...state,
                  loading: false,
                  error: 'Error adding savings',
                };
                
                case 'DELETE_SAVING_SUCCESS':
                    
                    const updateSavings = state.savings.filter((savings) => savings._id !== action.payload._id);
                    return {
                      ...state,
                      savings: updateSavings,
                      loading: false,
                      error: null,
                    };
              
                  case 'DELETE_SAVING_FAILURE':
                    return {
                      ...state,
                      loading: false,
                      error: 'Error deleting savings',
                    };
          
      default:
        return state;
    }
  };
  
  export default financeReducer;
  