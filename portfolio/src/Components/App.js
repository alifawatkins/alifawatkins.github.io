import Header from "./Header";
import Main from "./Main";
import "../App.css"
import Footer from "./Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

function App() {
  library.add(fab)
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
