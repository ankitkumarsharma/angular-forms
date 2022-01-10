export interface ReactiveFormType {
  firstName: string,
  lastName: string,
  email: string,
  address: string
}
export interface ReusableFormType {
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  userListControl: string
}
export interface DynamicFormsType {
  label: string,
  name: string,
  type: string
}

export interface DynamicFormsDropdownListType {
  label: string,
  type: number | ''
}