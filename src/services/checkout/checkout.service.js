import createStripe from "stripe-client";
import { host } from "../../utils/env";
const liveHost = "https://us-central1-mealstogo-1a733.cloudfunctions.net";

const stripe = createStripe(
  "pk_test_51IQSJwLE69I2rAl5H6JuUWJ50VGSluT9AF5CT0ODlW71SeTdQB3G8AUTgXWgJs87qkcVXVn6k2Dqldn2uqE3TAGO00aqkaYui7"
);

export const cardTokenRequest = (card) => stripe.createToken(card);

export const payRequest = (token, amount, name) => {
  console.log("token, amount, name", token + " - " + amount + " - " + name);
  return fetch(`${liveHost}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
