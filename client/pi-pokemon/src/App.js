import { Route, Switch} from "react-router-dom";
import Create from "./views/create/create.component";
import Detail from "./views/detail/detail.component";
import Home from "./views/home/home.component";
import Landing from "./views/landing/landing.component";
import Types from "./views/types/types.components";
import About from "./views/about/about"
import './App.css';


function App() {
  return (
  <div className="App">
  <Switch>
  <Route exact path="/" component={Landing} />
  <Route exact path="/home" component={Home} />
   <Route path="/types" component={Types} />
  <Route path="/create" component={Create} />
  <Route path="/pokemon/:id" component={ Detail }/>
  <Route path="/about" Component= { About } />
</Switch>
</div>
);
  }


export default App;
