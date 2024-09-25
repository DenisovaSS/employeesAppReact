import './app-info.css';

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Облік співробітників в компанії Retail Pulse</h1>
      <h2>Загальна кількість працівників: {props.countEmplo}</h2>
      <h2>Премію отримають: {props.increased}</h2>
    </div>
  );
};
export default AppInfo;
