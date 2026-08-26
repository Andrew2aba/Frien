import React from "react";
import ListingCard from "../components/listingCard";
import { useState, useEffect } from "react";
import instance from "../components/Axios";



const LandingPage = () => {



     const [vehicles, setVheicles] = useState([]);
    
    // fetch data from backend
    const fetchData = () => {
      instance.get('vehicles/').then((response) => {
        console.log("API response:", response.data);  
        console.log("✅ LandingPage mounted");
            setVheicles(response.data);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
      <div>
        <div
          
            style={{
            display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 20,
            padding: 20,
          }}>
            {vehicles.map((vehicle) => (
              <ListingCard key={vehicle.id} listing={vehicle} />
            ))}
        </div>

      </div>


);
}

export default LandingPage;