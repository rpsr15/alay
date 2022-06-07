import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const ButtonCheckbox = ({ label,value, checked, onChange }) => {
    const handleRadioChange = () => {
        onChange(value)
    }

    return (
        <div className='font-playfair'>
            <input className='hidden' type="radio" name='ravi' value={value} checked={checked} readOnly/>
            <label className={`${checked?'bg-secondary':'bg-white'} py-2 px-1 border border-secondary-dark`}
            onClick={handleRadioChange}
            >{label}</label>

        </div>
    )
}
ButtonCheckbox.defaultProps = {
 value: '',
 checked: false
}


export default ButtonCheckbox