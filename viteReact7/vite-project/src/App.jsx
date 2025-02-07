import Hello from "./components/Hello";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

export default function App(props) {
return (
<div className= 'App'>

  <Hello/>
  <Navigation/> 
<Hero/>
<Body/> 
<Footer/>    
</div>
);
}

//Log to Console
console.log('Hello console');




