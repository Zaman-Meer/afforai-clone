/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import laptopLanding6 from "../../assets/img/graphics/laptop-landing-6.png";
import laptopLanding7 from "../../assets/img/graphics/laptop-landing-7.png";
import laptopLanding8 from "../../assets/img/graphics/laptop-landing-8.png";
import laptopLanding9 from "../../assets/img/graphics/laptop-landing-9.png";
import laptopLanding10 from "../../assets/img/graphics/laptop-landing-10.png";
import mobileLanding6 from "../../assets/img/graphics/mobile-landing-6.png";
import mobileLanding7 from "../../assets/img/graphics/mobile-landing-7.png";
import mobileLanding8 from "../../assets/img/graphics/mobile-landing-8.png";
import mobileLanding9 from "../../assets/img/graphics/mobile-landing-9.png";
import mobileLanding10 from "../../assets/img/graphics/mobile-landing-10.png";

const ChooseUs = () => {
  return (
    <div
      className="container-fluid"
      css={css`
        max-width: 1600px;
        margin: 160px auto;
        @media (max-width: 767px) {
          margin: 80px auto;
        }
      `}
    >
      <div
        className="row"
        css={css`
          margin-bottom: 64px;
          @media (max-width: 767px) {
            margin-bottom: 40px;
          }
        `}
      >
        <div className="d-flex flex-column justify-content-center col">
          <div
            className="d-flex flex-column align-items-center container"
            css={css`
              gap: 24px;
            `}
          >
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
              Why choose us?
            </div>
            <h2
              className="text-center"
              css={css`
                color: rgb(34, 34, 34);
                font-weight: 600;
                font-size: 36px;
                line-height: 100%;
                margin-bottom: 0px;
              `}
            >
              Built for the user
            </h2>
            <div
              className="text-center"
              css={css`
                max-width: 417px;
                color: rgb(82, 82, 82);
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
              `}
            >
              Afforai is where exceptional customer focus meets exceptional
              technology.
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        css={css`
          padding-bottom: 0.5rem;
        `}
      >
        <div
          className="d-flex col-md-4 offset-md-1"
          css={css`
            padding-right: 0.5rem;
            width: 35%;
            @media (max-width: 767px) {
              padding-right: 0;
              padding-bottom: 0.5rem;
              width: 100%;
            }
          `}
        >
          <div
            className="d-flex flex-column rounded-4"
            css={css`
              border: 1px solid rgb(230, 230, 230);
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background: rgb(245, 245, 245);
                border-bottom: 1px solid rgb(230, 230, 230);
              `}
            >
              <picture className="d-none d-md-block">
                <source srcSet={laptopLanding6} type="image/webp" />
                <img
                  src={laptopLanding6}
                  className="img-fluid"
                  alt="Afforai supports multiple languages"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
              <picture className="d-md-none">
                <source srcSet={mobileLanding6} type="image/webp" />
                <img
                  src={mobileLanding6}
                  className="img-fluid"
                  alt="Afforai supports multiple languages"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span
                  css={css`
                    font-size: 16px;
                    color: rgb(34, 34, 34);
                    font-weight: 500;
                  `}
                >
                  Cross Language Querying
                </span>
                <div
                  className="d-flex align-items-center"
                  css={css`
                    padding: 0.25rem 0.5rem;
                    border-radius: 20px;
                    background: rgb(239, 230, 255);
                    color: rgb(96, 4, 255);
                    font-size: 9px;
                    font-weight: 500;
                    height: 16px;
                  `}
                >
                  <span>NEW</span>
                </div>
              </div>
              <div
                css={css`
                  font-size: 12px;
                  color: rgb(82, 82, 82);
                `}
              >
                Afforai is able to translate your documents to more than 100
                languages, meaning wherever you’re from, you can be assured we
                can help.
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex col-md-6"
          css={css`
            padding-left: 0.5rem;
            width: 48.3333%;
            @media (max-width: 767px) {
              padding-right: 0;
              padding-top: 0.5rem;
              width: 100%;
            }
          `}
        >
          <div
            className="d-flex flex-column rounded-4"
            css={css`
              border: 1px solid rgb(230, 230, 230);
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background: rgb(245, 245, 245);
                border-bottom: 1px solid rgb(230, 230, 230);
              `}
            >
              <picture className="d-none d-md-block">
                <source srcSet={laptopLanding7} type="image/webp" />
                <img
                  src={laptopLanding7}
                  className="img-fluid"
                  alt="Afforai support multiple document formats"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
              <picture className=" d-md-none">
                <source srcSet={mobileLanding7} type="image/webp" />
                <img
                  src={mobileLanding7}
                  className="img-fluid"
                  alt="Afforai support multiple document formats"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span
                  css={css`
                    font-size: 16px;
                    color: rgb(34, 34, 34);
                    font-weight: 500;
                  `}
                >
                  Multiple file types supported
                </span>
              </div>
              <div
                css={css`
                  font-size: 12px;
                  color: rgb(82, 82, 82);
                `}
              >
                Afforai can extract data from a multitude of formats, including;
                PDF, URL, DOCX, PPTX &amp; XLSX, as well as your own text &amp;
                links from Websites. The possibilities are limitless!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        css={css`
          padding-top: 0.5rem;
        `}
      >
        <div
          className="d-flex flex-column col-md-6 offset-md-1"
          css={css`
            padding-right: 0.5rem;
            width: 48.3333%;
            @media (max-width: 767px) {
              padding-right: 0;
              padding-bottom: 0.5rem;
              width: 100%;
            }
          `}
        >
          <div
            className="flex-grow-1 d-flex flex-column rounded-4"
            css={css`
              border: 1px solid rgb(230, 230, 230);
              margin-bottom: 1rem;
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background: rgb(245, 245, 245);
                border-bottom: 1px solid rgb(230, 230, 230);
              `}
            >
              <picture className="d-none d-md-block">
                <source srcSet={laptopLanding8} type="image/webp" />
                <img
                  src={laptopLanding8}
                  className="img-fluid"
                  alt="Afforai shows you how it got its answer"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
              <picture className="d-md-none">
                <source srcSet={mobileLanding8} type="image/webp" />
                <img
                  src={mobileLanding8}
                  className="img-fluid"
                  alt="Afforai shows you how it got its answer"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span
                  css={css`
                    font-size: 16px;
                    color: rgb(34, 34, 34);
                    font-weight: 500;
                  `}
                >
                  Valuable Data Citation
                </span>
                <div
                  className="d-flex align-items-center"
                  css={css`
                    padding: 0.25rem 0.5rem;
                    border-radius: 20px;
                    background: rgb(239, 230, 255);
                    color: rgb(96, 4, 255);
                    font-size: 9px;
                    font-weight: 500;
                    height: 16px;
                  `}
                >
                  <span>NEW</span>
                </div>
              </div>
              <div
                css={css`
                  font-size: 12px;
                  color: rgb(82, 82, 82);
                `}
              >
                Afforai is able to show exactly where your data has been
                extracted from &amp; highlight it for you, so you never loose
                your time validating information again.
              </div>
            </div>
          </div>
          <div
            className="flex-grow-1 d-flex flex-column rounded-4"
            css={css`
              border: 1px solid rgb(230, 230, 230);
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background: rgb(245, 245, 245);
                border-bottom: 1px solid rgb(230, 230, 230);
              `}
            >
              <picture className="d-none d-md-block">
                <source srcSet={laptopLanding10} type="image/webp" />
                <img
                  src={laptopLanding10}
                  className="img-fluid"
                  alt="Built in Document Viewer"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
              <picture className="d-md-none">
                <source srcSet={mobileLanding10} type="image/webp" />
                <img
                  src={mobileLanding10}
                  className="img-fluid"
                  alt="Built in Document Viewer"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
            </div>
            <div className="d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span
                  css={css`
                    font-size: 16px;
                    color: rgb(34, 34, 34);
                    font-weight: 500;
                  `}
                >
                  Built in Document Viewer
                </span>
              </div>
              <div
                css={css`
                  font-size: 12px;
                  color: rgb(82, 82, 82);
                `}
              >
                Never Switch tabs again. Afforai’s document viewer means that
                you can have your uploaded files right next to your chatbot,
                giving you the ability to search the file, and refer to it for
                data citations.
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex col-md-4"
          css={css`
            padding-left: 0.5rem;
            width: 35%;
            @media (max-width: 767px) {
              padding-right: 0;
              padding-top: 0.5rem;
              width: 100%;
            }
          `}
        >
          <div
            className="d-flex flex-column justify-content-between rounded-4 h-100"
            css={css`
              border: 1px solid rgb(230, 230, 230);
              overflow: hidden;
            `}
          >
            <div
              css={css`
                background: rgb(245, 245, 245);
                border-bottom: 1px solid rgb(230, 230, 230);
              `}
            >
              <picture className="d-none d-md-block">
                <source srcSet={laptopLanding9} type="image/webp" />
                <img
                  src={laptopLanding9}
                  className="img-fluid"
                  alt="Afforai is secured with the power of the cloud"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
              <picture className="d-md-none">
                <source srcSet={mobileLanding9} type="image/webp" />
                <img
                  src={mobileLanding9}
                  className="img-fluid"
                  alt="Afforai is secured with the power of the cloud"
                  css={css`
                    width: 100%;
                  `}
                />
              </picture>
            </div>
            <div className="flex-grow-1 d-flex flex-column px-3 pt-2 pb-4">
              <div className="d-inline-flex align-items-center gap-2">
                <span
                  css={css`
                    font-size: 16px;
                    color: rgb(34, 34, 34);
                    font-weight: 500;
                  `}
                >
                  Unbreakable Security
                </span>
              </div>
              <div
                css={css`
                  font-size: 12px;
                  color: rgb(82, 82, 82);
                `}
              >
                Afforai uses Azure Server &amp; Azure OpenAI API. In other
                words, your data is more than safe with us.{" "}
                <a href="/security" target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
