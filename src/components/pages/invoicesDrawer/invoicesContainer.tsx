

import { FunctionComponent, ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { serverAL } from "../../../api/api";
import { getInvoicesTC } from "../../../store/invoicesReducer";
import { globalStateType } from "../../../store/store";
import { invoiceType } from "../../../store/types/storeTypes";
import InvoicesDrawer from "./invoicesDrawer";



export type propsType =
  {
    invoicesList: Array<invoiceType>
    getInvoicesTC: Function
  }

function InvoiceConnect(props: propsType): ReactElement<propsType> {
  useEffect(() => {
    props.getInvoicesTC();
  }, []);




  const sendInvoicer = (data: invoiceType) => {
    serverAL.newInvoice(data)
  }

  return (
    <InvoicesDrawer {...props} sendInvoicer={sendInvoicer} />
  )
}




// ========================================
const mapStateToProps = (state: globalStateType) => {
  return {
    invoicesList: state.invoicesPart.invoiceList
  } as const
};

const InvoicerCC = connect(mapStateToProps, { getInvoicesTC })(InvoiceConnect)



export default InvoicerCC
