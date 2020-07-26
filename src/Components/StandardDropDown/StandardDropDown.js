import React from "react";
import Select2 from '../../libs/Select2';
import '../../libs/Select2.css';


const StandardDropdown = ({list, itemSelected}) => { 
    const handleChange = (e) => {        
        const selectedItem = e.target.selectedOptions.length > 0  ? e.target.selectedOptions[0].innerHTML : '';
        if(selectedItem){
            itemSelected(selectedItem);
        }        
    }    
    return(
        <div>
            <Select2
           multiple={false}           
           data={list}
           onChange = {handleChange}
           options={{
             placeholder: 'Select Country',
           }}
         />
        </div>
    )
}

export default StandardDropdown;    