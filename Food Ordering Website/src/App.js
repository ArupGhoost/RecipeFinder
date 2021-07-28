import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';


import {
         Header, 
         AppNameComponent, 
         SearchComponent, 
         SearchInput
}from './headComponents';
  
import  RecipeComponent , {
  RecipeListContainer
} from './RecipeComponent';



 const Container = styled.div `
  display: flex;
  flex-direction: column;
  
`;



const API_ID = '3661acfc';
const APP_KEY = 'b6abe2d99aa29d8c12fe544d0f00c371';


function App() {
   const[timeoutId, updatetimeoutId] = useState(); //state management for onTextChange;
   const [recipeList, updaterecipeList] = useState([]);
   
   const fetchRecipe = async (searchString) => {
      const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${APP_KEY}`)
      .then((response) => {
          updaterecipeList(response.data.hits);
      }).catch((err) => {
        console.log('Error', err);
      });
   };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);  //debouncing is done(first to complete to not get errors)

     const timeOut = setTimeout(() => fetchRecipe(event.target.value) , 500) ;
     updatetimeoutId(timeOut)
  }


    
  return (
    <div className="App">
          <Container>
            <Header>
           <AppNameComponent>
              <FastfoodIcon style={{fontSize:'28px'}}/>
                  Recipe Finder
           </AppNameComponent>
           <SearchComponent>
             <SearchIcon style={{color:'black'}}/>
             <SearchInput placeholder='Search Recipe' onChange={onTextChange}  />
           </SearchComponent>
            </Header>
            <RecipeListContainer>
                  {recipeList?.length ?  recipeList.map((recipeObj) => <RecipeComponent recipeObj={recipeObj}/>) : 'Stay Healthy Stay Foody.'}
            </RecipeListContainer>        
          </Container>
    </div>
  );
}

export default App;
