import React from 'react'
import './styles.css'

const SelectedNums = ({ selectedValues, clearForm }) => {
    return (
        <div>
            <div>
                <h3 className='myVals' >Your sequence: {selectedValues.map(val => <p key={val}>{val}</p>)} </h3>
            </div>
            <div className='button'>
                <button type="submit" className="btn btn-primary mb-3" > Submit </button>
                <button type="reset" className="btn btn-danger mb-3 clear" onClick={clearForm} > Clear </button>
            </div>
        </div>
    )
}

export default SelectedNums
