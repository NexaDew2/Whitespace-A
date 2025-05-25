import React from "react";

function Home({
  heroTitle,
  heroDescription,
  heroButtonText,
  heroImage,
  imagePosition = "right",
  backgroundImage,
  backgroundImageStyle,
  backgroundClass = "bg-white",
  textColorClass = "text-black",
  isFullWidthCentered = false,
  extraPaddingClass = "py-12",
  centerButton = false,
}) {
  const contentContainerClass = isFullWidthCentered
    ? `w-full max-w-none text-center px-6 ${extraPaddingClass}`
    : `max-w-7xl mx-auto px-6 ${extraPaddingClass}`;

  const bgImageStyles = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundImageStyle?.size || "contain",
        backgroundPosition: backgroundImageStyle?.position || "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }
    : {};

  return (
    <section className={`${backgroundClass} ${textColorClass} font-light`} style={bgImageStyles}>
      {backgroundImageStyle?.overlay && (
        <div
          data-testid="background-overlay"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: backgroundImageStyle?.customOverlayColor || "rgba(0,0,0,0.4)",
            zIndex: 0,
          }}
        />
      )}

      <div
        className={contentContainerClass}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: isFullWidthCentered
            ? "column"
            : imagePosition === "left"
            ? "row-reverse"
            : "row",
          alignItems: "center",
          justifyContent: isFullWidthCentered ? "center" : "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Text Section */}
        <div
          className={`${
            isFullWidthCentered ? "text-center" : "text-left"
          } w-full md:w-1/2 mb-8 md:mb-0`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">{heroTitle}</h2>
          <p className="text-lg sm:text-xl mb-8">{heroDescription}</p>

          {heroButtonText && (
            <div
              className={`w-full flex justify-center ${
                centerButton
                  ? "md:justify-center"
                  : "md:justify-start lg:justify-center xl:justify-start"
              }`}
            >
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg">
                {heroButtonText}
              </button>
            </div>
          )}
        </div>

        {/* Image Section */}
        {!isFullWidthCentered && heroImage && (
          <div
            className={`w-full md:w-1/2 ${
              imagePosition === "left" ? "text-left" : "text-right"
            }`}
          >
            <img
              src={heroImage}
              alt={heroTitle}
              className="max-w-full h-auto mx-auto md:mx-0"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
