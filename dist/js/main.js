"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlanetaryMap = // API_BASE_URL = 'https://api.le-systeme-solaire.net/rest/bodies/'
function PlanetaryMap() {
  var _this = this;

  _classCallCheck(this, PlanetaryMap);

  _defineProperty(this, "API_BASE_URL", "https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='MB'");

  _defineProperty(this, "handleSearch", function (evt) {
    console.log('searching....');
    axios.get(_this.API_BASE_URL).then(_this.processResults);
  });

  _defineProperty(this, "processResults", function (response) {
    console.log('your results captain: ', response); // let responseData = response.data.bodies
    // for(let ri = 0; ri < responseData.length; ri++){
    //     if (responseData[ri].isPlanet === true){
    //         console.log(responseData[ri].englishName, " ", responseData[ri].sideralOrbit, " ", responseData[ri].sideralRotation)
    //         console.log(responseData[ri])
    //     }
    // }
  });

  this.handleSearch();
};

new PlanetaryMap();
//# sourceMappingURL=main.js.map
