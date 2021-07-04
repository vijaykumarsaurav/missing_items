import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    
        <a
          className="App-link"
          href="https://sass-lang.com/guide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Sass Basics
        </a>
      </header>

      <div> 

      <nav>
        <ui>
              <li><a href=""> Nesting</a></li>
              <li>Nesting1 </li>
              <li>2Nesting2</li>
            </ui>
        </nav>


      <p className="mybase">Variables & Modules </p>

      <div className="info"> 
         <p >Mixins </p>
       </div>

       <div className="success"> 
         <p >Mixins success </p>
       </div>
       <div className="alert"> 
         <p >Mixins alert</p>
       </div>

    

       <div className="info1"> 
         <p >Extend/Inheritance Extend/Inheritance  </p>
       </div>

       <div className="success1"> 
         <p >Extend/Inheritance  success </p>
       </div>
       <div className="alert1"> 
         <p >Extend/Inheritance  alert</p>
       </div>

       <div className="error1"> 
         <p >Extend/Inheritance alert</p>
       </div>


      <article role="main"> 
       Operators
      </article>

      <article role="complementary"> 
        Operators complementary
      </article>
  
       
      </div>
    </div>
  );
}

export default App;
