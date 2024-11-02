import React,{useContext,useEffect, useState} from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native"
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer=styled.View`
padding:${(props)=>props.theme.space[3]};
positin:absolute;
z-index:999;
top:30px;
width:100%;
`;

export const Search =() =>{
   
    const {keyword, search} =useContext(LocationContext);
    const [searchKeyword,setSearchKeyword]= useState(keyword);
    useEffect(()=>{
        search(keyword)
    },[keyword])
   return (
    <SearchContainer>
    <Searchbar 
    placeholder='search'
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