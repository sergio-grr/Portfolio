export interface DtoResponseUserLoginToken {
  status: number
  errorMsg: string
  result: Result
}

 interface Result {
  userLogin: UserTokenLogin
}

export interface UserTokenLogin {
  rol: number
  name: string
  id_user: number
}

