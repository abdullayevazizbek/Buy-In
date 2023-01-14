import axios from 'axios'
import { domain, APP_MODE, APP_VERSION } from './url'

const Axios = axios.create({
    baseURL: `${domain}${APP_MODE}${APP_VERSION}`,
})

export default Axios
