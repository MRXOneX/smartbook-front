import axios from 'axios'


const API_URL = 'https://smartbook-1v.herokuapp.com/'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('tokenSmartBook')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}users/refresh`, {withCredentials: true})
            localStorage.setItem('tokenSmartBook', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Access denied')
        }
    }
    throw error
})

export default $api