
class PlanetaryMap{
    // API_BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies/'
    API_BASE_URL = "https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='MB'"

    constructor(){

        this.handleSearch()
    }

    handleSearch = (evt) => {
        console.log('searching....')
        axios.get(this.API_BASE_URL).then(this.processResults)
    }
    processResults = (response) => {
        console.log('your results captain: ', response)
        // let responseData = response.data.bodies
        // for(let ri = 0; ri < responseData.length; ri++){
        //     if (responseData[ri].isPlanet === true){
        //         console.log(responseData[ri].englishName, " ", responseData[ri].sideralOrbit, " ", responseData[ri].sideralRotation)
        //         console.log(responseData[ri])
        //     }
        // }
        
    }
}

new PlanetaryMap()