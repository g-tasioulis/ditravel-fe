"use client";
import ButtonHover from "@/components/ButtonHover";
import ToursAgency from "@/components/homeComponents/toursofagency/ToursAgency";
import {
  Box,
  Button,
  Flex,
  Image as ChakraImage,
  Text,
  Grid,
} from "@chakra-ui/react";
import { oneDayTours } from "@/firebase/home/dbquery";
import { useEffect, useState } from "react";
import { IOneDayTour } from "@/firebase/dbschema";
import { Carousel } from "@material-tailwind/react";
export default function Home() {
  return (
    <main className="home" style={{ paddingTop: "5%" }}>
      <div className="carousel-container lg:h-96 md:h-72 h-56">
        <Carousel
          autoplay={true}
          loop={true}
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="bg-white p-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:max-w-xl mb-6 lg:mb-0 lg:mr-6 ">
            <h1 className="text-4xl font-bold mb-4">
              FIVE REASONS WHY YOU SHOULD VISIT GREEK ARCHAEOLOGICAL SITES
            </h1>
            <p className="text-lg">
              Greece is filled with rich ancient history that will leave you
              mesmerized. With lots of archaeological structures, Greece has
              more than 18 UNESCO Heritage-listed sites. If you’re a history
              lover or not, take the time to visit the Acropolis, open-air
              museum of Dolos, Parthenon, Temple of Olympian – Zeus to name a
              few
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 lg:ml-6">
            <img
              src="/home1.jpg"
              alt="A scenic view of the Acropolis in Greece, showcasing the ancient architectural structures under a clear sky."
              className="rounded-lg shadow-lg mb-4 lg:mb-0"
              style={{ width: "300px", height: "200px" }}
            />
            <img
              src="/home2.jpg"
              alt="A scenic view of the Acropolis in Greece, showcasing the ancient architectural structures under a clear sky."
              className="rounded-lg shadow-lg mb-4 lg:mb-0"
              style={{ width: "300px", height: "200px" }}
            />
            <img
              src="/home3.jpg"
              alt="A scenic view of the Acropolis in Greece, showcasing the ancient architectural structures under a clear sky."
              className="rounded-lg shadow-lg mb-4 lg:mb-0"
              style={{ width: "300px", height: "200px" }}
            />
          </div>
        </div>
      </div>
      <Box style={{ paddingTop: "5%" }}>
        <Box
          border="1px solid #E2E8F0"
          p={2}
          maxWidth="1200px"
          mx="auto"
          bg="#E6CAC9"
          style={{ borderRadius: "5%" }}
        >
          <Grid templateColumns="1fr 2fr 1fr">
            <Box style={{ paddingLeft: "20%" }}>
              <ChakraImage src={"/Group-471-1.webp"} alt="2" />
              <ChakraImage src={"/Group-472.webp"} alt="4" mt={2} />
              <ChakraImage src={"/Group-471.webp"} alt="3" mt={2} />
              {/* Add your new photo here */}
            </Box>
            <Box className="pl-4" ml={100}>
              <Text
                className="text-3"
                maxW="500px"
                style={{ color: "#2E1630", fontSize: 30 }}
                color="#2E1630"
              >
                FIVE REASONS WHY YOU SHOULD VISIT GREEK ARCHAEOLOGICAL SITES:
              </Text>

              <Text
                className="text-xl"
                color="#2E1630"
                maxW="400px"
                style={{ color: "#2E1630", fontSize: 23 }}
              >
                Greece is filled with rich ancient history that will leave you
                mesmerized. With lots of archaeological structures, Greece has
                more than 18 UNESCO Heritage-listed sites. If youâre a history
                lover or not, take the time to visit the Acropolis, open-air
                museum of Delos, Parthenon, Temple of Olympian â Zeus to name a
                few.
              </Text>
            </Box>
            <Box>
              <ChakraImage
                src="/Group-42.webp"
                alt="5"
                mt={2}
                style={{ marginTop: "10%", marginLeft: "30%" }}
              />
            </Box>
            <ChakraImage
              src="/Group-474.webp"
              alt="5"
              mt={2}
              style={{ marginTop: "-30%", marginLeft: "180%" }}
            />
          </Grid>
        </Box>
        <div className="flex justify-center items-center bg-white min-h-screen">
          <div className="w-full max-w-7xl mx-auto p-6 flex flex-col-reverse lg:flex-row">
            <div className="lg:flex-1 p-8 bg-white rounded-b-lg lg:rounded-bl-none lg:rounded-l-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-6">
                PORT & AIRPORT TRANSFERS
              </h2>
              <p className="text-gray-700 text-lg">
                We know that finding a taxi service in a foreign country can be
                difficult and stressful. Schedule your transfer and enjoy the
                best service with all inclusive, no surprises. The driver will
                pick you up directly from the airport terminal or the port, will
                help with your luggage and take you directly to your hotel or
                any other destination, and vice versa.
              </p>
            </div>
            <div className="lg:flex-1 flex">
              <img
                src="/car.png"
                alt="Car on a snowy road with a red overlay at 20% opacity"
                className="rounded-t-lg lg:rounded-tr-none lg:rounded-r-lg shadow-lg image-size-fix w-full"
              />
            </div>
          </div>
        </div>
      </Box>
      <Box
        style={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid templateColumns="1fr 2fr 1fr">
          <Box
            className="w-full md:w-1/2 lg:full items-center mx-auto"
            style={{ marginLeft: "50%" }}
          >
            <Box className="w-full sm:w-1/2 md:w-1/2 justify-end">
              <ChakraImage
                src={"/Group-480.webp"}
                alt="car"
                style={{
                  borderRadius: "10px",
                  height: "100%",
                  marginLeft: "50%",
                }}
              />
            </Box>
            <Box
              className="aa"
              style={{
                borderRadius: "10px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text className="text-4xl font-bold mb-4" color="#2E1630">
                Fixed Rates
              </Text>
              <Text className="text-xl" color="#2E1630">
                We are much cheaper than the local âon-the-meterâ taxis in
                Europe.
              </Text>
            </Box>
          </Box>
          <Box
            className="w-full md:w-1/2 lg:full items-center mx-auto"
            style={{ marginRight: "25%" }}
          >
            <Box className="w-full sm:w-1/2 md:w-1/2 justify-end">
              <ChakraImage
                src={"/Group-476.webp"}
                alt="car"
                style={{
                  borderRadius: "10px",
                  height: "100%",
                  marginLeft: "70%",
                }}
              />
            </Box>
            <Box
              className="aa"
              style={{
                borderRadius: "10px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text className="text-4xl font-bold mb-4" color="#2E1630">
                No Stress
              </Text>
              <Text className="text-xl" color="#2E1630">
                As your driver will be waiting for you or pick you up from a
                meeting point of your choice
              </Text>
            </Box>
          </Box>
          <Box
            className="w-full md:w-1/2 lg:full items-center mx-auto"
            style={{ marginRight: "50%" }}
          >
            <Box className="w-full sm:w-1/2 md:w-1/2 justify-end">
              <ChakraImage
                src={"/Group-477.webp"}
                alt="car"
                style={{
                  borderRadius: "10px",
                  height: "100%",
                  marginLeft: "50%",
                }}
              />
            </Box>
            <Box
              className="aa"
              style={{
                borderRadius: "10px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text className="text-4xl font-bold mb-4" color="#2E1630">
                Quality Vehicles
              </Text>
              <Text className="text-xl" color="#2E1630">
                We offer safe transfer services, as we only work with new,
                well-maintained cars in our fleet.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box
        style={{
          paddingLeft: "20%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ChakraImage src={"/Group-4751.webp"} />
        <Box style={{ paddingRight: "25%", marginBottom: "10%" }}>
          <ButtonHover buttonText={"Get Your Offer"} />
        </Box>
      </Box>
      <ToursAgency />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-3xl font-bold mb-10">
          POPULAR TOURS
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              alt="Athens Acropolis, a historic architectural site with ancient ruins under a clear sky"
              className="w-full h-48 object-cover"
              src="https://placehold.co/600x400"
            />
            <div className="p-4">
              <div className="text-lg font-semibold">Athens Tour</div>
              <p className="text-sm text-gray-600">
                Highlights Acropolis, Temple of Zeus, Changing of the Guard,
                Presidential Residence, Old Parliament, Tomb of the Unknown
                Soldier, National Library...
              </p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              alt="Scenic view of Meteora monasteries with historical buildings surrounded by rocky landscape"
              className="w-full h-48 object-cover"
              src="https://placehold.co/600x400"
            />
            <div className="p-4">
              <div className="text-lg font-semibold">Delphi – Meteora</div>
              <p className="text-sm text-gray-600">
                Highlights Delphi, Thermopylae, Arachova, Kalambaka, Meteora
                Whether you are observing Meteora, Delphi, or Thermopylae, it is
                a captivating journey. The...
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              alt="Aerial view of Monemvasia with historic buildings and clear blue skies"
              className="w-full h-48 object-cover"
              src="https://placehold.co/600x400"
            />
            <div className="p-4">
              <div className="text-lg font-semibold">Monemvasia – Nafplio</div>
              <p className="text-sm text-gray-600">
                Highlights Corinth, Mycenae, Epidaurus Theater, Nafplio city,
                visit to a local winery, Mystras, Monemvasia DAY 1 Our excursion
                begins with...
              </p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              alt="View of Nafplio coast with historic architecture and vibrant blue waters"
              className="w-full h-48 object-cover"
              src="https://placehold.co/600x400"
            />
            <div className="p-4">
              <div className="text-lg font-semibold">
                One-day Trip to Nafplio (optional visit to Mycenae)
              </div>
              <p className="text-sm text-gray-600">
                Highlights Palamidi Fortress, Old Town, Bourtzi, Archaeological
                Museum, Kapodistrias Palace, First Parliament of Greece We
                depart in the morning with...
              </p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              alt="Delphi archaeological site with ancient ruins and mountains in the background"
              className="w-full h-48 object-cover"
              src="https://placehold.co/600x400"
            />
            <div className="p-4">
              <div className="text-lg font-semibold">Delphi Tour</div>
              <p className="text-sm text-gray-600">
                Highlights Archaeological Site of Delphi, Castalia Spring,
                Arachova. For enthusiasts of ancient Greek history and
                mysticism, there is no better...
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <ButtonHover buttonText={"More Tours"} />
        </div>
      </div>
    </main>
  );
}
