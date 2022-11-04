import React, { useContext, useState } from "react";

import { createContext } from "react";

export const Producttopcontex = createContext();
const Context = ({ children }) => {
  const [data, setData] = useState({
    username: "",
    imgurl: "",
    name: "",
    password:"",
  });
  const [valueEditor, setValueEditor] = useState('');
  const [imgurl, setimgurl] = useState('');
  const [title, settitle] = useState('ok');
  const id ="";
  const [path,seTpath]=useState('');
  const [active,seTactive]=useState('false');
  return (
    <Producttopcontex.Provider
      value={{
        data,
        setData,
        valueEditor,
        setValueEditor,
        imgurl,
        setimgurl,
        title,
        settitle,
        id,
        path,
        seTpath,
        active,
        seTactive
      }}
    >
      {children}
    </Producttopcontex.Provider>
  );
};
export default Context;
