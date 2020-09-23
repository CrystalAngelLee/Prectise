import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import Avatar from "./avatar";
import ScrollBar from "./scrollbar";

const requestModule = {
  AVATAR: Avatar,
  SCROLLBAR: ScrollBar,
};

function Home() {
  const [selectKey, setSelectKey] = useState("scrollBar");
  const Comp = requestModule[selectKey.toUpperCase()] || null;

  const onSelect = useCallback((key, data) => {
    console.log(key, data);
    setSelectKey(key);
  }, []);

  return (
    <Layout onSelect={onSelect} selectKey={selectKey}>
      {Comp ? <Comp /> : null}
    </Layout>
  );
}

export default Home;
