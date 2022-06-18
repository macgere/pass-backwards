import React from "react";

export const OptionButtons = ({unCapitalizeFirst, setNumbers, setPassword, setSpecialChar, capitalizeFirst, randomNumber, randomSpecChar, password}) => {

    return (
        <div className='option-buttons'>
            <button onClick={() => setSpecialChar(randomSpecChar)}>Add/Change Special Character</button>
            <button onClick={() => setSpecialChar('')}>Remove Special Character</button>
            <button onClick={() => setNumbers(randomNumber)}>Add/Change Numbers</button>
            <button onClick={() => setNumbers('')}>Remove Numbers</button>
            <button onClick={() => setPassword(capitalizeFirst(password))}>Add Capital Letter</button>
            <button onClick={() => setPassword(unCapitalizeFirst(password))}>Remove Capital Letter</button>
        </div>
    )
}