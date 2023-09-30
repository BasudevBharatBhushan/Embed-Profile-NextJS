import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import profile from "../assets/profile.png";
import codebasics from "../assets/codebasics.png";
import govtlogo from "../assets/govt-logo.png";
import pdfThumbnail from "../assets/Insights.png";
import ytThumbnail from "../assets/yt_thumbnail.png";
import dashboardThumbnail from "../assets/dashboard_thumbnail.png";
import PDFViewer from "@/components/PDFViewer";
import bgImage from "../assets/bg.png";

const Home = () => {
  const [isYtFullscreen, setYtFullscreen] = useState(false);
  const [isDashboardFullScreen, setDashboardFullScreen] = useState(false);
  const [isPdfFullScreen, setPdfFullScreen] = useState(false);

  const handleClick = (param) => {
    if (param === "main") {
      setDashboardFullScreen(false);
      setYtFullscreen(false);
      setPdfFullScreen(false);
      console.log("main-clicked");
    } else if (param === "dashboard") {
      setDashboardFullScreen(true);
      setYtFullscreen(false);
      setPdfFullScreen(false);
      console.log("dashboard-clicked");
    } else if (param === "yt") {
      setDashboardFullScreen(false);
      setYtFullscreen(true);
      setPdfFullScreen(false);
      console.log("yt-clicked");
    } else if ((param = "pdf")) {
      setDashboardFullScreen(false);
      setYtFullscreen(false);
      setPdfFullScreen(true);
      console.log("pdf-clicked");
    }
  };
  return (
    <>
      <Head>
        <title>Your Profile - Next.js App</title>
        <meta
          name="description"
          content="Your profile page generated by Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        onClick={() => {
          handleClick("main");
        }}
        className=" bg-[#171629] min-h-screen p-4"
      >
        <div className="bg-custom-image bg-cover min-h-screen flex flex-col gap-2">
          <div className="mx-2 my-2 flex items-center justify-between flex-nowrap">
            <div className="flex flex-row justify-start items-center">
              <Image
                className="sm:h-20 sm:w-20  h-10 w-10 rounded-full "
                src={profile}
                alt=""
              />
              <p className=" mx-4 font-semibold text-gray-400 font-sans sm:text-2xl">
                SAI SUBHAM JENA
              </p>
            </div>
            <div className="flex items-center justify-evenly ">
              <div className="mx-1">
                {" "}
                <Image
                  className=" sm:h-26 sm:w-40 h-13 w-20 rounded-full "
                  src={codebasics}
                  alt=""
                />
              </div>
              <div className="mx-1">
                {" "}
                <Image
                  className="sm:h-20 sm:w-20  h-10 w-10 rounded-full "
                  src={govtlogo}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="  flex flex-col justify-around items-center mt-40 gap-5">
            <p className="  text-5xl font-bold text-[#A6A6A6] mt-6 mb-10">
              Project Challenge
            </p>

            <p className=" text-center text-[#EBCF5F] text-1xl sm:text-6xl font-bold">
              Analyze Growth and Present Insight <br /> to <br />
              Telengana Government
            </p>
          </div>
        </div>

        {/* <div className=" my-20 gap-6  flex flex-col sm:flex-row justify-around items-center ">
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleClick("dashboard");
            }}
          >
            {isDashboardFullScreen ? (
              <div>
                <iframe
                  title="Telangana State"
                  width="1120"
                  height="630"
                  src="https://app.powerbi.com/view?r=eyJrIjoiNzA2NjQxYjMtMjU3My00MGM3LTg5NjEtOGQxNWM2NjlmMDQ3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
                  frameborder="0"
                  allowFullScreen="true"
                ></iframe>
              </div>
            ) : (
              <div className="flex flex-col gap-2 justify-around items-center">
                <Image
                  src={dashboardThumbnail}
                  height={315}
                  className=" rounded-md"
                />
                <p className="  text-gray-400 font-semibold  text-2xl">
                  Power BI Dashboard
                </p>
              </div>
            )}
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              handleClick("yt");
            }}
          >
            {isYtFullscreen ? (
              <div>
                {" "}
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/VumzITORImI?si=85Feh5jqlZtna9Sz"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              <div className="flex flex-col gap-2 justify-around items-center">
                <Image className=" rounded-md" src={ytThumbnail} height={315} />
                <p className="  text-gray-400 font-semibold  text-2xl">
                  Youtube
                </p>
              </div>
            )}
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              handleClick("pdf");
            }}
          >
            {isPdfFullScreen ? (
              <div>
                <PDFViewer />
              </div>
            ) : (
              <div className="flex flex-col gap-2 justify-around items-center">
                <Image
                  className=" rounded-md"
                  src={pdfThumbnail}
                  height={315}
                />
                <p className="  text-gray-400 font-semibold  text-2xl">FAQ</p>
              </div>
            )}{" "}
          </div>
        </div> */}

        <div className="flex my-14  gap-10 flex-col justify-around items-center">
          <div>
            <iframe
              title="Telangana State"
              width="1120"
              height="630"
              src="https://app.powerbi.com/view?r=eyJrIjoiNzA2NjQxYjMtMjU3My00MGM3LTg5NjEtOGQxNWM2NjlmMDQ3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
          </div>

          <div>
            <iframe
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/VumzITORImI?si=85Feh5jqlZtna9Sz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <div className="flex flex-col gap-2 justify-around items-center">
              <PDFViewer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
