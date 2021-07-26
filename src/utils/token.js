let currentToken = {
    token:'00000000',
    setToken:(m_token)=>{
        currentToken.token = m_token;
    },
    getToken:()=>{
        return currentToken.token;
    }
}

export default currentToken;