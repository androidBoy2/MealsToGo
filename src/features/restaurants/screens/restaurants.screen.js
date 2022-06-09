import React from "react"
import { StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native"
import RestaurantInfoCard from "../components/restaurant-info-card.component"

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
  `

  
const SearchbarContainer = styled.View`
  background-color: white;
  padding: 16px;
`

const RestaurantListContainer = styled.View`
  background-color: blue;
  flex: 1;
  padding: 16px;
`

const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchbarContainer>
        <Searchbar placeholder="Search"/>
      </SearchbarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  )
}

export default RestaurantsScreen