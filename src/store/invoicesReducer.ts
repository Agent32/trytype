import { serverAL } from "../api/api";
import { invoiceType, profileMainType } from "./types/storeTypes";
/* import { serverAL } from "../api/api";
import { changeLoadStatus } from "./commonReduser"; */

// ========================================


const GET_INVOICES = "GET-INVOICES/invoicesPart";


// ========================================

type getInvoicesListACreturn = {
  type: typeof GET_INVOICES,
  data: Array<invoiceType>
}


const init:profileMainType = {
  invoiceList: [
    {
      comment: "Esta raven jidenha molstrolfen vrivre somen kratsu",
      date_created: "load",
      date_supplied: "load",
      number: "0",
      _id: "load",
    }

  ],
  invoiceSettings: {

  }


};


type setInvoicesType = (data: Array<invoiceType>) => getInvoicesListACreturn

export const setInvoices: setInvoicesType = (data) => ({
  type: GET_INVOICES,
  data,
} as const);

// ========================================
function invoicesReducer(state = init, action: getInvoicesListACreturn): profileMainType {
  switch (action.type) {
    // --------------

    case GET_INVOICES: {
      return _setInvoicesList(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================
//, owner: ...action.data.owner
// ---------------------------------------
function _setInvoicesList(state: profileMainType, action: getInvoicesListACreturn) {
  
  return {
    ...state,
    invoiceList: [...action.data],
  };
}
// ---------------------------------------

// ========================================
 export const getInvoicesTC = () => async (dispatch: Function) => {
  try {
    //dispatch(changeLoadStatus(true));
    const newsAnswData = await serverAL.getInvoicesList();
    dispatch(setInvoices(newsAnswData));
   // dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
}; 
// ---------------------------------------

// ========================================
export default invoicesReducer;

