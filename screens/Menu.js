import React from "react";
import MCard from "../components/MCard";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";

const menuItems = [
  {
    title: "Paneer Curry",
    price: 150,
    image: require("../assets/paneer.jpg"),
  },
  {
    title: "Mushroom Curry",
    price: 150,
    image: require("../assets/mushroom.jpg"),
  },
  {
    title: "Mushroom masala",
    price: 150,
    image: require("../assets/mushroom.jpg"),
  },
];

function Menu(props) {
  return (
    <View>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <MCard
            title={item.title}
            price={item.price}
            image={item.image}
            onPress={console.log("hi")}
          />
        )}
      />
    </View>
  );
}

export default Menu;
