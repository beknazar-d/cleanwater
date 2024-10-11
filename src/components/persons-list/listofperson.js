import '../persons-list/listofperson.css';

const Personlist =({index,selectedDate,person,phoneNumber,adress,changedate,end,open,filterText})=> {

    return (
        <li className='person-list'>
            <span className='person-span'>{index}</span>
            <span className='person-span'>{selectedDate}</span>
            <span className='person-span'>{person}</span>
            <span className='person-span'>{phoneNumber}</span>
            <span className='person-span'>{adress}</span>
            <span className='person-span'>{changedate}</span>
            <span className='person-span'>{end}</span>
            <span className='person-span'>{filterText}</span>
            <button >изменить</button>
        </li>
    )
}

export default Personlist