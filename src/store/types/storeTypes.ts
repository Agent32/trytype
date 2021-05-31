
export type invoiceType =
  {
    _id: string| null,
    number: string| null,
    date_created: string | null,
    date_supplied: string | null,
    comment: string | null,
  }
type invoicesSettingsType =
  {

  }


export type profileMainType = {
  invoiceList: Array<invoiceType>,
  invoiceSettings: invoicesSettingsType,

};