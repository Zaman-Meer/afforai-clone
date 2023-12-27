/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import laptopLanding2 from "../../assets/img/graphics/laptop-landing-2.png";

const LoveByUserSection = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      css={css`
        max-width: 1600px;
        margin: 100px auto 128px;
        gap: 24px;
        @media (max-width: 768px) {
          margin: 48px auto 64px !important;
        }
      `}
    >
      <div
        className="text-center"
        css={css`
          color: rgb(82, 82, 82);
          font-size: 16px;
        `}
      >
        Loved by{" "}
        <span
          css={css`
            color: rgb(128, 54, 255);
          `}
        >
          20,000+
        </span>{" "}
        users around the world
      </div>
      <img
        src={laptopLanding2}
        alt="users"
        className="img-fluid"
        width="336"
        height="48"
      />
    </div>
  );
};

export default LoveByUserSection;
