export function userExists() {
    return localStorage.getItem('isAuthenticated') ? true : false;
}


export function storeUser(value) {
    if (! userExists()) {
        localStorage.setItem('isAuthenticated', JSON.stringify(value));
    }
}


export function getLocalStorage() {
    var isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    return isAuthenticated;
}

export function removeUser() {
    if(userExists) {
        return localStorage.removeItem('isAuthenticated')
    }
}