import styled from 'styled-components';
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

 const RecipeListContainer = styled.div `
    display: flex;
    flex-direction:row;
    padding: 30px;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
`;

 const RecipeContainer = styled.div `
      display: flex;
      flex-direction: column;
      padding: 30px;
      width: 300px;
      box-shadow: 0 3px 10px 0 #aaa;
     
`;

 const CoverImage = styled.img `
     height: 200px;
     object-fit: cover;
`;
 const RecipeName = styled.span `
     font-size: 16px;
     font-weight: 700;
     color: black;
     margin: 10px 0;
     font-family: Sans-Serif;
`;
 const IngredientText = styled.span `
     font-size: 16px;
     border: solid 1px green;
     color: black;
     margin-bottom: 12px;
     font-family: Sans-Serif;
     cursor: pointer;
     padding: 10px 15px;
     border-radius: 4px;
     color: green;
     text-align: center;
`;
 const SeeCompleteRecipe = styled(IngredientText) `
      color: red;
      border: solid 1px red;
     
`;



const RecipeComponent = (props) => {
     const [open, setOpen] = useState(false);  //for dialog content state management
     console.log(props);
     const { recipeObj } = props;


     return (
          <>
          <Dialog open={open}>
               
               <DialogTitle id="responsive-dialog-title">Ingredients</DialogTitle>
               <DialogContent>
                    <table>
                         <thead>
                              <th>Ingredients</th>
                              <th>Weight</th>
                         </thead>
                         <tbody>
                              {recipeObj.recipe.ingredients.map((ingredientObj) =>{
                                   return(
                                        <>
                                   <tr>
                                        <td >{ingredientObj.text}</td>
                                        <td >{ingredientObj.weight}</td>
                                   </tr>
                                   </>
                              )} )}
                              
                         </tbody>
                    </table>
               </DialogContent>
               <DialogActions>
                    <IngredientText onClick={() => window.open(recipeObj.recipe.url)}>See More</IngredientText>
                    <SeeCompleteRecipe onClick={() => setOpen('')}>Close</SeeCompleteRecipe>
               </DialogActions>
          </Dialog>
           <RecipeContainer>
               <CoverImage src={recipeObj.recipe.image} alt=''/>
              <RecipeName>{recipeObj.recipe.label}</RecipeName>
              <IngredientText onClick={() => setOpen(true)}>Ingredients</IngredientText>
               <SeeCompleteRecipe onClick={() => window.open(recipeObj.recipe.url)}>See Complete Recipe</SeeCompleteRecipe>
           </RecipeContainer>
          </>
     )
}

export default RecipeComponent;

export {RecipeListContainer, RecipeContainer, CoverImage, RecipeName, IngredientText, SeeCompleteRecipe};
