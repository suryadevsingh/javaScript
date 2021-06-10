/// axios
// import axios from 'axios'

const url = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF'
axios.get(url)
.then(response => {console.log(response)})
.catch((err) =>{console.log("catch",err)})


///=====================================================


async function getPlanets(){
    try{
        const res = await axios.get('https://swapi.dev/api/planets/');
        console.log(res.data);
    }catch(e){
console.log(e);
    }
}

getPlanets();