import HttpClient from '../../utils/http'
export default {
    userLogin(data) {
        return HttpClient.post('/api/uc/user/login3', data)
    }
}
