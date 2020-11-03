//handles the API call for getting nearest restaurants
import axios from 'axios';

const search = (lat, long) => {
  axios.get('/search')
    .then((response) => {
      let allRestaurants = {};
      for (let i in response) {
        const restaurantName = response[i],_fields[0].properties.name;
        const restaurantLat = response[i],_fields[0].properties.latitude;
        const restaurantLong = response[i],_fields[0].properties.longitude;
        allRestaurants[restaurantName] = {latitude: restaurantLat, longitude: restaurantLong};
      }
      return allRestaurants;
    })
    .catch(() => console.log('search failed'));
};

module.exports = search;