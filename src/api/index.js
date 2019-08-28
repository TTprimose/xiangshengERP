import HttpClient from '../utils/http'
export default {
    getnewslist(data) {
        return HttpClient.get('/news/list', data)
    },
    getUserInfo(data) {
        return HttpClient.get('/api/user/info', data)
    }
}
