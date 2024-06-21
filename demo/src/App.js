import logo from './logo.svg';
import './App.css';
import './components/item'
import Item from './components/item';
import ItemDate from './components/ItemDate';

function App() {
  const itemTwoNmae="surf Excel";
  const response=[
    {
      itemName:"Niram",
      itemDate: "20",
      itemMonth:"june",
      itemYear:"1999"
    },

    {
      itemName:"surf",
      itemDate: "20",
      itemMonth:"june",
      itemYear:"1999"
    },
  ]
  return (
    <div>
      <Item name={response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={itemTwoNmae}></Item>
      <ItemDate day="12" month="June" year="1987"></ItemDate>

      <Item name="tide"></Item>
      <ItemDate  day="11" month="May" year="1986"></ItemDate>
      <div className="App">
        Artificial Human
      </div>
    </div>

  );
}

export default App;
