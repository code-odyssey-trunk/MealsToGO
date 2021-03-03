import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List, Divider } from "react-native-paper";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [expanded, setExpanded] = useState(true);
  const { addToCart } = useContext(CartContext);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={item} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Idly" />
          <Divider />
          <List.Item title="Masala Dosa" />
          <Divider />
          <List.Item title="Porota & Beef" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={handlePress}
        >
          <List.Item title="Veg Meals" />
          <Divider />
          <List.Item title="Chicken Fried rice" />
          <Divider />
          <List.Item title="Chicken Biriyani" />
          <Divider />
          <List.Item title="Mutton Biriyani" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={handlePress}
        >
          <List.Item title="Veg Fried rice" />
          <Divider />
          <List.Item title="Chicken Fried rice" />
          <Divider />
          <List.Item title="Chicken Biriyani" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, item);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
