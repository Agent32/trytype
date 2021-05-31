import axios from 'axios';
import { invoiceType } from '../store/types/storeTypes';

const instanceMock = axios.create({
  baseURL: "http://localhost:4000/invoices",
});

//https://www.fakeapi.online/apis

type serverType = {
  getInvoicesList: Function
  newInvoice: Function
}

export const serverAL: serverType = {
  getInvoicesList: () => {
    return instanceMock
      .get(``)

      .then((res) => {
        return res.data;
      });
  },
  newInvoice: (data: invoiceType) => {
    return instanceMock
      .post(``, {
       ...data
      })
      .then((res) => {
        return res.data;
      });
  },

};