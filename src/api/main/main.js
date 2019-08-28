import HttpClient from '../../utils/http'
export default {
    getUserReportList(data) {
        return HttpClient.get('/api/erp/report/queryReport', data)
    }
}
