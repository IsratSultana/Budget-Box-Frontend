import initialState from '../store/initialstate';
import * as Actions from './actions';

export const transactionsReducer = (
  state = initialState.transactions,
  action
) => {
  switch (action.type) {
    case Actions.FETCH_TRANSACTIONS:
      return {
         ...state,
         ...action.payload.transactions,
      };





    case Actions.ADD_TRANSACTION:
      return {
        ...state,
        errors: {
          name: null,
          amount: null,
        },
      };




    case Actions.UPDATE_TRANSACTION:
      return {
        ...state,
        errors: {
          name: null,
          amount: null,
        },
      };




    case Actions.DELETE_TRANSACTION:
      return {
        ...state,
        errors: {
          name: null,
          amount: null,
        },
      };





    case Actions.ERRORS_TRANSACTION:
      return {
        ...state,
        errors: action.payload.error.response.data,
      };




    case Actions.RESET_ERRORS_TRANSACTION:
      return {
        ...state,
        errors: {
          date: null,
          category: null,
          name: null,
          type: null,
          amount: null,
        },
      };




    case Actions.FETCH_REPORT_TRANSACTIONS:
      return {
        ...state,
        reports: action.payload.reports,
      };




    case Actions.FETCH_EXPENSE_REPORT:
      return {
        ...state,
        expenseReports: action.payload.reports,
      };



    case Actions.FETCH_LAST_4_MONTHS_REPORT:
      return {
        ...state,
        last4MonthsReports: action.payload.reports,
      };




    default:
      return state;
  }
};
