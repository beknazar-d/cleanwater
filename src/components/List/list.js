import '../List/list.css';
import Personlist from '../persons-list/listofperson';
const Listof =({data,open})=> {
    if (!Array.isArray(data) || data.length === 0) {
        return <p>Нет данных для отображения</p>;  // Выводим сообщение, если данных нет
      }
    const elements = data.map((item,index)=> {

        const {number,person, ...otherprops} = item;
       return(

           <Personlist  
           key={index}
           person={person}
           index={index + 1}
           
           {...otherprops}
           />
       )
    })

    return(
        <ul>

            {elements}
        </ul>
    )
}
export default Listof