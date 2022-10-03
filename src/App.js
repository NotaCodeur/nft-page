import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      {/* <div className='navbar'>
        <Navbar />
      </div> */}

      <div className='main'>
        <Layout>
          <div style={{ background: '#f1f2f6' }} className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/app'>
                {/* <App /> */}
              </Route>
            </Switch>
          </div>
        </Layout>

      </div>





      <div className='footer'>

        <div style={{ height: '100px', paddingTop: '40px' }}>
          <p>
            This is a footer  <code>src/App.js</code> we can put company info here.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            policy
          </a>
        </div>

      </div>


    </div>
  );
}

export default App;
