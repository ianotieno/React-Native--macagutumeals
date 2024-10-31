import React,{useContext,useEffect, useState} from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer=styled.View`
padding:${(props)=>props.theme.space[3]};
`;

export const Search =() =>{
   
    const {keyword, search} =useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]= useState(keyword);
    useEffect(()=>{
        search(searchKeyword)
    },[])
   return (
    <SearchContainer>
    <Searchbar placeholder='search'
     value={searchKeyword}
     onSubmitEditing={()=>{
        search(searchKeyword)
     }}
     onChangeText={(text)=>{
        if(!text.length){
          
        }
        setSearchKeyword(text)
     }}
    />
      </SearchContainer>
      )
};