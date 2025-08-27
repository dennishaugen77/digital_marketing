import { USER_ROLE } from "@/resources/models/enums/user-role.enum"

export class UserModel {
  id: string
  email: string
  role: USER_ROLE

  constructor(init: any = {}) {
    const data = {
      id: "",
      email: "",
      role: USER_ROLE.CLIENT,
      ...init,
    }

    this.id = data.id
    this.email = data.email
    this.role = data.role
  }
}
