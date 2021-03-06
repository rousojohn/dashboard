import { React, Component } from 'react'
import axios from 'axios'
import Config from '../conf.json'

import PropTypes from 'prop-types'

const Domain = `http://${Config.ApiServer}:${Config.ApiPort}`

class DataComponent extends Component {
    state = {
        data: [],
        isLoading: true
    }

    async componentDidMount() {
        const { endpoint } = this.props
        
        try {
            let res = await axios(`${Domain}${endpoint}`)
            this.setState({data: res.data, isLoading: false})
            
        } catch (e) {
            this.setState({data:[], isLoading: true})
        }
    }

    render() {
        const { data, isLoading } = this.state
        console.log(data)
        return this.props.children(data, isLoading)
    }
}

DataComponent.propTypes = {
    endpoint: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
}

export default DataComponent