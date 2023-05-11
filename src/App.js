import { useSelector } from 'react-redux';
import PublicRouter from './routes/Public';
import PrivateRouter from './routes/Private';

function App() {
  const auth = useSelector(state=>state.auth.token);

  return auth?<PrivateRouter/>:<PublicRouter/>;
}

export default App;
