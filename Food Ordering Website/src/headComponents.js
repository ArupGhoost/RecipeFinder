import styled from 'styled-components'; 


 const Header = styled.div `
color:white;
background-color: black;
display: flex;
align-items : center;
justify-content: space-between;
flex-direction: row;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;

`;

 const AppNameComponent = styled.div `
   display: flex;
   align-items: center;

`;

 const SearchComponent = styled.div `
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;

`;

 const SearchInput = styled.input `
border: none;
outline: none;
margin-left: 10px;
font-size: 13px;
font-weight: 500;
`;

export {Header, AppNameComponent, SearchComponent, SearchInput};