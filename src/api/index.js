import ajax from './ajax.js'


// const prefix = '/http://m.you.163.com'
const prefix = '/api'


// http://m.you.163.com/topic/v1/find/recAuto.json
//
//cate


//msite



//topic
// 请求识物组件内Tab懒数据
export const reqTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)

//tabs:[],recommendData:[],autoRecommendData:[],expertTabData:[],newTabData:[],showTabData:[],showCollection:[],homeTabData:[]


// 获取其它组件数据
export const reqTabData = (page, size, tabId) => ajax(`${prefix}/topic/v1/find/getTabData.json`, {page, size, tabId})

// 获取show组件买家秀数据
export const reqList = (page, size, type) => ajax(`${prefix}/topic/v1/look/getList.json`, {page, size, type})

// 获取show组件collection数据
export const reqColection = (id) => ajax(`${prefix}/topic/v1/look/getCollection.json`, {id})

// 请求识物下推荐数据
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)

//请求推荐数据上拉加载
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`${prefix}/topic/v1/find/recAuto.json`, {page, size, exceptIds})








//search
