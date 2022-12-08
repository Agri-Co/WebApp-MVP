import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const token = process.env.API_CONCEPT_TOKEN;

const getHumidity = async (code: string) => {
  return axios
    .get(
      `https://api.meteo-concept.com/api/forecast/nextHours?token=1e3b29ef365797617089bfe9337486ec8ea65d3e73085946851b4fef738991e1&insee=${code}`
    )
    .then((response) => {
      console.log("Humidity is at", response.data.forecast[0].rh2m + "%");
      return response.data.forecast[0].rh2m + "%";
    })
    .catch((error) => {
      console.log(error);
      return "[GETHUMIDITY] Axios request failed";
    });
};

const checkRain = async (code: string) => {
  return axios
    .get(
      `https://api.meteo-concept.com/api/forecast/daily?token=${token}&insee=${code}`
    )
    .then((response) => {
      const probability = response.data.forecast[0].probarain;
      const rr10 = response.data.forecast[0].rr10;
      const rr1 = response.data.forecast[0].rr1;
      console.log("Rain probability in the nextHours is at", probability + "%");
      console.log("rr10", rr10);
      console.log("rr1", rr1);
      return [probability, rr10, rr1] as const;
    })
    .catch((error) => {
      console.log(error);
      return "[CHECKRAIN] Axios request failed";
    });
};

router.get("/", async (req, res) => {
  const humidity = await getHumidity("75056");
  const [probability, rr10, rr1] = await checkRain("75056");
  res.status(200).send(String(humidity));
});

export default router;
