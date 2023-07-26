import React, { useEffect, useState } from "react";

//use create-react app

//hooks or class-
//use useState to establish an initial empty array value and a function to change/loop through

const UnsplashPhotoCollage = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    //asyn await, but if using axios, json is parsed - skips 1 step

    const fetchPhotos = async () => {
      try {
        const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
        const response = await fetch(
          `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`
        );
        const data = await response.json();

        console.log(data, "DATA");
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="photo-collage">
      {photos.map((photo) => (
        <img className="collage-image" key={photo.id} src={photo.urls.small} />
      ))}
    </div>
  );
};

export default UnsplashPhotoCollage;
