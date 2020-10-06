import axios from "axios";
import qs from "qs";

const JOKES_API_ENDPOINT = "http://api.icndb.com/jokes";

const getJokes = async ({
  numberOfJokes = 1,
  firstname = "",
  lastname = "",
}) => {
  const query = qs.stringify({ firstName: firstname, lastName: lastname });
  const response = await axios.get(
    `${JOKES_API_ENDPOINT}/random/${numberOfJokes}?${query}`
  );
  const allJokes = await response.data;
  return allJokes.value;
};

export { getJokes };
