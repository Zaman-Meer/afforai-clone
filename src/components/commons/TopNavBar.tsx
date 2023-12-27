/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Logo1 from "../../assets/img/graphics/logo-new-violet.webp";
import Logo2 from "../../assets/img/graphics/logo-new-violet.png";
import { ReactComponent as HamburgerIcon } from "../../assets/img/icons/hamburger.svg";
import { Link, useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setShowMobileMenu(false);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use React Router's useNavigate to navigate to the home page ("/")
    navigate("/");
    // Use setTimeout to wait for the navigation to complete before scrolling
    setTimeout(() => {
      const hero = document.getElementById("testimonial");

      if (hero) {
        const rect = hero.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + rect.top,
          behavior: "smooth",
        });
      }
    }, 100); // Adjust the timeout duration if needed
  };

  return (
    <div>
      <nav className="py-0 py-md-4 px-md-5 flex-column navbar navbar-expand-md navbar-light fixed-top">
        <div
          className="container-fluid"
          css={css`
            max-width: 1264px;
            padding: 8px 24px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(209, 213, 219);
            border-radius: 16px;
            backdrop-filter: blur(16px);
            background: rgba(250, 250, 250, 0.5);
            @media (max-width: 768px) {
              border-radius: 0;
              border: none;
              border-bottom: 1px solid rgb(209, 213, 219);
              padding: 16px;
            }
          `}
        >
          <div className="w-100 d-flex align-items-center justify-content-between">
            <Link
              to="/"
              className="d-flex flex-shrink-1 justify-content-start align-items-center me-0 py-0 navbar-brand"
              css={css`
                height: fit-content;
                gap: 8px;
                flex: 1 1 0%;
              `}
            >
              <picture>
                <source srcSet={Logo1} type="image/webp" />
                <img
                  src={Logo2}
                  alt="Afforai Logo"
                  height="24px"
                  width="24px"
                  css={css`
                    vertical-align: middle;
                  `}
                />
              </picture>
              <div
                css={css`
                  color: rgb(17, 17, 17);
                  font-style: normal;
                  font-weight: 500;
                  font-size: 18px;
                  text-align: center;
                  height: 24px;
                `}
              >
                Afforai
              </div>
            </Link>
            <div className="d-md-flex d-none justify-content-center align-items-center navbar-nav">
              <a
                href="https://afforai.getrewardful.com/signup"
                target="_blank"
                rel="noopener"
                className="mx-2 nav-link"
              >
                <span
                  css={css`
                    color: rgb(17, 17, 17);
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                  `}
                >
                  Affiliate
                </span>
              </a>
              <Link
                to="pricing"
                className="mx-2 nav-link"
                css={css`
                  color: rgb(17, 17, 17);
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                `}
              >
                Pricing
              </Link>

              <button
                onClick={handleScrollTo}
                className="mx-2 nav-link"
                css={css`
                  color: rgb(17, 17, 17);
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                `}
              >
                Testimonials
              </button>
              <a
                href="https://help.afforai.com/"
                target="_blank"
                rel="noopener"
                className="mx-2 nav-link"
              >
                <span
                  css={css`
                    color: rgb(17, 17, 17);
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                  `}
                >
                  Help Center
                </span>
              </a>
            </div>
            <div
              className="d-flex flex-row justify-content-end align-items-center gap-2 navbar-nav"
              css={css`
                flex: 1 1 0%;
              `}
            >
              <Link
                to="/login"
                type="button"
                className="new-btn gray px-2 px-md-3 btn btn-primary"
                css={css`
                  height: fit-content;
                `}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                type="button"
                className="new-btn violet-fill px-2 px-md-3 btn btn-primary"
                css={css`
                  height: fit-content;
                `}
              >
                Try for free
              </Link>
              <div
                className={`d-block d-md-none navigation-toggler ${
                  showMobileMenu && "active"
                }`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <HamburgerIcon />
              </div>
            </div>
          </div>
          <div
            className={`${
              showMobileMenu ? "d-flex" : "d-none"
            } justify-content-start align-items-start navbar-nav`}
          >
            <a
              href="https://afforai.getrewardful.com/signup"
              target="_blank"
              rel="noopener"
              className="mx-2 nav-link"
            >
              <span
                css={css`
                  color: rgb(17, 17, 17);
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                `}
              >
                Affiliate
              </span>
            </a>
            <Link
              to="/pricing"
              className="mx-2 nav-link"
              css={css`
                color: rgb(17, 17, 17);
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              Pricing
            </Link>
            <div
              onClick={handleScrollTo}
              className="mx-2 nav-link"
              css={css`
                color: rgb(17, 17, 17);
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
              `}
            >
              Testimonials
            </div>
            <a
              href="https://help.afforai.com/"
              target="_blank"
              rel="noopener"
              className="mx-2 nav-link"
            >
              <span
                css={css`
                  color: rgb(17, 17, 17);
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                `}
              >
                Help Center
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div
        css={css`
          opacity: 0;
          height: 106px;
        `}
      ></div>
    </div>
  );
};

export default TopNavBar;
