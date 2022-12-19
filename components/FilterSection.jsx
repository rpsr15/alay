import React, { useState } from "react";
import { Text, Modal, Collapse, Checkbox } from "@nextui-org/react";
const FilterSection = () => {
    const [visible, setVisible] = useState(false);
    const handler = () => {
        setVisible(true);
    };
    const closeHandler = () => {
        setVisible(false);
    };
    return (
        <div
            className='h-full flex border border-solid border-black rounded-none  items-center justify-center'
            onClick={handler}>
            <div className=''>Filter</div>
            <Modal fullScreen closeButton aria-labelledby='Filter' open={visible} onClose={closeHandler}>
                <Modal.Header>
                    <Text id='modal-title' size={18}>
                        Filter by
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Collapse.Group>
                        <Collapse title='Collection'></Collapse>
                        <Collapse title='Price'>
                            <Checkbox.Group>
                                <Checkbox value='500'>Rs. 500 and Below</Checkbox>
                                <Checkbox value='1000'>Rs. 500 - Rs. 1000 </Checkbox>
                                <Checkbox value='2000'>Rs. 1000 - Rs. 2000 </Checkbox>
                                <Checkbox value='1000000'>Rs. 2000 and Above </Checkbox>
                            </Checkbox.Group>
                        </Collapse>
                        <Collapse title='Color'></Collapse>
                    </Collapse.Group>
                </Modal.Body>
                <Modal.Footer>
                    <div className=' flex flex-row bg-yellow-100 w-full'>
                        <button className='bg-white border-solid border-2 border-gray-400 text-gray-400 flex-grow-1 flex-basis-0 w-full text-xl leading-[3.5rem]'>
                            Clear filters
                        </button>
                        <button className='bg-black text-white flew-grow-1 flex-basis-0 w-full text-xl ml-2'>Apply</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FilterSection;
