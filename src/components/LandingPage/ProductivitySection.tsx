/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import laptopLanding5 from "../../assets/img/graphics/laptop-landing-5.png";
import mobileLanding5 from "../../assets/img/graphics/mobile-landing-5.png";

const ProductivitySection = () => {
  return (
    <div
      className="container-fluid"
      css={css`
        max-width: 1600px;
        margin: 160px auto;
        @media (max-width: 768px) {
          margin: 80px auto;
        }
      `}
    >
      <div
        className="row"
        css={css`
          margin-bottom: 80px;
          @media (max-width: 768px) {
            margin-bottom: 40px;
          }
        `}
      >
        <div className="d-flex flex-column justify-content-center col">
          <div
            className="d-flex flex-column align-items-md-center container"
            css={css`
              gap: 24px;
            `}
          >
            <div>
              <div
                className="d-inline-flex justify-content-center align-items-center"
                css={css`
                  padding: 6px 16px;
                  border-radius: 8px;
                  background: rgb(250, 250, 250);
                  border: 2px solid rgb(128, 54, 255);
                  color: rgb(128, 54, 255);
                  font-size: 13px;
                `}
              >
                10x your productivity
              </div>
            </div>
            <h2
              className="text-left text-md-center"
              css={css`
                max-width: 556px;
                color: rgb(34, 34, 34);
                font-weight: 600;
                font-size: 36px;
                line-height: 130%;
                margin-bottom: 0px;
              `}
            >
              Save yourself from stress &amp; streamline your workflow
            </h2>
            <div
              className="text-left text-md-center"
              css={css`
                max-width: 556px;
                color: rgb(82, 82, 82);
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
              `}
            >
              The average worker spends 9 hours per week looking through &amp;
              gathering information from thick stacks of documents. With
              Afforai, you can save yourself 8 hours per week (plus a lot of
              headaches).
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          css={css`
            margin: 0px auto;
            width: 75%;
            max-width: 1440px;
            @media (max-width: 768px) {
              width: 100%;
            }
          `}
        >
          <img
            src={laptopLanding5}
            className="img-fluid d-none d-md-block"
            width="100%"
            alt=""
          />
          <img
            src={mobileLanding5}
            className="img-fluid d-md-none"
            width="100%"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;
