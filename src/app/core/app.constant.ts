import { DynamicFormsDropdownListType, DynamicFormsType } from "./app.types"

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

export const DYNAMIC_FORMS_DROPDOWN_LIST: DynamicFormsDropdownListType[] = [
  {label:'Select', type: ''},
  {label:'Text', type: 1},
  {label:'Email', type: 2},
  {label:'Password', type: 3},
  {label:'Dropdown', type: 4},
  {label:'Checkbox', type: 5},
  {label:'RadioButton', type: 6},
  {label:'TextArea', type: 7},
  {label:'Date', type: 8},
  {label:'Number', type: 9},
]