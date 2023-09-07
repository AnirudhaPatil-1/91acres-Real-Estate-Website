import React, {useState, useEffect, createContext} from 'react';

import {housesData} from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState("Location (any)");
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [startDate, setStartDate] = useState('Rent Date (any)')
    // const [startDate, setStartDate] = useState('Date (any)')
    const [loading, setLoading] = useState(false);

    //countries
    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country;
        });
        // console.log(allCountries);

        const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

        // console.log(uniqu eCountries);

        setCountries(uniqueCountries);

    }, [houses]);

    //properties
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });
        // console.log(allProperties);

        const uniqueProperties = ['Property (any)', ...new Set(allProperties)];

        // console.log(uniqueProperties);

        setProperties(uniqueProperties);

    },[houses] );

    const handleClick = () => {

        //loading
        setLoading(true);
        
        // console.log('clicked');
        // console.log(country, property, price, date);

        const  isDefault = (str) => {
            return str.split(' ').includes('(any)');;
        };
        // console.log(isDefault(country));

        const minPrice = parseInt(price.split(' ')[0]);
        // console.log(minPrice);
        const maxPrice = parseInt(price.split(' ')[2]);

        const dateSelected = parseInt(startDate);
        // console.log(dateSelected);
    
        // console.log(maxPrice);
        // const newHousesm = housesData.filter((house) => {
        //     console.log(house.price);
        // })
        // console.log(dateAvailableTill);
        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);
            // console.log(housePrice);
            const houseAvailableDate = parseInt(house.date);
            // console.log(`houseDate: ${houseDate}`);

            if(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice && houseAvailableDate >= dateSelected) {
                return house; 
            }

            //if all values are default
            if(isDefault(country) && isDefault(property) && isDefault(price) && isDefault(startDate)){
                return house;
            }

            //if country is not default
            if(!isDefault(country) && isDefault(price) && isDefault(price) && isDefault(startDate) ){
                return house.country === country;
            }

            //if property is not default
            if(!isDefault(property) && isDefault(country) && isDefault(price) && isDefault(startDate)){
                return house.type === property
            }

            //if price is not default 
            if(!isDefault(price) && isDefault(country) && isDefault(property) && isDefault(startDate) ){
                if(house.price >= minPrice && house.price <= maxPrice){
                    return house;
                }
            }

            if(!isDefault(startDate) && isDefault(country) && isDefault(property) && isDefault(price) ){
                if(houseAvailableDate >= dateSelected){
                    return house;
                }
            }


        });

        // console.log(newHouses);
        setTimeout(() => {
            return newHouses.length < 1? setHouses([]): 
            setHouses(newHouses),
            setLoading(false);
        }, 1000);
    }

    return <HouseContext.Provider value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        startDate, 
        setStartDate,
        houses,
        loading, 
        handleClick, 
        

    }}>{children}</HouseContext.Provider>
}

export default HouseContextProvider;