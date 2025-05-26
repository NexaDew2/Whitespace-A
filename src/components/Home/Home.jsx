import React from "react";

const Home = ({
  heroTitle,
  heroDescription,
  heroButtonText,
  heroImage,
  imagePosition = "right",
  backgroundImage,
  backgroundImageStyle = {},
  backgroundClass = "",
  textColorClass = "",
  extraPaddingClass = "py-12",
  centerButton = false,
  isFullWidthCentered = false,
  addingextra,
}) => {
  const {
    size = "cover",
    position = "center",
    overlay = false,
    customOverlayColor,
  } = backgroundImageStyle;

  const backgroundStyles = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: size,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        ...(overlay && {
          backgroundBlendMode: "overlay",
          backgroundColor: customOverlayColor || undefined,
        }),
      }
    : {};

  const heroTitleStyle = {

    fontWeight: "700",

    marginBottom: "1rem",
    fontSize: "80px",
    lineHeight: "1.1",
    letterSpacing: "-0.5px",

  };

  return (
    <>
      <style>
        {`
          @media (max-width: 1024px) {
            .hero-title {
              font-size: 56px !important;
            }
          }
          @media (max-width: 640px) {
            .hero-title {
              font-size: 38px !important;
            }
          }
        `}
      </style>
      <section
        role="region"
        data-testid="home-section"
        className={`${backgroundClass} ${extraPaddingClass} w-full`}
        style={backgroundStyles}
      >
        <div
          data-testid="container"
          className={`max-w-8xl mx-auto px-1 sm:px-2 lg:px-3 xl:px-16 flex flex-col lg:flex-row items-center gap-6 ${
            isFullWidthCentered ? "justify-center" : "justify-between"
          }`}
        >
          {/* Text Section */}
          <div
            className={`w-full ${
              isFullWidthCentered ? "lg:w-full max-w-4xl mx-auto" : "lg:w-[65%]"
            } ${
              imagePosition === "right" ? "order-1" : "order-2"
            } ${textColorClass} text-center ${
              isFullWidthCentered ? "lg:text-center" : "lg:text-left"
            }`}
          >

            <h2 className="hero-title font-inter" style={heroTitleStyle}>

              {heroTitle}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6">{heroDescription}</p>
            {heroButtonText && (
  <button
    className={`px-12 py-4 rounded-md text-white font-semibold transition ${
      centerButton ? "mx-auto" : ""
    }`}
    style={{ backgroundColor: "#4F9CF7" }}
  >
    {heroButtonText}
  </button>
)}
<p className="text-base sm:text-3xl lg:text-xl mb-6 pt-10">{addingextra}</p>



          </div>

          {/* Image Section */}
          {heroImage && (
            <div
              className={`w-full ${
                isFullWidthCentered ? "lg:w-full" : "lg:w-[35%]"
              } ${imagePosition === "right" ? "order-2" : "order-1"} flex justify-center`}
            >
              <img
                src={heroImage}
                alt="Hero"
                className="w-full max-w-[600px] sm:max-w-[720px] mx-auto"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
