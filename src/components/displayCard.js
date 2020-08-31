import React, { useState } from 'react';
import searchUtility from '../utility/mainUtility'
import Card from './card_component'



const CardForm = () => {
    const [titles, setTitle] = useState([]);
    const [selectedOption, setselectedOption] = useState('');
    const [cardArray, setCardArray] = useState([]);
    const [displayCards, setDisplayCards] = useState(false);

    let api = searchUtility();

    const handleClick = (e) => {
        setselectedOption(e.target.innerText);
        setTitle([])
    }
    const renderautocomplete = () => {
        return titles.map(val => {
            return <div onClick={(e) => handleClick(e)}>{val}</div>
        })

    }
    const handlechange = (e) => {
        const inputText = e.target.value;
        var arr = [];
        if (inputText.length > 3) {
            const arrVals = api.searchTitle(inputText, 3);
            arrVals.map(val => arr.push(api.gettitleByIndex(val)))
        }
        setTitle(arr);
        setselectedOption(inputText)

    }


    return <div>
        <div className="autocomplete" style={{ width: '300px' }}>
            <input autoComplete={'off'} value={selectedOption} onChange={(e) => handlechange(e)} id="myInput" type="text" placeholder="Books" />
        </div>
        <input onClick={() => {
            setDisplayCards(true);
            setselectedOption('');
            if (!cardArray.includes(selectedOption)) {
                setCardArray((prevState) => {
                    return [...prevState, selectedOption]
                })
            }



        }} type="submit" />

        {titles.length > 0 &&
            <div className='autocomplete-items'>
                {renderautocomplete()}
            </div>
        }


        <div className='card-layout'>
            {displayCards &&
                cardArray && cardArray.map(val => <Card title={val} />)
            }
        </div>
    </div>

}

export default CardForm;