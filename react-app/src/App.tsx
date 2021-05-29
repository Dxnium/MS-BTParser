import { Header } from "./components/Header"
import './styles/styles.scss'
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import { Provider } from "react-redux";
import { store } from './redux/store';


const App = () => {

  return (
    <Provider store={store}>
      <Header/>
      <Body/>
      <Footer/>
    </Provider>
  )
}


export default App;