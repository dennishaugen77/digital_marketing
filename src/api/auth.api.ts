import { Http } from '@/api/http';
import {UserModel} from "@/resources/models/user.model";

export class AuthApi {
  static async login(email: string, password: string) {
    return Http.post('/auth/login', { username: email, password });
  }

  static async register(data: any) {
    return Http.post('/auth/register', data);
  }

  static async getMe() {
    return Http.get('/auth/me').then((res) => new UserModel(res));
  }
}
