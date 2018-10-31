import axios from 'axios'
import Config from '../conf.json'

const Domain = `http://${Config.ApiServer}:${Config.ApiPort}`

class CourseModel {
    static getAll = async () => {
        try {
            let res = await axios(`${Domain}${Config.CoursesEndpoint}`)
            return res.data
        } catch (e) {
            return []
        }
    }

    static getOne = async (id) => {
        try {
            let res = await axios(`${Domain}${Config.CoursesEndpoint}/${id}`)
            return res.data
        } catch (e) {
            return {}
        }
    }
}

export default CourseModel