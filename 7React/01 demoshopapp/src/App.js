
import './App.css';
import Item from './component/Item';
import itemDate from './component/ItemDate';
import Card from './component/Card';

function App() {
  const response = [
    {
      itemName:"Nilesh1",
      itemDate:"26",
      itemMonth:"February",
      itemYear:"2000"
    },
    {
      itemName:"Nilesh2",
      itemDate:"27",
      itemMonth:"March",
      itemYear:"2001"

    },
    {
      itemName:"Nilesh3",
      itemDate:"28",
      itemMonth:"April",
      itemYear:"2002"
    }
  ];
  return (
    <div>
      <Card>
      <Item name={response[0].itemName}>Hello Im First item</Item>
      <itemDate day={response[0].itemDate} month={response[0].itemMonth } year={response[0].itemYear}></itemDate>

      <Item name={response[1].itemName}></Item>
      <itemDate day={response[1].itemDate} month={response[1].itemMonth } year={response[1].itemYear}></itemDate>

      <Item name={response[2].itemName}></Item>
      <itemDate day={response[2].itemDate} month={response[2].itemMonth } year={response[2].itemYear}></itemDate>

      <div className="App">Hello EveryOne</div>
      </Card>
    </div>
    
  );
}

export default App; 
