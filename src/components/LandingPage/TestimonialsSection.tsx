/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import phReview from "../../assets/img/graphics/ph-review.webp";
import producthunt from "../../assets/img/icons/producthunt.svg";
import reviewer1 from "../../assets/img/testimonials/0-0.webp";
import reviewer2 from "../../assets/img/testimonials/0-1.webp";
import reviewer3 from "../../assets/img/testimonials/0-2.webp";
import reviewer4 from "../../assets/img/testimonials/0-3.webp";
import reviewer5 from "../../assets/img/testimonials/0-4.webp";
import reviewer6 from "../../assets/img/testimonials/0-5.webp";
import reviewer7 from "../../assets/img/testimonials/0-6.webp";
import reviewer8 from "../../assets/img/testimonials/1-0.webp";
import reviewer9 from "../../assets/img/testimonials/1-1.webp";
import reviewer10 from "../../assets/img/testimonials/1-2.webp";
import reviewer11 from "../../assets/img/testimonials/1-3.webp";
import reviewer12 from "../../assets/img/testimonials/1-4.webp";
import reviewer13 from "../../assets/img/testimonials/1-5.webp";
import reviewer14 from "../../assets/img/testimonials/1-6.webp";

interface ReviewType {
  name: string;
  profileImage: string;
  review: string;
}

const ReviewerList1: ReviewType[] = [
  {
    name: "Bayu Wilanda, Web &amp; App Developer",
    profileImage: reviewer1,
    review:
      "I've signed up and starting testing Afforai Ask for my next project's business model, and I have had a great experience so far. It has been exactly what I needed with its fast response times. For now, I am considering purchasing the Afforai - Lite Plan.",
  },
  {
    name: "Ghulam Abbas, Solopreneur",
    profileImage: reviewer2,
    review:
      "The platform is free to use with a pay-as-you-go option, and there are no subscriptions required. The platform's Comprehension Model is highly recommended for tasks like document comprehension, reasoning, report writing, and research.",
  },
  {
    name: "Henry Sipchen, Marketing Coordinator",
    profileImage: reviewer3,
    review:
      "I love it! Build totally changed the way I use my unstructured text data at school and in my internship this summer. Something special is brewing over at Afforai!",
  },
  {
    name: "Anatolii, Founder of Savvy Planning Systems",
    profileImage: reviewer4,
    review:
      "Great tool for text analysis and emphasizing the main idea of a document. Especially when you need a quick answer without tones of epithets that beautifully describe something that can be actually described in a few words:)",
  },
  {
    name: "Amulya Pressard, Growth @ Neverinstall",
    profileImage: reviewer5,
    review:
      "This looks good to ease out the data analysis task for the users. But in the Affroi build guide, I couldn't see how efficiently the data analysis is done. Guess I have to take a subscription for it. The product looks great and has a User-friendly interface. Congrats on the launch.",
  },
  {
    name: "Jay, Founder of FLYTStudios",
    profileImage: reviewer6,
    review:
      "Great UI! Excited to dive deeper in the software and it's benefits. Already had it write me a couple of emails to clients, as well as give great suggestions on a new ad campaign coming up! overall great product",
  },
  {
    name: "Thuy Nguyen, CEO Assistance",
    profileImage: reviewer7,
    review:
      "AMAZING PRODUCT!, especially for low-tech but love new tech person like me!! Used it to craft emails because I spend wayyy too much time writing.",
  },
];

const ReviewerList2: ReviewType[] = [
  {
    name: "Daniel Crook, Content",
    profileImage: reviewer8,
    review:
      "Afforai has so many different applications and yet doesn't feel overwhelming. It's streamlined and feels fun to use, and the developers clearly put time into making it simple to use. Definitely worth my investment!",
  },
  {
    name: "Axel Borry, Growth Hacker",
    profileImage: reviewer9,
    review:
      "Well done on the launch 🚀 . I am convinced you will have many signs up today because your tool is beneficial. I love the UI. The framework between Afforai Build and Afforai Ask is compelling. I am in a hurry now to train my new assistant 😁",
  },
  {
    name: "Balamurali, Web 3 Growth Marketer",
    profileImage: reviewer10,
    review:
      "This is amazing. We were thinking a solution like this would work wonders in the FAQ/Customer service section for our website. A tool like this that can comprehensively go through information for the most accurate answers is a gem",
  },
  {
    name: "Siovash Zarrasvand, Engineer",
    profileImage: reviewer11,
    review:
      "This looks very useful, especially if you need to derive insight from unstructured or poorly labeled data.",
  },
  {
    name: "Anna DeMarco, Communication Manager",
    profileImage: reviewer12,
    review:
      "Amazing product! Works better than ChatGPT. Being able to choose style and tone of voice makes the writing much better and you can’t even notice it’s AI. Congratulations on the great work :)",
  },
  {
    name: "TJ Franco, Founder and CEO",
    profileImage: reviewer13,
    review:
      "This is an awesome platform for business AI. I'll 100% be using this. Love the fact that it's free to use and it's not a subscription pricing model, but pay per query. I'm going to have my team bookmark it now!",
  },
  {
    name: "Stephanie, Digital Marketer",
    profileImage: reviewer14,
    review:
      "Congratulations on the Launch! I like the user-friendly interface and could get started straight away without the need to watch a video tutorial. I used it to generate a summary for a marketing blog, and I found the content to be smoother than Chat GPT.",
  },
];

const TestimonialsSection = () => {
  return (
    <div
      id="testimonial"
      className="container-fluid"
      css={css`
        max-width: 1600px;
        margin: 160px auto;
      `}
    >
      <div
        className="row"
        css={css`
          margin-bottom: 32px;
        `}
      >
        <div className="d-flex flex-column justify-content-center col">
          <div className="d-flex flex-column align-items-center container">
            <a
              className="mb-2"
              href="https://www.producthunt.com/products/afforai/"
              rel="noopener"
              target="_blank"
            >
              <picture>
                <source srcSet={phReview} type="image/webp" />
                <img
                  src={phReview}
                  className="img-fluid"
                  alt="Product Hunt Review 4.9/5"
                  width="170px"
                />
              </picture>
            </a>
            <h2
              className="text-center mb-2"
              css={css`
                color: rgb(34, 34, 34);
                font-weight: 600;
                font-size: 36px;
                line-height: 130%;
              `}
            >
              See what our users say
            </h2>
            <h3
              className="text-center mb-2"
              css={css`
                color: rgb(82, 82, 82);
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
              `}
            >
              Loved by thousands, all around the World
            </h3>
          </div>
        </div>
      </div>
      <div
        className="row"
        css={css`
          margin-bottom: 1rem;
        `}
      >
        <div className="infinite-scroll-loop-outer">
          <div
            className="infinite-scroll-loop-inner"
            css={css`
              width: 100%;
              white-space: nowrap;
              overflow-x: scroll;
            `}
          >
            <div
              css={css`
                display: inline-block;
              `}
            >
              {ReviewerList1?.map((reviewer, index) => (
                <div
                  key={index}
                  className="card-1"
                  css={css`
                    display: inline-block;
                    margin-right: 20px;
                  `}
                >
                  <div
                    className="d-flex flex-column rounded-3"
                    css={css`
                      width: 600px;
                      height: 266px;
                      padding: 32px;
                      border: 1px solid rgb(230, 230, 230);
                    `}
                  >
                    <div
                      className="flex-grow-1 text-wrap"
                      css={css`
                        color: rgb(34, 34, 34);
                        font-size: 16px;
                        border-bottom: 1px solid rgb(230, 230, 230);
                      `}
                    >
                      {reviewer?.review}
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-4">
                      <div className="d-flex align-items-center gap-2">
                        <picture>
                          <source
                            srcSet={reviewer?.profileImage}
                            type="image/webp"
                          />
                          <img
                            src={reviewer?.profileImage}
                            className="img-fluid"
                            alt={reviewer?.name}
                            css={css`
                              height: 32px;
                              width: 32px;
                            `}
                          />
                        </picture>
                        <div
                          css={css`
                            color: rgb(82, 82, 82);
                            font-size: 14px;
                          `}
                        >
                          {reviewer?.name}
                        </div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        rel="noopener"
                        className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1"
                        css={css`
                          background: rgb(246, 232, 229);
                          border: 1px solid rgb(255, 60, 5);
                          text-decoration: none;
                        `}
                      >
                        <div className="d-inline-flex align-items-center gap-1">
                          <img
                            src={producthunt}
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span
                            css={css`
                              color: rgb(255, 58, 2);
                              font-size: 12px;
                              font-weight: 500;
                            `}
                          >
                            View on Product Hunt
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="infinite-scroll-loop-outer">
          <div
            className="infinite-scroll-loop-inner"
            css={css`
              width: 100%;
              white-space: nowrap;
              overflow-x: scroll;
            `}
          >
            <div
              css={css`
                display: inline-block;
              `}
            >
              {ReviewerList2?.map((reviewer, index) => (
                <div
                  key={index}
                  className="card-2"
                  css={css`
                    display: inline-block;
                    margin-right: 20px;
                  `}
                >
                  <div
                    className="d-flex flex-column rounded-3"
                    css={css`
                      width: 600px;
                      height: 266px;
                      padding: 32px;
                      border: 1px solid rgb(230, 230, 230);
                    `}
                  >
                    <div
                      className="flex-grow-1 text-wrap"
                      css={css`
                        color: rgb(34, 34, 34);
                        font-size: 16px;
                        border-bottom: 1px solid rgb(230, 230, 230);
                      `}
                    >
                      {reviewer?.review}
                    </div>
                    <div className="d-flex justify-content-between align-items-center pt-4">
                      <div className="d-flex align-items-center gap-2">
                        <picture>
                          <source
                            srcSet={reviewer?.profileImage}
                            type="image/webp"
                          />
                          <img
                            src={reviewer?.profileImage}
                            className="img-fluid"
                            alt={reviewer?.name}
                            css={css`
                              height: 32px;
                              width: 32px;
                            `}
                          />
                        </picture>
                        <div
                          css={css`
                            color: rgb(82, 82, 82);
                            font-size: 14px;
                          `}
                        >
                          {reviewer?.name}
                        </div>
                      </div>
                      <a
                        href="https://www.producthunt.com/products/afforai/"
                        target="_blank"
                        rel="noopener"
                        className="d-md-inline-flex d-none align-items-center rounded-3 px-3 px-md-2 py-1"
                        css={css`
                          background: rgb(246, 232, 229);
                          border: 1px solid rgb(255, 60, 5);
                          text-decoration: none;
                        `}
                      >
                        <div className="d-inline-flex align-items-center gap-1">
                          <img
                            src={producthunt}
                            alt="Product Hunt logo"
                            height="16"
                          />
                          <span
                            css={css`
                              color: rgb(255, 58, 2);
                              font-size: 12px;
                              font-weight: 500;
                            `}
                          >
                            View on Product Hunt
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
