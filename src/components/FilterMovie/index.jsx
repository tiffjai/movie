 
import React from 'react';

const FilterMovie = ( props ) => {
  const setAction =(e)=>{
    props.setActionOnly(e.target.checked)
  }
  const setAnimation =(e)=>{
    props.setAnimationOnly(e.target.checked)
  }
  const setComedy =(e)=>{
    props.setComedyOnly(e.target.checked)
  }
  return (
      <>
        <p>Pick you favorite genre</p>
        <div className="custom-checkbox">
          <input
            type="checkbox"
            id="Action"
            name="action"
            value="Action"
            checked={props.actionOnly}
            onChange={setAction}  
          />
          <span className="checkmark"></span>
          <label htmlFor="Action"> Action </label>
          <input
            type="checkbox"
            id="Animation"
            name="animation"
            value="Animation"
            checked={props.animationOnly}
            onChange={setAnimation}  
          />
          <span className="checkmark"></span>
          <label htmlFor="Animation"> Animation </label>
          <input
            type="checkbox"
            id="Comedy"
            name="comedy"
            value="Comedy"
            checked={props.comedyOnly} 
            onChange={setComedy}
          />
          <span className="checkmark"></span>
          <label htmlFor="Comedy"> Comedy </label>  
        </div>
      </>
  );
};

export default FilterMovie;
