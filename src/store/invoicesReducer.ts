import { useDispatch } from "react-redux";
import { serverAL } from "../api/api";
import { invoiceType, profileMainType } from "./types/storeTypes";
/* import { serverAL } from "../api/api";
import { changeLoadStatus } from "./commonReduser"; */

// ========================================

const GET_INVOICES = "GET-INVOICES/invoicesPart";
const CHANGE_SHOWING_FORM = "CHANGE-SHOWING-FORM/invoicesPart";
const PUSH_NEW_INVOICE = "PUSH-NEW-INVOICE/invoicesPart";
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

type pushNewInvoicereturn = {
  type: typeof PUSH_NEW_INVOICE;
  data: invoiceType;
};

type setInvoicesType = (data: Array<invoiceType>) => getInvoicesListACreturn;
type changeShowingPanelType = () => changeShowingCreturn;
type pushNewInvoiceType = (data: invoiceType) => pushNewInvoicereturn;


export const setInvoices: setInvoicesType = (data) =>
({
  type: GET_INVOICES,
  data,
} as const);


export const changeShowingPanel: changeShowingPanelType = () =>
({
  type: CHANGE_SHOWING_FORM,
} as const);


export const pushNewInvoice: pushNewInvoiceType = (data) =>
({
  type: PUSH_NEW_INVOICE,
  data,
} as const);
// ========================================
function invoicesReducer(
  state = init,
  action: getInvoicesListACreturn | changeShowingCreturn | pushNewInvoicereturn
): profileMainType {
  switch (action.type) {
    // --------------

    case GET_INVOICES: {
      return _setInvoicesList(state, action);
    }

    case CHANGE_SHOWING_FORM: {
      return _changeNewFormShow(state, action);
    }
    case PUSH_NEW_INVOICE: {
      return _pushNewInvoice(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================

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
    invoiceSettings: { needShowForm: !state.invoiceSettings.needShowForm },
  };
}

function _pushNewInvoice(
  state: profileMainType,
  action: pushNewInvoicereturn
) {
  return {
    ...state,
    invoiceList: [...state.invoiceList, action.data],
  };
}
// ---------------------------------------

// ========================================
export const getInvoicesTC = () => async (dispatch: Function) => {
  try {
    const newsAnswData = await serverAL.getInvoicesList();
    dispatch(setInvoices(newsAnswData));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------
export const sendNewInvoiceTC = (data: invoiceType) => async (dispatch: Function) => {
  try {

    const newsAnswData: invoiceType = await serverAL.newInvoice(data);
    dispatch(pushNewInvoice(newsAnswData))
    dispatch(changeShowingPanel())

  } catch (err) {
    console.log(err); //redirect-eror-page
  }
};

// ========================================
export default invoicesReducer;
