import React, { useState, useEffect } from "react";
import Card from "./Card";

const CountryCards = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container">
      {countries.map((country) => (
        <Card className="grid-item"
          key={country.abbr}
          name={country.name}
          
          img={country.flag}
        />
      ))}
    </div>
  );
};

export default CountryCards;
