import axios from "axios";

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=Tyc60fAPiUvTVcqJmu1M1a1pteeWKrdF5fse5t0-bgY'

    const response = await axios.get(url, {
        params:{
            query: 'cars'
        }
    })
    console.log(response)
    return response.data.results
}

export default searchImage