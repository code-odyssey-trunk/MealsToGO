import React from "react";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";

export const RestaurantDetailsScreen = ({ route }) => {
  const { item } = route.params;
  const [expanded, setExpanded] = React.useState(true);

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
          <List.Item title="Masala Dosa" />
          <List.Item title="Porota & Beef" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={handlePress}
        >
          <List.Item title="Veg Meals" />
          <List.Item title="Chicken Fried rice" />
          <List.Item title="Chicken Biriyani" />
          <List.Item title="Mutton Biriyani" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={handlePress}
        >
          <List.Item title="Veg Fried rice" />
          <List.Item title="Chicken Fried rice" />
          <List.Item title="Chicken Biriyani" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
