import React from "react";

import img from "@/assets/images/request_01.png";

interface ResponseProps {}

export const Response: React.FC<ResponseProps> = (props) => {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="w-full h-full" style={styles}></div>
  );
};
