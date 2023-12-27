/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/commons/TopNavBar";

const MainLayout = () => {
  return (
    <div
      css={css`
        background-color: rgb(250, 250, 250);
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      `}
    >
      <TopNavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
