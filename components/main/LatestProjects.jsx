import React, { useEffect, useState } from 'react';
import NavigationButton from '../navigation/NavigationButton';
import Project from './Project';
import Title from './Title';


export default function LatestProjects(props) {
  return (
    <div>
      <Title title="Latest Projects"/>
      <div className="c-project__container">
        {

          props.data.map((item, index) => 
            <Project publishDate={item.publishDate} title={item.title} img={item.coverImage} key={index} description={item.description} link={item.link}/>

          )
          
           
        }
      </div>
      <div className="c-projects__seemore">
        <NavigationButton link="/projects" fieldName="See all projects"/>
      </div>
    </div>
  )
}