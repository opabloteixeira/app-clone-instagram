import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.6:3334'
})

// Emuladores
// Genymotion 'http://10.0.3.2:3334'
// Android estudio 'http://10.0.3.2:3334'

export default api 