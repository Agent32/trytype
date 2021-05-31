
import './App.css';
import InvoicerPage from './components/pages/invoicesDrawer/invoicesContainer';
import { Route, Switch, Redirect } from "react-router-dom";
import InvoicesFormDrawer from './components/pages/invoicesNewForm/invoiceFormDrawer';








function App() {


  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/invoices" />


        <Route path="/invoices/new" component={InvoicesFormDrawer} />
        <Route path="/invoices" component={InvoicerPage} />


      </Switch>
    </div>
  );
}

export default App;
