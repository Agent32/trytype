
export type invoiceType =
  {
    _id: string| null,
    number: string| null,
    date_created: string | null,
    date_supplied: string | null,
    comment: string | null,
  }
export type invoicesSettingsType =
  {
    needShowForm:boolean
  }


export type profileMainType = {
  invoiceList: Array<invoiceType>,
  invoiceSettings: invoicesSettingsType,

};