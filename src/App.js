
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import Lists from './components/Lists';
import Transaction from './components/Transaction';
import {Context} from './Context/Context';
function App() {
  return (
    <>
    <Context>
    <div className="com">
    <Header/>
    <div className="balance">
      <Balance/>
      <Lists/>
      <Transaction/>
    </div></div>
    </Context> </>
  );
}

export default App;
