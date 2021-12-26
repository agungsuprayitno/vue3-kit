import axios from "axios"
// import VueAxios from "vue-axios"
// export default {
    // install(Vue) {
        axios.defaults.baseURL = "http://localhost:8000"
        axios.defaults.withCredentials = true
        // axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
        // axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('access_token')
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
        axios.defaults.headers.common.Authorization = "Bearer " + localStorage.getItem('access_token')

        axios.interceptors.response.use(function (response) {
            return response
        }, function (error) {
            if(error.response.status == 401) {
                localStorage.clear()
                //  TODO: set alert error

                setTimeout(function() {
                    window.location.href = '/'
                }, 1000)
            } 
            return Promise.reject(error)
        })
//         Vue.use(VueAxios, axios);
//     }
// };

export default axios
