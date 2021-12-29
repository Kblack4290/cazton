import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SavedSeq from '../savedSeq/SavedSeq'
import NumOptions from '../numOptions/NumOptions'
import SelectedNums from '../selectedNums/SelectedNums'

const Numbers = () => {

    const [selectedValues, setSelectedValues] = useState([])
    const [numbers, setNumbers] = useState([])
    const [editVals, setEditVals] = useState({})
    const [showEdit, setShowEdit] = useState(false)


    const handleOnChange = (e) => {
        const checked = e.target.checked

        if (checked) {
            setSelectedValues(oldArr => [...oldArr, e.target.value])
        } else {
            const filtered = selectedValues.filter(x => x !== e.target.value)
            setSelectedValues(filtered)
        }

    };

    const handleShowEdit = (vals) => {
        setShowEdit(true)
        setEditVals(vals)
        let myFunc = num => Number(num);
        var intArr = Array.from(String(vals.numbers), myFunc);
        console.log(intArr)
        setSelectedValues(intArr)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = selectedValues.join('')

        axios.post('http://localhost:5000/api/numbers', { numbers: formData })
            .then(res => setNumbers(oldArr => [...oldArr, res.data]))

            .catch(err => console.log(err))

    }

    console.log(numbers);

    const updateNumbers = (e) => {
        e.preventDefault();
        const formData = selectedValues.join('')
        axios.put(`http://localhost:5000/api/numbers/${editVals._id}`, {
            numbers: formData
        })
            .then(res => {
                console.log(res)
                const editedState = numbers.map(i => i._id === res.data._id ? res.data : i)
                setNumbers(editedState)
                setShowEdit(false)
                setSelectedValues([])
            })
            .catch(err => console.log(err))
    }

    const deleteHandler = (_id) => {

        axios.delete(`http://localhost:5000/api/numbers/${_id}`)
            .then(res => {
                const filtered = numbers.filter(x => x._id !== _id)
                setNumbers(filtered)
                console.log(res)
                console.log('it works')
            })
            .catch(err => console.log(err))
    }

    const clearForm = () => {
        setSelectedValues([])
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/numbers')
            .then(res => setNumbers(res.data))
            .catch(err => console.log(err))
    }, [])




    return (
        <div className="container">
            <div className='row'>
                <div className='col-6'>
                    <form onSubmit={showEdit ? updateNumbers : handleSubmit} >
                        <NumOptions showEdit={showEdit} handleOnChange={handleOnChange} />
                        <SelectedNums selectedValues={selectedValues} clearForm={clearForm} />
                    </form>
                </div>
                < div className='col-6'>
                    <SavedSeq handleShowEdit={handleShowEdit} numbers={numbers} deleteHandler={deleteHandler} />
                </div>
            </div>
        </div>

    )

}

export default Numbers
