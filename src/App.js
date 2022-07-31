import data from './data.json'
import './Components/Style.css';
import Jobs from './Components/Jobs';

function App() {
  return (
    <div>
      <div className='header_container'>
      </div>
       <Jobs data={data}/>
    </div>
  );
}

export default App;
