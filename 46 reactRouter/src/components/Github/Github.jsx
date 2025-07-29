// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/mahdimonir")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github follower: {data.followers}
      <img
        className="rounded-full mx-auto"
        src={data.avatar_url}
        alt="Git Profile"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = fetch("https://api.github.com/users/mahdimonir");
  return (await response).json();
};
