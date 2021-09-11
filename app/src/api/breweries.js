import axios from 'axios'

const apiEndpoint = 'https://api.openbrewerydb.org/breweries'

const getBreweriesList = async () => {
  try {
    let url = `${apiEndpoint}?per_page=9`
    console.log('in url: ' + url)
    const result = await axios.get(url)
    console.log(result)
    return result.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export default {
  getBreweriesList
}
