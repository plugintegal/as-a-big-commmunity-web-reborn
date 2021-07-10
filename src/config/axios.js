import axios from 'axios'

const instance = axios.create({
  baseURL:'https://app-server-ta.herokuapp.com/'
})

export default instance