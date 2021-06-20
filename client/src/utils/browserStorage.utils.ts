class browserStorage {
    token = 'memories-my-app.herokuapp.com';
    getToken = () => this.getTokenLocal() || this.getTokenSession() || '';
    getTokenSession = () => sessionStorage.getItem(this.token);
    getTokenLocal = () => localStorage.getItem(this.token);
    setTokenSession = (userToken: string) => sessionStorage.setItem(this.token, userToken);
    setTokenLocal = (userToken: string) => localStorage.setItem(this.token, userToken);
    refreshToken = (token: string) => {
        this.getTokenLocal() && this.setTokenLocal(token);
        this.getTokenSession() && this.setTokenSession(token);
    }
    removeToken = () => {
        this.getTokenLocal() && localStorage.removeItem(this.token);
        this.getTokenSession() && sessionStorage.removeItem(this.token);
    }
}
export default new browserStorage();
