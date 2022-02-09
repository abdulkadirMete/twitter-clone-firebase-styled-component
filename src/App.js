import { Aside } from './components/Widgets';
import { Feed } from './components/Content';
import { Sidebar } from './components/Sidebar';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyle/>
    <div className='container'>
    <Sidebar></Sidebar>
    <Feed></Feed>
    <Aside></Aside>
    </div>

    </>
  );
}

export default App;
