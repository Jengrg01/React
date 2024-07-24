import './App.css';
// import First from './First';
// import Second from './Second';
// import { Test,Demo } from './Test';
// import Header from './component/Header';
// import Footer from './component/Footer';
import Myroute from './Myroute';
import {legacy_createStore} from 'redux';
import {Provider} from 'react-redux';
import cartFunction from './redux/reducer/cartFunction';
// always write the components in uppercase otherwise casing error is shown when renamed
function App() {
  const store = legacy_createStore(cartFunction)
  return (
    // <> </> is a fragment required to use multiple queries
    <>
      {/* seperate content has been passed even for same component through the use of props. Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child. */}
      {/* <h1>First Heading</h1>
    <First context_content="Second"/>
    <Second button_content = "Register"/>
    <First context_content="Third"/>
    <Second button_content = "Log"/>
     <First context_content="Forth"/>
     <Second button_content = "Sign In"/>
     <Test/>
     <Demo/>
     <Header/> */}
      <Provider store={store}> 
        <Myroute />
      </Provider>
    </>
  );
}

export default App;
