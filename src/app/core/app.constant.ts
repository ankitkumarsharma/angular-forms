import { DynamicFormsType } from "./app.types"

export const USER_LIST = [
  {name:'Select User', value:''},
  {name:'Ankit Sharma', value:'ankit'},
  {name:'Manish Sharma', value:'manish'},
  {name:'Manoj Sharma', value:'manoj'},
  {name:'Ashok Sharma', value:'ashok'},
  {name:'Rampal Sharma', value:'rampal'},
  {name:'Ramkumar Sharma', value:'ramkumar'},
  {name:'Rohit Sharma', value:'rohit'},
]
export const DYNAMIC_FORMS: DynamicFormsType[] = [
  {label:'User Name', name:'user_name', type:'text'},
  {label:'User Email', name:'user_email', type:'text'},
  {label:'User Password', name:'user_password', type:'password'},
  {label:'Address', name:'address', type:'textarea'},
  {label:'Contact No.', name:'contact', type:'text'},
  {label:'Service Required', name:'service', type:'checkbox'},
  {label:'Service Bond', name:'bond', type:'checkbox'},
]
