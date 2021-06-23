import React, {useState} from 'react';

export default function Input({inputPriceFromChild, inputSalesFromChild, inputRevenueFromChild}) {

    const [values, setValues] = useState(0);

    const handleChange = (e) => {
        
        setValues(e.target.value);

        inputPriceFromChild(e ? e.target.value : '');
        inputSalesFromChild(e ? e.target.value : 0);
        inputRevenueFromChild(e ? e.target.value : '');
    }

    return (
        <div>
            <input type="text" onChange={handleChange} value={values} />
        </div>
    )
}
