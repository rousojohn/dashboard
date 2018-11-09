import axios from 'axios'
import Config from '../conf.json'

const Domain = `http://${Config.ApiServer}:${Config.ApiPort}`

const Post = async (endpoint, obj) => {
    try {
        let res = await axios.post(`${Domain}${endpoint}`, obj)
        return res   
    } catch (e) {
        throw e
    }
}

const Put = async (endpoint, id, obj) => {
    try {
        let res = await axios.put(`${Domain}${endpoint}/${id}`, obj)
        return res
    } catch (e) {
        throw e
    }
}

const Delete = async (endpoint, id) => {
    console.log(endpoint, id)
    try {
        let res = await axios.delete(`${Domain}${endpoint}/${id}`)
    }
    catch (e) {
        throw e
    }
}

export { Post, Put, Delete }
