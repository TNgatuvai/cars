import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            "Client-ID qlnOcIb4JAju9OFBRP3FUHoHZcTF5D6gV2AvBY73nUs",
      }
});