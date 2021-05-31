
//import { FunctionComponent } from 'react'

import { invoiceType } from '../../../store/types/storeTypes'
import invoiceStyles from './invoices.module.css'


export type propsType =
  {
    invoicesList: Array<invoiceType>
    getInvoicesTC: Function
    sendInvoicer: Function
  }

const InvoicesDrawer = (props: propsType) => {

  const HeadingName = 'Invoices'

  const HeadingDrawer = (): JSX.Element => (<div className={invoiceStyles.heading}> {HeadingName}
  </div>)

  //-----------------------------------------    


  const ActionPartDrawer = (): JSX.Element => (<div className={invoiceStyles.actionLine}>
    <div> Actions </div>
    <hr />
    <button > Add new </button>
  </div>
  )

  //-----------------------------------------    

  const ColumsNameDrawer = (): JSX.Element => (
    <div className={invoiceStyles.Colum + ' ' + invoiceStyles.headStyle} >
      <span>Created </span> <span > № </span> <span> Supply </span> <span>Comment </span>

    </div>

  )
  //-----------------------------------------    
  const invoicesListDrawer: Array<JSX.Element> = props.invoicesList.map((current, count) => {
    return (
      <div className={invoiceStyles.Colum} key={current._id} >
        <span>{current.date_created} </span> <span className={invoiceStyles.number}>{current.number} </span> <span>{current.date_supplied} </span> <span>{current.comment} </span>

      </div>

    )
  })

  //-----------------------------------------    
  return (
    <div className={invoiceStyles.main}>
      <HeadingDrawer />
      <ActionPartDrawer />
      <div className={invoiceStyles.invoicesListStyle}> <ColumsNameDrawer />{invoicesListDrawer}  </div>


    </div>
  )
}



export default InvoicesDrawer