import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Organizers from "../componenets/Organizers"; 

const Organizer = () => {
    const location = useLocation(); 


    useEffect(() => {
        if (location.hash === '#organizr') {
            const element = document.getElementById('organizr');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div id="organizr">
            <Organizers />
        </div>
    );
};

export default Organizer;