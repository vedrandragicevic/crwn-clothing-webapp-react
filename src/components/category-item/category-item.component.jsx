import './category-item.styles.scss';
import React from 'react'

const CategoryItem = (props) => {


  return (
   
       
        <div key={props.id} className="category-container">
            <div 
              className="background-image" 
              style={
                      {
                         backgroundImage: `url(${props.imageUrl})`
                     }
                    } />
            <div className="category-body-container">
                <h2>{props.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
     
      
    
  )
}

export default CategoryItem
