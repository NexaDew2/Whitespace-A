import React from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Try from './components/Try/Try';
import Footer from './components/Footer/Footer';
import PlanCardSection from "./components/PlansCardSection/PlanCardSection";
import Sponser from "./components/SponserSection/Sponser";
import OurClientSection from "./components/OurClientSection/OurClientSection";
import YourWork from "./components/YourWork/YourWork";
import Home from "./components/Home/Home";
// Hero images
import first from "./assetss/first.png";
import second from "./assetss/second.png";
import third from "./assetss/third.png";
import fourth from "./assetss/fourth.png";
import fivth from "./assetss/fivth.png";
import seven from "./assetss/seven.png";
import eight from "./assetss/eight.png";

// Background images
import firstfirst from "./assetss/firstfirst.png";
import eighteight from "./assetss/eighteight.png";
import secondsecond from "./assetss/secondsecond.png";
import fivefive from "./assetss/fivefive.png";

const contentSections = [
  {
    heroTitle: "Get More Done with whitepace",
    heroDescription:
      "Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.",
    heroButtonText: "Try Whitepace Free",
    heroImage: first,
    imagePosition: "right",
    backgroundImage: firstfirst,
    backgroundImageStyle: {
      size: "cover",
      position: "center",
      overlay: true,
    },
  },
  {
    heroTitle: "Project Management",
    heroDescription:
      "Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
    heroButtonText: "Get Started",
    heroImage: second,
    imagePosition: "right",
    backgroundImage: secondsecond,
    backgroundImageStyle: {
      size: "contain",
      position: "left top",
      overlay: false,
      customOverlayColor: "rgba(255,255,255,0.6)", 
    },
  },
  {
    heroTitle: "Work together",
    heroDescription:
      "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
    heroButtonText: "Try it now",
    heroImage: third,
    imagePosition: "left",
  },
  {
    heroTitle: "Use as Extension",
    heroDescription:
      "Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.",
    heroButtonText: "Get Started",
    heroImage: fourth,
    imagePosition: "right",
  },
  {
    heroTitle: "Customize it to your needs",
    heroDescription:
      "Customize the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.",
    heroButtonText: "Let's Go →",
    heroImage: fivth,
    imagePosition: "left",
  },
  {
    heroTitle: "Your work, everywhere you are",
    heroDescription:
      "Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!",
    heroButtonText: "Try Taskey",
    backgroundImage: fivefive,
    backgroundImageStyle: {
      size: "contain",
      position: "left top",
      overlay: false,
    },
  },
  {
    heroTitle: "100% your data",
    heroDescription:
      "The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.",
    heroButtonText: "Read More",
    heroImage: seven,
    imagePosition: "right",
  },
  {
    heroTitle: "Work with Your Favorite Apps Using whitepace",
    heroDescription:
      "Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.",
    heroButtonText: "Read More",
    heroImage: eight,
    imagePosition: "left",
    backgroundImage: eighteight,
    backgroundImageStyle: {
      size: "cover",
      position: "center",
      overlay: true,
    },
  },
  {
    heroTitle: "Try Whitepace today",
    heroDescription: "Get started for free. Add your whole team as your needs grow.",
    heroButtonText: "Try Taskey free",
  },
];

function HomePageContent() {
  return (
    <>
      <Navbar />
      {contentSections.map((section, idx) => {
        const blueSections = [0, 3, 5, 7, 8];
        const backgroundClass = blueSections.includes(idx)
          ? "bg-[#003C88]"
          : "bg-white";
        const textColorClass = blueSections.includes(idx)
          ? "text-white"
          : "text-black";

        const backgroundSide = idx === 1 ? "left" : "full";
        const isFullWidthCentered = [5, 8].includes(idx);
        const extraPaddingClass = [5, 6, 7, 8].includes(idx)
          ? "py-40"
          : "py-24";

        const centerButton = [5, 8].includes(idx);

        return (
          <Home
            key={idx}
            {...section}
            backgroundClass={backgroundClass}
            textColorClass={textColorClass}
            backgroundSide={backgroundSide}
            isFullWidthCentered={isFullWidthCentered}
            extraPaddingClass={extraPaddingClass}
            centerButton={centerButton}
          />
        );
      })}
       
      <PlanCardSection />
      <YourWork />
      <Sponser />
      <OurClientSection />
      <Footer />
      
    </>
  );
}

function App() {
  const location = useLocation();

  // Render Home only when path is NOT /login or /try
  const isHomePage = !["/login", "/try"].includes(location.pathname);

  return (
    <>
      {isHomePage && <HomePageContent />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/try" element={<Try />} />
      </Routes>
    </>
  );
}

export default App;
  
