import Image from "next/image";
import acropolis from "../../public/home1.jpg";
import parthenon from "../../public/parthenon.jpg";
import im1 from "../../public/Group-42.webp";
import im2 from "../../public/Group-471-1.webp";
import im3 from "../../public/Group-471.webp";
import im4 from "../../public/Group-472.webp";
import im5 from "../../public/Group-474.webp";

export default function Home() {
  return (
    <main className="home" style={{ paddingTop: "5%" }}>
      <div className="container flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-2/3 pr-8 flex items-center">
          <div className="pl-10">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#2E1630" }}
            >
              Explore Greece Discover the most famous sites of Ancient Greece:
            </h2>
            <p className="text-xl" style={{ color: "#2E1630" }}>
              Archaeological sites like the Acropolis of Athens, Sanctuary of
              Delphi, Ancient Olympia, Delos island, Palace of Knossos in Crete,
              Ancient Epidaurus and Mycenae.
            </p>
            <div className="flex justify-center mt-4">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-red-700 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex justify-end pl-10">
          <Image src={acropolis} alt="acropolis" />
        </div>
      </div>
      <div
        className="container flex flex-wrap justify-between "
        style={{ paddingTop: "10%" }}
      >
        <div className="w-full md:w-1/2 lg:w-2/3 pr-8 flex items-center">
          <div className="pl-10">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#2E1630" }}
            >
              FIVE REASONS WHY YOU SHOULD VISIT GREEK ARCHAEOLOGICAL SITES:
            </h2>
            <p className="text-xl" style={{ color: "#2E1630" }}>
              Greece is filled with rich ancient history that will leave you
              mesmerized. With lots of archeological structures, Greece has more
              than 18 UNESCO Heritage-listed sites. If you’re a history lover or
              not, take the time to visit the Acropolis, open-air museum of
              Dolos, Parthenon, Temple of Olympian – Zeus to name a few
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex justify-end pl-10">
          <Image src={parthenon} alt="acropolis" />
        </div>
      </div>
      <div className="pt-20">
        <div
          className="container flex justify-center items-center"
          style={{
            width: "60%",
            height: "60%",
            marginLeft: "17%",
            backgroundColor: "#FFE1D5",
            borderRadius: "20px",
          }}
        >
          <div className="container flex flex-wrap justify-between p-4 rounded-xl">
            <div className="w-full lg:w-2/3 flex flex-wrap items-center">
              <div className="w-full lg:w-1/3">
                <div className="elementor-element elementor-element-8989e9a">
                  <Image src={im2} alt="2" />
                </div>
                <div className="elementor-element elementor-element-58b671e mt-4 lg:mt-0">
                  <Image src={im4} alt="2" />
                </div>
                <div className="elementor-element elementor-element-ee50481 mt-4 lg:mt-0">
                  <Image src={im3} alt="3" />
                </div>
              </div>
              <div className="w-full lg:w-2/3 lg:pl-10">
                <h2
                  className="text-xl font-bold mb-4 pt-5"
                  style={{ color: "#2E1630", fontSize: "30px" }}
                >
                  WHY CHOOSE US
                </h2>
                <ul
                  className="list-disc ml-4"
                  style={{ color: "#2E1630", fontSize: "25px" }}
                >
                  <li>
                    Affordable Price Guarantee
                    <br />
                    Discover Greek archaeological sites without breaking the
                    bank, with our unbeatable tour deals
                  </li>
                  <li>
                    High Qualified Services
                    <br />
                    We design guided tour experiences that provide comfort and
                    convenience
                  </li>
                  <li>
                    Wide variety of options
                    <br />
                    We design guided tour experiences that provide comfort and
                    convenience
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:justify-between lg:w-1/3">
              <div className="flex-grow mb-4">
                <div className="elementor-element elementor-element-8989e9a">
                  <Image src={im1} alt="1" />
                </div>
              </div>
              <div className="flex-grow pt-40">
                <Image src={im5} alt="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
