/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import CheckCircle from "../../assets/img/icons/check-circle.svg";
import laptopLanding4 from "../../assets/img/graphics/laptop-landing-4.png";

const DocumentSection = () => {
  return (
    <div
      className="container-fluid"
      css={css`
        max-width: 1600px;
        margin: 128px auto 160px;
        @media (max-width: 768px) {
          margin: 48px auto 64px;
          gap: 24px;
        }
      `}
    >
      <div className="row">
        <div className="px-0 pe-md-5 d-flex flex-column justify-content-center col-md-5 offset-md-1">
          <div className="px-3 pe-md-5 container">
            <h2
              className="mb-3"
              css={css`
                color: rgb(34, 34, 34);
                font-weight: 600;
                font-size: 36px;
                line-height: 130%;
              `}
            >
              Say goodbye to long, tiresome documents
            </h2>
            <div
              className="mb-4 me-3 me-md-5"
              css={css`
                color: rgb(82, 82, 82);
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
              `}
            >
              Afforai seamlessly translates documents, files, spreadsheets &amp;
              websites, filtering out what you don’t need &amp; answering your
              specific questions within seconds.
            </div>
            <div className="d-flex flex-column gap-3">
              <h3
                className="d-flex align-items-center"
                css={css`
                  color: rgb(3, 204, 59);
                  font-weight: 500;
                  margin-bottom: 0px;
                `}
              >
                <img
                  src={CheckCircle}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span
                  css={css`
                    font-size: 16px;
                  `}
                >
                  A whip smart research assistant
                </span>
              </h3>
              <h3
                className="d-flex align-items-center"
                css={css`
                  color: rgb(3, 204, 59);
                  font-weight: 500;
                  margin-bottom: 0px;
                `}
              >
                <img
                  src={CheckCircle}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />{" "}
                <span
                  css={css`
                    font-size: 16px;
                  `}
                >
                  We speak every language
                </span>
              </h3>
              <h3
                className="d-flex align-items-center"
                css={css`
                  color: rgb(3, 204, 59);
                  font-weight: 500;
                  margin-bottom: 0px;
                `}
              >
                <img
                  src={CheckCircle}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span
                  css={css`
                    font-size: 16px;
                  `}
                >
                  Reliable data citation for answers
                </span>
              </h3>
              <h3
                className="d-flex align-items-center"
                css={css`
                  color: rgb(3, 204, 59);
                  font-weight: 500;
                  margin-bottom: 0px;
                `}
              >
                <img
                  src={CheckCircle}
                  className="me-3"
                  alt="checkmark"
                  height="24"
                />
                <span
                  css={css`
                    font-size: 16px;
                  `}
                >
                  Fort-Knox level data security
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-5 mt-md-0 col-md-5">
          <picture>
            <source srcSet={laptopLanding4} type="image/webp" />
            <img
              src={laptopLanding4}
              className="img-fluid"
              alt="Afforai masters the documents you upload"
              css={css`
                width: 100%;
              `}
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default DocumentSection;
