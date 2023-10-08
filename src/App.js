import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import Pagination from './Components/Pagination';
import Stories from './Components/Stories';

function App() {
  return (
    <>
      <div className='App'>
        <h3 className='py-3'>Tech News On The Go</h3>
        <Search />
        <Pagination />
        <Stories />
      </div>
    </>
  );
}

export default App;
