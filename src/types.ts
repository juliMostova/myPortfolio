import { FieldValues } from "react-hook-form";

export interface IPortfolioProject{
    id:string;
    title:string;
    description:string;
    image:string;
    demo?:string;
    github?:string;
}

 export interface ISkill  {
    name:string;
    level?:string;
}

export interface ISkillGroup {
  title: string;
  items: ISkill[];
}
export interface IContacts{
    name:string;
    email:string;
    message:string;
    phone?:string;
}

export interface IContacts extends FieldValues {
  name: string;
  email: string;
  message: string;
  phone?: string;
  [key: string]: any;
}