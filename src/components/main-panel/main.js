import '../main-panel/main.css';
import cleanwater from '../images/cleanwater.jpeg'
import { Component } from 'react';
class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term:''
        }
    }

    onSearch2=(e) => {
        const term= e.target.value;

       this.setState({term})
        this.props.onSearch(term)
        console.log(term);
        
    }

    render() {

        return (
           <header className='header'> 
            <img src={cleanwater} alt="water" />
            <button className='add-btn button' onClick={()=> {this.props.openCard()}}>Добавить</button>
            <input type="text" placeholder='Поиск' onChange={this.onSearch2} value={this.state.term} />
            <button className='search-btn button'>Поиск</button>
            <button className='reset-btn button'>Сбросить</button>
            <button className='add-filter-btn button'>Добавить фильтр</button>
            <button className='add-cartridge button'>Добавить картридж</button>
           </header>
        )
    }
}
export default Panel;