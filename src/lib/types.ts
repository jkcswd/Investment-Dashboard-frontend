export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface User {
  _id?: number
  userName: string
  email: string
}