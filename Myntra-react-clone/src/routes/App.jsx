import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/FetchItems";


function App() {
 return (
      <>
      <Header/> 
      <fetchItems/>
     <Outlet/>
    <Footer></Footer>
    
      </>
    );
}
export default App;

