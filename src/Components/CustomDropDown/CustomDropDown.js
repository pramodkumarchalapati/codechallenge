import React from 'react';
import CreatableSelect from 'react-select/creatable';

const CustomDropDown = ({list, itemSelected}) => {

  const handleChange = (newValue, actionMeta) => {    
    if(newValue){
        const {label} = newValue;
        itemSelected(label);
    }    
  };  
    return (
      <CreatableSelect      
        onChange={handleChange}
        options={list}        
        placeholder = "Search Text / Select"
      />
    );
  
}

export default CustomDropDown;
