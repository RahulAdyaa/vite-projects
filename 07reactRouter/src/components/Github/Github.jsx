import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/RahulAdyaa")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="text-center m-5 bg-gray-600 text-white text-3xl rounded-3xl p-0.5">
        Github followers:{data.followers}
      </div>
      <div className="text-center m-5 bg-gray-600 text-white text-3xl rounded-3xl p-0.5">
        Github following:{data.following}
      </div>
    </>
  );
}

export default Github;
