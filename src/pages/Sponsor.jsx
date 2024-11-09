import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PricingTable from "../componenets/PricingTable";
import Benefits from "../componenets/Benefits";


const Sponsor = () => {

  const location = useLocation(); 
  useEffect(() => {
      if (location.hash === '#patrocinio') {
          const element = document.getElementById('patrocinio');
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [location]);


  return (
    <>
    <div id="patrocinio">
    <Benefits/>
    <PricingTable />
    </div>
    </>
  );
};

export default Sponsor;
