import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";

import { Search } from "../components/search.component";
import { RestaurantList } from "../components/restaurant-list.styles";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const ErrorPlace = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const NoPlace = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { error } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={colors.brand.primary} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {error ? (
        <ErrorPlace>
          <NoPlace>
            We couldn't understand the place, or there are no restaurants in
            this place. Try with a diferent place
          </NoPlace>
        </ErrorPlace>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RestaurantDetails", { item })}
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
