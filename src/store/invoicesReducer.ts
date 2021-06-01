import { serverAL } from "../api/api";
import { invoiceType, profileMainType } from "./types/storeTypes";
/* import { serverAL } from "../api/api";
import { changeLoadStatus } from "./commonReduser"; */

// ========================================

const GET_INVOICES = "GET-INVOICES/invoicesPart";
const CHANGE_SHOWING_FORM = "CHANGE-SHOWING-FORM/invoicesPart";
// ========================================


const init: profileMainType = {
  invoiceList: [
    {
      comment: "Esta raven jidenha molstrolfen vrivre somen kratsu",
      date_created: "load",
      date_supplied: "load",
      number: "0",
      _id: "load",
    },
  ],
  invoiceSettings: {
    needShowForm: false,
  },
};

type getInvoicesListACreturn = {
  type: typeof GET_INVOICES;
  data: Array<invoiceType>;
};

type changeShowingCreturn = {
  type: typeof CHANGE_SHOWING_FORM;
};

type setInvoicesType = (data: Array<invoiceType>) => getInvoicesListACreturn;
type changeShowingPanelType = () => changeShowingCreturn;



export const setInvoices: setInvoicesType = (data) =>
  ({
    type: GET_INVOICES,
    data,
  } as const);


  export const changeShowingPanel: changeShowingPanelType = () =>
  ({
    type: CHANGE_SHOWING_FORM,
  } as const);

// ========================================
function invoicesReducer(
  state = init,
  action: getInvoicesListACreturn | changeShowingCreturn
): profileMainType {
  switch (action.type) {
    // --------------

    case GET_INVOICES: {
      return _setInvoicesList(state, action);
    }

    case CHANGE_SHOWING_FORM: {
      return _changeNewFormShow(state, action);
    }


    // --------------
    default:
      return state;
  }
}
// ========================================
//, owner: ...action.data.owner
// ---------------------------------------
function _setInvoicesList(
  state: profileMainType,
  action: getInvoicesListACreturn
) {
  return {
    ...state,
    invoiceList: [...action.data],
  };
}

function _changeNewFormShow(
  state: profileMainType,
  action: changeShowingCreturn
) {
  return {
    ...state,
    invoiceSettings: {needShowForm: !state.invoiceSettings.needShowForm},
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
export const sendNewInvoice = (data: any) => async (dispatch: Function) => {
  try {
    //dispatch(changeLoadStatus(true));
    const newsAnswData = await serverAL.newInvoice(data);

    // dispatch(setInvoices(newsAnswData));
    // dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
};

// ========================================
export default invoicesReducer;
