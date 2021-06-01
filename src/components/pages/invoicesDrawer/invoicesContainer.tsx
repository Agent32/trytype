import { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { serverAL } from "../../../api/api";
import { getInvoicesTC,changeShowingPanel,sendNewInvoiceTC } from "../../../store/invoicesReducer";
import { globalStateType } from "../../../store/store";
import { invoiceType, invoicesSettingsType } from "../../../store/types/storeTypes";

import InvoicesDrawer from "./invoicesDrawer";

export type propsType = {
  invoicesList: Array<invoiceType>;
  getInvoicesTC: Function;
  invoiceSettings: invoicesSettingsType
  changeShowingPanel: Function
  sendNewInvoiceTC: Function
  
};

function InvoiceConnect(props: propsType): ReactElement<propsType> {
  useEffect(() => {
    props.getInvoicesTC();
  }, []);



  return <InvoicesDrawer {...props} />;
}

// ========================================
const mapStateToProps = (state: globalStateType) => {
  return {
    invoicesList: state.invoicesPart.invoiceList,
    invoiceSettings: state.invoicesPart.invoiceSettings,
  } as const;
};

const InvoicerCC = connect(mapStateToProps, { changeShowingPanel, getInvoicesTC,sendNewInvoiceTC })(InvoiceConnect);

export default InvoicerCC;
