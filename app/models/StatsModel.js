import axios from 'axios'
import Config from '../conf.json'

const Domain = `http://${Config.ApiServer}:${Config.ApiPort}`

class StatsModel {
    static getAll = async () => {
        try {
            let res = await axios(`${Domain}${Config.StatsEndpoint}`)
            return res.data
        } catch (e) {
            return []
        }
    }
}

export default StatsModel