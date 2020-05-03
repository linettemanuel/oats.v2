import React from 'react';

const CustomInput = ({name, placeholder, type, onChange , ...otherProps}) => {
    return (
        <div>
            <input 
                name={name} 
                placeholder={placeholder} 
                type={type} 
                onChange={onChange}/>
        </div>
    );
}

export default CustomInput;
