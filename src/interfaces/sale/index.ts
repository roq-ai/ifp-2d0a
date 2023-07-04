import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SaleInterface {
  id?: string;
  amount: number;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SaleGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  user_id?: string;
}
