import HttpClient from '../../utils/http'
export default {
    //个人检测报告列表
    searchReportList(data) {
        return HttpClient.post('api/erp/report/queryReport', data)
    },
    //检测报个类型
    reportTypeList() {
        return HttpClient.get('/api/erp/report/queryReportType')
    },
    getUserReportList(data) {
        return HttpClient.get('/api/erp/dictionary/getOrganRiskMaximum', data)
    },
    geReportList(data) {
        return HttpClient.post('/api/report/erp/batchViewReport', data)
    },
    getReportData(data) {
        return HttpClient.post('/api/report/erp/batchViewReport', data)
    },
    getBrainReport(data){
        return HttpClient.post('/api/report/erp/batchViewNeverSpecializedExamReport', data)     //脑健康
    },
    getThyroidReport(data){
        return HttpClient.post('/api/report/erp/batchViewSpecializedExamReport', data)     //甲状腺
    },
    getBeautyDomain(data){
        return HttpClient.post('/api/report/erp/batchViewXiuyuSpecializedExamReport', data)      //秀域
    },
    getDiabetesReport(data){
        return HttpClient.post('/api/report/erp/batchViewDMSpecializedExamReport', data)
    },
    getBodyMapReport(data){
        return HttpClient.post('/api/report/erp/batchViewHandsReport', data)
    },
    getImmunityReport(data){
        return HttpClient.post('/api/report/erp/batchViewImmunizationSpecializedExamReport', data)
    }

}
