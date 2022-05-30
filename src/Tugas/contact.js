import React, { Component } from "react";


import Card from './Card'

import './Home.css';


class Contact extends Component {
    render() {
        return (
            
            <div className='home'>

                

                <h1>ArJ Team | Present</h1>

                <div className='home__section'>
                
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Rajendra Rakha"
                        description="1941720080 | 3H | Frotend Engineer"
                        
                    />
                    
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Ariono Septian"     
                        description="1941720092 | 3H | Backend Engineer"

                    />
            
                    <Card
                        src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                        title="Meuti Zari"     
                        description="1941720088 | 3H "

                    />
            
            
                   
                </div>



             

            </div>
        );
    }
}

export default Contact;
