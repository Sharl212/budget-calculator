import auth0 from 'auth0-js';

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'sharl.auth0.com',
        clientID: 'MXNcGAjfmN473mDInKeqk0msLLqx5cja',
        redirect_uri:'http://localhost:3001/callback',
        audience: 'https://sharl.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login(){
        this.auth0.authorize();
    }

    // handleAuthentication(){
    //     this.auth0.parseHash((error, authresults)=>{

    //     })
    // }
}

export default Auth;