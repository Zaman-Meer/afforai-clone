/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import PromotionBanner from "./PromotionBanner";
import { ReactComponent as CheckIcon } from "../../assets/img/icons/check-icon.svg";

import laptopLanding1 from "../../assets/img/graphics/laptop-landing-1.png";
import laptopLanding3 from "../../assets/img/graphics/laptop-landing-3.png";
import { Link } from "react-router-dom";

const features = [
  "Summarize Key Findings",
  "Compare Between Documents",
  "Search For Answers",
  "Ask in Any Language",
];

const HeaderSection = () => {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) setShowSlider(true);
      else setShowSlider(false);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="py-4 container-fluid"
      css={css`
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
        padding: 0px 60px;
        @media (max-width: 768px) {
          padding: 0px 16px;
        }
      `}
    >
      <div
        className="d-flex flex-column"
        css={css`
          position: relative;
          overflow: hidden;
          gap: 100px;
          @media (max-width: 768px) {
            gap: 0;
          }
        `}
      >
        <div
          className="d-flex flex-column align-items-center"
          css={css`
            gap: 32px;
            line-height: 100%;
            z-index: 2;
            @media (max-width: 768px) {
              align-items: flex-start !important;
            }
          `}
        >
          <PromotionBanner />
          <div
            className="text-start text-md-center"
            css={css`
              color: rgb(34, 34, 34);
              font-weight: 600;
              font-size: 48px;
              line-height: 130%;
              max-width: 659px;
              @media (max-width: 768px) {
                margin-bottom: 0px;
                font-size: 40px;
                max-width: 343px;
              }
            `}
          >
            Your second brain for maximizing productivity
          </div>
          <div
            className="text-start text-md-center"
            css={css`
              color: rgb(82, 82, 82);
              font-weight: 400;
              font-size: 16px;
              line-height: 150%;
              max-width: 671px;
            `}
          >
            Afforai is an AI chatbot that searches, summarizes, and translates
            info from multiple sources to produce trustworthy research. Feed
            lengthy research documents to stacks of dry compliance requirements
            and extract the key findings you need.
          </div>
          {showSlider && (
            <div className="logos">
              <div className="logos-slide">
                {features?.map((feature, index: number) => (
                  <div
                    key={index}
                    className="d-inline-flex align-items-center"
                    css={css`
                      padding: 4px 6px;
                      gap: 4px;
                      border-radius: 4px;
                      border: 1px solid rgb(230, 230, 230);
                      background: rgb(250, 250, 250);
                    `}
                  >
                    <div
                      css={css`
                        line-height: 0px;
                      `}
                    >
                      <CheckIcon />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="logos-slide">
                {features?.map((feature, index: number) => (
                  <div
                    key={index}
                    className="d-inline-flex align-items-center"
                    css={css`
                      padding: 4px 6px;
                      gap: 4px;
                      border-radius: 4px;
                      border: 1px solid rgb(230, 230, 230);
                      background: rgb(250, 250, 250);
                    `}
                  >
                    <div
                      css={css`
                        line-height: 0px;
                      `}
                    >
                      <CheckIcon />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          )}
          {!showSlider && (
            <div
              className="d-flex justify-content-between"
              css={css`
                width: 816px;
                color: rgb(82, 82, 82);
                font-size: 13px;
                line-height: 100%;
              `}
            >
              {features?.map((feature, index: number) => (
                <div
                  key={index}
                  className="d-flex align-items-center"
                  css={css`
                    padding: 4px 6px;
                    gap: 4px;
                    border-radius: 4px;
                    border: 1px solid rgb(230, 230, 230);
                    background: rgb(250, 250, 250);
                  `}
                >
                  <div
                    css={css`
                      line-height: 0px;
                    `}
                  >
                    <CheckIcon />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          )}
          <div className="w-100 d-flex flex-shrink-1 align-content-center justify-content-md-center flex-md-row flex-column   gap-3 gap-md-4">
            <Link
              to="/signup"
              type="button"
              className="new-btn violet-fill btn btn-primary d-none d-md-flex"
              css={css`
                font-size: 16px;
                padding: 6px 28px;
                border-radius: 12px;
              `}
            >
              Try for free
            </Link>
            <Link
              to="/signup"
              type="button"
              className="new-btn violet-fill btn btn-primary  d-md-none"
              css={css`
                font-size: 16px;
                padding: 6px 28px;
                border-radius: 12px;
              `}
            >
              Get started
            </Link>
            <Link
              to="/pricing"
              type="button"
              className="new-btn gray btn btn-primary"
              css={css`
                font-size: 16px;
                padding: 6px 28px;
                border-radius: 12px;
              `}
            >
              View pricing
            </Link>
          </div>
        </div>
        <div
          css={css`
            z-index: 2;
            margin: 0px 72px;
          `}
        >
          <img
            src={laptopLanding1}
            className="img-fluid d-none d-md-block"
            width="100%"
            alt=""
          />
        </div>
        <div
          css={css`
            position: absolute;
            z-index: 1;
            bottom: 280px;
            width: 100%;
            border-radius: 28px;
            overflow: hidden;
          `}
        >
          <img
            src={laptopLanding3}
            className="img-fluid d-none d-md-block"
            width="100%"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
