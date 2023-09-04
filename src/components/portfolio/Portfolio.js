import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {info} from "../../info/Info";

export default function Portfolio() {
  
    return (
      
        <div className='pt=1'>
           
            <div container display={'flex:auto'} justifyContent={'center' }>
                
                {info.portfolio.map((project, index) => (
                   <div item xs={2} md={4} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </div>
                ))}
            </div>
        </div>
    );
};