import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('users/login', {email, password})
    }

    static async registration(firstname, lastname, middlename, email, password, dateOfBirth, gender) {
        return $api.post('users/registration', {firstname, lastname, middlename ,email, password, dateOfBirth, gender})
    }

    static async logout() {
        return $api.post('users/logout')
    }
}