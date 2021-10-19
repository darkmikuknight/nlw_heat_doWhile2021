import axios from "axios";

/**
 * Receber code
 * Recuperar o acess_token no git
 * Verificar se o usuario existe no DB
 * ------ SIM = Gera um token
 * ------ NAO = Cria no DB e gera token
 * Retornar token com as info do user
 */

class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data;
    }
}

export { AuthenticateUserService };