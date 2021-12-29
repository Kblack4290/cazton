import React, { useState } from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import './styles.css'

const SavedSeq = ({ numbers, deleteHandler, handleShowEdit }) => {

    return (
        <div className='saved'>
            <h2>Saved sequences</h2>
            {numbers && numbers.map(number => (
                <div key={number._id}>
                    <p>{number.numbers}  <span onClick={e => deleteHandler(number._id)}>
                        <MdDeleteForever />
                    </span> <span onClick={() => handleShowEdit(number)}><MdEdit /></span></p>
                </div>
            ))}
        </div>
    )
}

export default SavedSeq
