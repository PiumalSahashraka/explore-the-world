import './App.css';
import Card from './Components/Card';
import ContentHeader from './Components/ContentHeader';
import Header from './Components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';



const restCountriesUrl = 'https://restcountries.com/v3.1/all';

const fetchData = async () => {
  try {
    const response =  await axios.get(restCountriesUrl);
    const countries = response.data;

    return countries
  } catch (error) {
    console.log(error);
  }
}
let countrydata = []
function App() {
  const [countryNames, setCountryNames] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchValue, setSearchValue] = useState("")

  const handleTypingSearch = (event) =>{
    setSearchValue(event.target.value);
  }
  
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const names = await fetchData();
      countrydata= []
      if (selectedRegion === "all"){
        names.forEach( country => {
          countrydata.push(country)
         
        })
      }else if(selectedRegion==="africa"){
        countrydata= []
        names.forEach( country => {
          if ((country.region).toLowerCase()=== 'africa'){
            countrydata.push(country);
          }
        })
      }else if(selectedRegion==="americas"){
        countrydata= []
        names.forEach( country => {
          if ((country.region).toLowerCase()=== 'americas'){
            countrydata.push(country);
          }
        })
      }else if(selectedRegion==="antarctic"){
        countrydata= []
        names.forEach( country => {
          if ((country.region).toLowerCase()=== 'antarctic'){
            countrydata.push(country);
          }
        })
      }else if(selectedRegion==="asia"){
        countrydata= []
        names.forEach( country => {
          if ((country.region).toLowerCase()=== 'asia'){
            countrydata.push(country);
          }
        })
      }else if(selectedRegion==="europe"){
        countrydata= []
        names.forEach( country => {
          if ((country.region).toLowerCase()=== 'europe'){
            countrydata.push(country);
          }
        })
      }
      else if(selectedRegion==="oceania"){
        countrydata= []
        names.forEach( country => {
          if ((country.region).toLowerCase()=== 'oceania'){
            countrydata.push(country);
          }
        })
      }
      const options = {
        keys: ['name.common'],
        threshold: 0.1,
      };
      const fuse = new Fuse(countrydata, options) 

      if (searchValue === "")
        setCountryNames(countrydata);
      else{
        const result = fuse.search(searchValue);
        setCountryNames(result.map(item => item.item));
      }
    };
    fetchCountries();
  }, [selectedRegion,searchValue]);

  return (
    <div className="App">
      <Header />
      <ContentHeader onRegionChange={handleRegionChange} onTypingSearch={handleTypingSearch}/>
      <div className='card-container'>

      {countryNames.map((country)=>{
        return <Card imagePath={country.flags.png} cName={country.name.common} capital ={country.capital && country.capital[0]} region={country.region} population = {country.population}/>
      })}

      </div>
    </div>
  );
}

export default App;
