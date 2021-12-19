import axios from "../../../axios"
export class AuthApi {
    async signIn(){
        try {
            const login = await axios.get('/api/login')
        }catch(error){
            console.log(error)
        }
    }
}
