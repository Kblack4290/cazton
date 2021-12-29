import React from 'react'
import './styles.css'

const NumOptions = ({ handleOnChange, showEdit }) => {
    const numberData = [
        {
            value: 1,
            key: "numberOne",
            label: "One",
        },
        {
            value: 2,
            key: "numberTwo",
            label: "Two",
        },
        {
            value: 3,
            key: "numberThree",
            label: "Three",
        },
        {
            value: 4,
            key: "numberFour",
            label: "Four",
        },
        {
            value: 5,
            key: "numberFive",
            label: "Five",
        },
        {
            value: 6,
            key: "numberSix",
            label: "Six",
        },
        {
            value: 7,
            key: "numberSeven",
            label: "Seven",
        },
        {
            value: 8,
            key: "numberEight",
            label: "Eight",
        },
        {
            value: 9,
            key: "numberNine",
            label: "Nine",
        },
    ]
    return (
        <div className="numOptions">
            <h2>{!showEdit ? "Choose" : "Edit"} your sequence</h2>
            <p>You may select any sequence of numbers and submit them to be saved.</p>
            {
                numberData.map((num) => (
                    <div
                        key={num.value}
                        className='form-check-inline col-3'>
                        <label
                            className="btn btn-outline-primary"
                            htmlFor={num.value}>
                            {num.label}
                        </label>
                        <input
                            type="checkbox"
                            id={num.value}
                            className="btn-check"
                            htmlFor="btn-check-outlined"
                            autoComplete="off"
                            name={num.value}
                            value={num.value}
                            onChange={handleOnChange} />
                    </div>
                ))
            }
        </div>
    )
}

export default NumOptions
