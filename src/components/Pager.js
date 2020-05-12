import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, AsyncStorage } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { List } from "./List";

export const Pager = (props) => {
  //let listOfDates = AsyncStorage.getAllKeys((e,keys)=>console.log(keys))
  const [dates, setDates] = useState([]);


  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;


  useEffect(() => {
    const getDates = async () => {
      if (dates.length === 0) {
        let listOfDates = await AsyncStorage.getAllKeys()
        console.log(listOfDates)
        if (listOfDates !== null && listOfDates.length > 0) {
          setDates(listOfDates);
        } else {
          setDates([today])
        }
      }
    };
    getDates()

    return ()=>(true)
  }, []);

  let content = (
    <View  >
      <List
        navigation={props.navigation}
        />
    </View>
  )

  if (dates && dates.length > 0) {
    content = (
      <ViewPager style={styles.viewPager} initialPage={dates.length - 1}>
          {dates.map((date, index)=>{  
          return(
            <View key={index.toString()} >
              <List
                navigation={props.navigation}
                today={date.toString()}
              />
            </View>
          )
        })}
      </ViewPager>
    )
  } 

  return (
     content
  );

  }


const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  })
