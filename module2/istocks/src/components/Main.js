import {Route,Routes} from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import Home from './Home';
import Stock from './Stock';

function Main(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/stock/:symbol" element={<Stock />}/>
                <Route path="/stocks" element={<Dashboard />}/>
            </Routes>
        </div>
    );
}

export default Main;