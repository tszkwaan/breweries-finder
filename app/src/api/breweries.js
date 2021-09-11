import axios from 'axios'

const apiEndpoint = 'https://api.openbrewerydb.org/breweries'

const getBreweriesList = async (page, size, companySize) => {
  try {
    let url = `${apiEndpoint}?page=${page}&per_page=${size}`
    if (companySize) {
        url += `&by_type=${companySize}`
    }
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
