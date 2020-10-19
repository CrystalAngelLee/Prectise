import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import Avatar from "./avatar";
import ScrollBar from "./scrollbar";
import BackToTop from "./back-to-top";
import Test from "./customtest";

const requestModule = {
  AVATAR: Avatar,
  SCROLLBAR: ScrollBar,
  BACKTOTOP: BackToTop,
  TEST: Test,
};

function Home() {
  const [selectKey, setSelectKey] = useState("scrollBar");
  const Comp = requestModule[selectKey.toUpperCase()] || null;

  const onSelect = useCallback((key, data) => {
    setSelectKey(key);
  }, []);

  return (
    <Layout onSelect={onSelect} selectKey={selectKey}>
      {Comp ? <Comp /> : null}
    </Layout>
  );
}

export default Home;
