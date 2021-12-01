import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import ProjectsDetails1 from './components/ProjectsDetails1/ProjectsDetails1';
import ProjectsDetails2 from './components/ProjectsDetails2/ProjectsDetails2';
import ProjectsDetails3 from './components/ProjectsDetails3/ProjectsDetails3';
import ProjectsDetails4 from './components/ProjectsDetails4/ProjectsDetails4';
import ProjectsDetails5 from './components/ProjectsDetails5/ProjectsDetails5';
import ProjectsDetails6 from './components/ProjectDetails6/ProjectsDetails6';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>

          <Route path="/about" element={<AboutMe></AboutMe>}>
          </Route>

          <Route path="/blog" element={<Blog></Blog>}>
          </Route>

          <Route path="/projects1" element={<ProjectsDetails1></ProjectsDetails1>}>
          </Route>
          <Route path="/projects2" element={<ProjectsDetails2></ProjectsDetails2>}>
          </Route>
          <Route path="/projects3" element={<ProjectsDetails3></ProjectsDetails3>}>
          </Route>
          <Route path="/projects4" element={<ProjectsDetails4></ProjectsDetails4>}>
          </Route>
          <Route path="/projects5" element={<ProjectsDetails5></ProjectsDetails5>}>
          </Route>
          <Route path="/projects6" element={<ProjectsDetails6></ProjectsDetails6>}>
          </Route>

          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
