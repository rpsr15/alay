import React from "react";
import { Dropdown } from "@nextui-org/react";
import { IoSwapVerticalOutline } from 'react-icons/io5'
const SortDropdown = ({ sortValues, selectedFilter, onFilterChange }) => {
    return (
        <div className=' border border-solid border-black rounded-none'>
            <Dropdown className="p-0">
                <Dropdown.Button icon={<IoSwapVerticalOutline />} color='black'>
                </Dropdown.Button>
                <Dropdown.Menu
                    onAction={(keys) => { onFilterChange(keys) }}
                    className="p-0">
                    {sortValues.map((filterParameter) => {
                        return (
                            <Dropdown.Item
                                css={{
                                    borderRadius: '0px'
                                }}

                                className={`${filterParameter.value === selectedFilter ? 'bg-gray-100' : ''}`}
                                key={filterParameter.value}>
                                {filterParameter.text}
                            </Dropdown.Item>)
                    })}

                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default SortDropdown;
