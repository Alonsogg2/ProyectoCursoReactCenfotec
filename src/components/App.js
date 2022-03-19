import {Provider} from 'react-redux'
import store from '../redux/store'
import Footer from "./Main/Footer";
import Header from "./Main/Header";
import Main from "./Main/Main";
import NavbarApp from "./Main/NavbarApp";
function App() {
  return (
    <>
    <Provider store={store}>
      <Header/>
      <NavbarApp/>
      <Main/>
      <Footer/>
    </Provider>
    </>
    
  )
}

export default App;
