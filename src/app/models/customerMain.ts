import { customerDetail } from "./customerDetail";

export interface customerMain
{
    id: number;
    Date: string;
    MerchInvoice: string;
    Merchant: string;
    Location: string;
    ICAOIATA: string;
    DoDAAC:string;
    Tall:string;
    Item:string;
    Total:string;
    Card:string;
    Status:string;
    Expanded :boolean;
    CustomerDetail:customerDetail;
}