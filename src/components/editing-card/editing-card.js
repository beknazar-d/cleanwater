
import '../editing-card/editing-card.css';

const Cardofediting = (props) => {

 

  return (
    <div className={props.clazz2}>
      <div className="h1-section">
        <h1>Редактирование</h1>
        {/* Обрабатываем клик по кнопке и вызываем closeEditCard */}
        <button className="x-btn" onClick={props.close()}>X</button>
      </div>
      <div className="main-section1">
        <section className="first-section">
          <li className="section-list">
            <span>Клиент :</span>
            <input type="text" className="section-input" />
          </li>
          <li className="section-list">
            <span>Адресс :</span>
            <input type="text" className="section-input" />
          </li>
          <li className="section-list">
            <span>Телефон :</span>
            <input type="text" className="section-input" />
          </li>
          <li className="section-list">
            <span>Модель :</span>
            <input type="text" className="section-input" />
          </li>
        </section>
        <section className="second-section">
          <div className="panel-menu">
            <ul className="panel-menu-list">
              <li>№</li>
              <li>Имя Картриджа</li>
              <li>Дата замены</li>
              <li>Дата окончания</li>
              <li>Обн.</li>
            </ul>
          </div>
          <div className="panel-content">
            <ul className="content-list">
              <li className="content-item">
                <span>1</span>
                <span>Картридж A</span>
                <span>01.09.2024</span>
                <span>01.12.2024</span>
                <button className="update-btn">⟳</button>
              </li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardofediting;

