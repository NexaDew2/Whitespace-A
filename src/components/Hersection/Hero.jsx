// src/components/Hero/Hero.jsx
import React from "react";

function Hero({
  heroTitle,
  heroDescription,
  heroButtonText,
  heroImage,
  imagePosition = "right",
  backgroundImage,
  backgroundImageStyle,
  backgroundClass = "bg-white",
  textColorClass = "text-black",
  backgroundSide = "full",
  isFullWidthCentered = false,
  extraPaddingClass = "py-12",
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
    <section className={`${backgroundClass} ${textColorClass}`} style={bgImageStyles}>
      {backgroundImageStyle?.overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
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
        <div
          style={{
            flex: isFullWidthCentered ? "1 1 100%" : "1 1 50%",
            marginBottom: isFullWidthCentered ? "1rem" : 0,
          }}
        >
          <h2 className="text-5xl font-bold mb-6">{heroTitle}</h2>
          <p className="text-xl mb-8">{heroDescription}</p>
          {heroButtonText && (
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg">
              {heroButtonText}
            </button>
          )}
        </div>

        {!isFullWidthCentered && heroImage && (
          <div
            style={{
              flex: "1 1 50%",
              textAlign: imagePosition === "left" ? "left" : "right",
            }}
          >
            <img src={heroImage} alt={heroTitle} className="max-w-full h-auto" />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
