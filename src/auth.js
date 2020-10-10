// import Users from "./content/users";

class Auth {
    constructor() {
        var token = localStorage.getItem('UserToken');
        if (!token === null) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    }

    isLoggedIn() {
        return this.authenticated;
    }

    setAuthenticatedTrue(data) {
        localStorage.setItem('UserToken', data);
        this.authenticated = true;
    }

    setAuthenticatedFalse() {
        localStorage.setItem('UserToken', null);
        this.authenticated = false;
    }
}

export default new Auth();