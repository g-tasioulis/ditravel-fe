import {
  Box,
  Button,
  Flex,
  Image as ChakraImage,
  Text,
  Grid,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="home" style={{ paddingTop: "5%" }}>
      <Box>
        <Box>
          <Flex justifyContent="center">
            <Box maxW={{ base: "100%", lg: "2/3" }} w="100%">
              <Flex alignItems="center">
                <Box mr={{ base: 0, lg: "20%" }} pl={40}>
                  <Text fontSize="4xl" fontWeight="bold" mb={4} color="#2E1630">
                    Explore Greece Discover the most famous sites of Ancient
                    Greece:
                  </Text>
                  <Text fontSize="xl" color="#2E1630">
                    Archaeological sites like the Acropolis of Athens, Sanctuary
                    of Delphi, Ancient Olympia, Delos island, Palace of Knossos
                    in Crete, Ancient Epidaurus and Mycenae.
                  </Text>
                  <Flex justifyContent="center" mt={4}>
                    <Button
                      className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
                      _hover={{ ".bg-red-700": { width: "full" } }}
                    >
                      <Box className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></Box>
                      <Text className="relative text-black group-hover:text-white">
                        Explore
                      </Text>
                    </Button>
                  </Flex>
                </Box>
                <Box style={{ paddingRight: "15%" }}>
                  <ChakraImage src={"/home1.jpg"} alt="acropolis" />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
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
                more than 18 UNESCO Heritage-listed sites. If you’re a history
                lover or not, take the time to visit the Acropolis, open-air
                museum of Delos, Parthenon, Temple of Olympian – Zeus to name a
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

        <Box className="grid grid-cols-2 pt-20">
          <Box
            className="w-full md:w-1/2 lg:full items-center mx-auto"
            style={{ marginRight: "10%" }}
          >
            <Box
              className="aa"
              style={{
                backgroundColor: "#e6e8ea",
                borderRadius: "10px",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Text className="text-4xl font-bold mb-4" color="#2E1630">
                PORT & AIRPORT TRANSFERS
              </Text>
              <Text className="text-xl" color="#2E1630">
                We know that finding a taxi service in a foreign country can be
                difficult and stressful. Schedule your transfer and enjoy the
                best service with all inclusive, no surprises. The driver will
                pick you up directly from the airport terminal or the port, will
                help with your luggage and take you directly to your hotel or
                any other destination, and vice versa.
              </Text>
            </Box>
          </Box>
          <Box className="w-full sm:w-1/2 md:w-1/2 justify-end">
            <ChakraImage
              src={"/car.png"}
              alt="car"
              style={{ borderRadius: "10px", height: "90%" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          paddingTop: "5%",
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
                We are much cheaper than the local ‘on-the-meter’ taxis in
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
        <Button
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          _hover={{ ".bg-red-700": { width: "full" } }}
        >
          <Box className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></Box>
          <Text className="relative text-black group-hover:text-white">
            Book Now
          </Text>
        </Button>
      </Box>
      <Box
        style={{
          paddingLeft: "20%",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ChakraImage src={"/Group-4751.webp"} />
        <Button
          className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
          _hover={{ ".bg-red-700": { width: "full" } }}
          style={{ marginRight: "20%", marginBottom: "5%" }}
        >
          <Box className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></Box>
          <Text className="relative text-black group-hover:text-white">
            Get Your Offer
          </Text>
        </Button>
      </Box>
    </main>
  );
}
