import { useState } from 'react';
import Navbar from './component/Navbar';
import "./App.css";
import MovieList from './component/MovieList';
import Add from './component/Add';
import { Route, Routes } from 'react-router-dom';
import Test from './component/Test';
import Test1 from './component/Test1';
import Login from './component/Login';
import PrivateRoute from './PrivateRoute';
import Description from './component/Description';


function App() {
  const [title,setTitle]=useState("");
  const [rate,setrate]=useState(1);
 const [movies,setmovies]=useState([
{ 
  id:1,
title:"Derrière les Barreaux",
description:"Jack Stone orchestre délibérément un braquage de banque raté",
posterURL: "https://images.6play.fr/v2/images/1584289/raw?blur=0&fit=scale_crop&format=jpeg&height=630&interlace=1&quality=60&width=1200&hash=5eff5243ea4c5fe976ead4e25303e54ffc51423e",
rate:4,
trailer:"https://www.youtube.com/embed/E1mU8xoyXes?si=F-l79uIvTl1y6P2W" 
},
{
  id:2,
  title:"Amazon Hell",
  description:"Trois frères et soeurs mènent une expédition en forêt amazonienne pour retrouver leur père disparu",
  posterURL: "https://picfiles.alphacoders.com/967/96762.jpg",
  rate:3,
  trailer:"https://www.youtube.com/embed/Rxuodeq-itE?si=-4a-Jk42_G6lyAMC" 
},
{
  id:3,
  title:"THE GANGSTERS",
  description:"Jason Statham & Ray Liotta In Superhit Action English Movie",
  posterURL: "https://fr.web.img3.acsta.net/pictures/13/12/27/17/02/415740.jpg",
  rate:2, 
  trailer:"https://www.youtube.com/embed/MFkKhRfuIN0?si=VaNnEDSL5auhelwA" 
},
{
  id:4,
  title:"Abyss Sharks",
  description:"De grands requins blancs attaquent un bateau de pêche et, à des kilomètres du rivage, les personnes à bord sont obligées de se battre pour sauver leur vie.",
  posterURL: "https://4.bp.blogspot.com/-tx0kcC0lLoQ/TdjDLOgNh3I/AAAAAAAAHE8/y6UNwIcdu2c/s1600/cover.jpg",
  rate:5, 
  trailer :"https://www.youtube.com/embed/XPWilQN66_4?si=3oLrabe8Hd3_YcWl"
}

 ]);
const AddMovie=(newmovie)=>{
  setmovies([...movies,newmovie]);
};
const getTitle=()=>{
  setTitle(title);
};
const getrate=rate=>{
  setrate(rate);
};

  return (
     <div>
      <Navbar getTitle={getTitle} getrate={getrate}/><br/>
      <Add Addmovie={AddMovie} />
      <Routes>

        <Route path="/movies" element={
<PrivateRoute isAuth={true}>
<MovieList movies={movies}  title={title} rate={rate}/>
</PrivateRoute> }/>
        {/* <Route path="/test/1" element={ <Test1 movies={movies}  title={title} rate={rate}/>}/> */}

        <Route path="/test" element = {<Test/>} >
             <Route path="1" element = {<Test1/>} /> 
        </Route>

         <Route path="/login" element = {<Login/>} /> 
         <Route path="/movies/:id" element = {<Description movies={movies}/>} /> 


       {/* <Route path="/test1" element = {<Test1/>} /> */}
      </Routes>
      <br/>
    </div>
  );
}


export default App