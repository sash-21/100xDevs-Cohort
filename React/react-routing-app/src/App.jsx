import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Landing /> } />
          <Route path='/jee/class-11-program' element={<Class11Program /> } />
          <Route path='/jee/class-12-program' element={<Class12Program /> } />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div style={{height: "100vh", background: "green"}}>
    <Header />
    <div style={{height: "90vh", background: "red"}}>
      <Outlet />
    </div>
    About Us | Contact | Footer
  </div>
}

function Header() {
  return <div>
    <Link to={"/"}>Allen</Link> | 
    <Link to={"/jee/class-11-program"}>Class 11</Link> | 
    <Link to={"/jee/class-12-program"}>Class 12</Link>
  </div>
}

function Landing() {
  return <div>
    Allen Coaching
  </div>
}

function Class11Program() {
  return <div>
    JEE programs for class 11
  </div>
} 

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div>
    JEE programs for class 12
    <button onClick={redirectUser}>Redirect to Landing Page</button>
  </div>
}

function ErrorPage() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return <div>
    Content Not Found!
    <button onClick={redirectUser }>Go Back to Landing</button>
  </div>
}

export default App
