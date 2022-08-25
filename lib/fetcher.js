import axios from 'axios'

const fetcher = (url) => {
  const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }

  return axios.get(url, { headers }).then((res) => res.data)
}

export { fetcher }
