import { useEffect, useState } from "react";
import CarouselComponent from "./CarouselComponent";
const apiUrls = [
  "https://api.giphy.com/v1/gifs/search?api_key=UZjmXlyto7XynIKOdACv5BRyGBGoCi5F&q=under%20construction&limit=1&offset=0&rating=g&lang=en",
  "https://api.giphy.com/v1/gifs/search?api_key=UZjmXlyto7XynIKOdACv5BRyGBGoCi5F&q=coffee&limit=1&offset=0&rating=g&lang=en",
  "https://api.giphy.com/v1/gifs/search?api_key=UZjmXlyto7XynIKOdACv5BRyGBGoCi5F&q=tea&limit=3&offset=0&rating=g&lang=en",
];
const Header = () => {
  const [gifUrls, setGifUrls] = useState({});
  const getGifUrl = (url) => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((apiData) => {
          let urlObject;
          if (url.includes("construction")) {
            urlObject = { construction: apiData.data[0].images.original.url };
          } else if (url.includes("coffee")) {
            urlObject = { coffee: apiData.data[0].images.original.url };
          } else if (url.includes("tea")) {
            urlObject = { tea: apiData.data[2].images.original.url };
          }
          setGifUrls((prevState) => {
            return { ...prevState, ...urlObject };
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiUrls.map((url) => {
      return getGifUrl(url);
    });
  }, []);
  return (
    <div>
      <div className="flex-box">
        <h3>
          Apologies that <br /> my portfolio is not ready yet 😓
        </h3>
        <img
          src={gifUrls.construction}
          alt="under_construction"
          className="gifs"
        />
      </div>
      <h3>But....wait a second ✋</h3>
      <h3>
        As you're here, <br /> let me serve you with something you prefer ☕
      </h3>
      <CarouselComponent firstImg={gifUrls.coffee} secondImg={gifUrls.tea} />
      <h3>
        While enjoying your virtual beverage, I suggest you to take a closer
        look at the sidebar and try something interesting ✨
      </h3>
    </div>
  );
};

export default Header;
