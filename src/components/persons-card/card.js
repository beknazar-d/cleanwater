import "../persons-card/card.css";
import * as React from 'react';
import { Component } from "react";
import { Checkbox, FormControlLabel, Typography, List, ListItem } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      person: '',
      selectedDate: null,
      phoneNumber: '',
      adress: '',
      changedate: '',
      end: '',
      checkboxes: {
        PP: false,
        UDF: false,
        CTO: false,
        МЕМБРАНА: false,
        КОКОС: false,
        'UDF-Ultra': false,
        SUPER: false,
        GREEN5: false,
      },
      filterValue:30,
      filterText:'premium'
    };
  }

  handleChangeFilter=(event)=> {
    const value = event.target.value;
    const text = event.target.options[event.target.selectedIndex].text; // Get the selected option text

    this.setState({
      filterValue: value,
      filterText: text, // Update state with the selected option text
    });
    
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDateChange = (newValue) => {
    this.setState({ selectedDate: newValue });
  };

  onSave = (e) => {
    e.preventDefault();
    const { person, number, adress, phoneNumber, selectedDate,filterText } = this.state;

    // Убедимся, что мы передаем форматированную дату
    const formattedDate = selectedDate ? selectedDate.format('DD.MM.YYYY') : '';

    this.props.addOrder(person, number, adress, phoneNumber, formattedDate,filterText);

    // Очищаем поля после сохранения
    this.setState({
      number: '',
      person: '',
      adress: '',
      phoneNumber: '',
      selectedDate: null,
      filterValue:30,
      filterText:'premium'
    });

    const active = 'visible';
    this.props.onClose(active);
  };

  handleCheckboxChange = (event) => {
    const name = event.target.name;
    this.setState(state => ({
      checkboxes: {
        ...state.checkboxes,
        [name]: event.target.checked
      }
    }));
  };

  render() {
    const active = 'visible';
    const { clazz, onClose } = this.props;
    const { person,  selectedDate, phoneNumber, adress, checkboxes,filterValue,filterText } = this.state;

    return (
      <div className={clazz.join(' ')}>
        <button className="closeButton" onClick={() => { onClose(active) }}>x</button>
        <h1>Добавление</h1>
        <main className="main-container">

          <div className="datas">
            <ul className='list-of-item'>

              <li className='list-item'>
                <span>Ф.И.О</span>
                <input type="text" className="card-input" placeholder="Ф.И.О" name="person" value={person} onChange={this.onValueChange} />
              </li>

              <li className='list-item'>
                <span>Телефон</span>
                <input type="text" className="card-input" placeholder="Телефон" name="phoneNumber" value={phoneNumber} onChange={this.onValueChange} />
              </li>

              <li className='list-item'>
                <span>Адрес проживания</span>
                <input type="text" className="card-input" placeholder="Адрес проживания" name='adress' value={adress} onChange={this.onValueChange} />
              </li>

              <li className='list-item'>
                <span>Дата установки</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Дата установки"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    sx={{
                      '& .MuiInputBase-root': { height: '30px', minHeight: '30px', width: '150px' },
                      '& .MuiSvgIcon-root': { fontSize: '18px' },
                      '& .MuiInputBase-input::placeholder': { fontSize: '10px', padding: '4px' },
                      '& .MuiFormLabel-root': { fontSize: '12px' }
                    }}
                  />
                </LocalizationProvider>
              </li>

              <li className='list-item'>
                <span>Фильтр</span>
                <Box sx={{ width: '150', height: '30px', margin: '0', '& .MuiInputBase-root': { height: '30px', width: '150px' } }}>
                  <FormControl fullWidth sx={{ width: '150px', height: '30px' }}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Фильтр
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      value={filterValue}
                      onChange={this.handleChangeFilter}
                      inputProps={{
                        name: 'Фильтр',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={10}>smart</option>
                      <option value={20}>eco-smart</option>
                      <option value={30}>premium</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </li>
            </ul>
            <section className="cancel-section">
              <button>отмена</button>
            </section>
          </div>

          <aside className="aside-items">
            <div style={{}}>
              <Typography sx={{ backgroundColor: 'rgb(40, 103, 211)', width: '100%', color: 'white' }} variant="h5"> Картриджи</Typography>
            </div>

            <List sx={{ overflowY: 'scroll', width: '98.5%', maxHeight: '300px', border: '2px solid rgb(40, 103, 211)' }}>
              {Object.keys(checkboxes).map((checkbox) => (
                <ListItem key={checkbox}>
                  <FormControlLabel
                    control={<Checkbox name={checkbox} checked={checkboxes[checkbox]} onChange={this.handleCheckboxChange} />}
                    label={<Typography style={{ fontWeight: 'bold', fontSize: '15px' }}>{checkbox}</Typography>}
                  />
                  <span>Срок: 8</span>
                </ListItem>
              ))}
            </List>

            <section className="save-section">
              <button onClick={this.onSave}>Сохранить</button>
            </section>
          </aside>
        </main>
      </div>
    );
  }
}

export default Card;
