import React, {  Component } from 'react';
import './App.css';
import Panel from './components/main-panel/main';
import Page from './components/pagechanger/pagechanger';
import Card from './components/persons-card/card';
import Cardofediting from './components/editing-card/editing-card';

import Listof from './components/List/list';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clazz: ['card'],
      clazz2:['editing-card'],  // Начальное состояние с одним классом
      data:[{
        number: 1,
        selectedDate: "20.09.2019",
        person: "Beknazar Kaparov",
        phoneNumber: "T.Kulatova 15/21",
        adress: "0556442144",
        changedate: "21.10.2024",
        end: "21.09.2026",
        filterValue:null,
        filterText:'premium'
      },
      {
        number: 1,
        selectedDate: "20.09.2019",
        person: "Ali Kaparov",
        phoneNumber: "T.Kulatova 15/21",
        adress: "0556442144",
        changedate: "21.10.2024",
        end: "21.09.2026",
        filterValue:null,
        filterText:'premium'
      }],

      term:'',
    }
  }

    openCard = () => {
      this.setState(({ clazz }) => {
        if (!clazz.includes('card')) {
          return; // Если класс 'card' отсутствует, ничего не делаем
        }
    
        // Удаляем все, кроме 'card'
        const newClazz = clazz.filter(item => item === 'card');
        return { clazz: newClazz };
      });
    };
    
    openEditingCard = () => {
      console.log('hey');
      
      this.setState(({clazz2})=> {
        if(clazz2.includes('none')) {
          return{ clazz2: ['editing-card'] };
        } else {
          return;
        }
      })
    };

    closeEditingCard = ()=> {
      this.setState(({clazz2})=> {
        if(!clazz2.includes('none')) {
          const newClass= [...clazz2,'none']
          return{clazz2:newClass}
        }
      })
    }

  closeCard = (active) => {
    if(active.includes('visible')) {
      this.setState(({clazz})=> {
        const newClazz=[...clazz, active]
        return {
          clazz:newClazz
        }
      })
    }
   
  }

    addOrder=(person,number,phoneNumber,adress,selectedDate,filterText)=> {
      const newPers = {
        number,
        selectedDate,
        person,
        phoneNumber,
        adress,
        changedate:'21.10.2024',
        end:'21.09.2026',
        filterText
      }
      this.setState(({data})=> {
        const newArr = [...data, newPers];
        return {
          data:newArr
        }
      })
    }
   
    onFilter=(items,term)=> {
      if(term.length ===0) return items

    return  items.filter((item)=> {
        return item.person.indexOf(term) > -1
      })
    }
    onSearch=(term)=> {
      this.setState({term})
    }

  render() {
    const { clazz, clazz2,data,term } = this.state;
    const visibleData = this.onFilter(data,term)
    // Преобразование массива классов в строку
    return (
      <div className='parent'>
        <Panel openCard={this.openCard} onSearch={this.onSearch} />
        <Page /> 
        <Card clazz={clazz} onClose={this.closeCard} addOrder={this.addOrder} data={data} />
        <Cardofediting clazz2={clazz2} close = {this.closeEditingCard}/>
        <Listof data={visibleData}  />
        
        
      </div>
    );
  }
}

export default App;


