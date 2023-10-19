import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import heroImage from "/images/hero-banner.jpg";
import demo from "/images/demo_1.jpg";
import demo2 from "/images/demo_2.jpg";
import ProductCard from "../components/ProductCard";
import SectionWrapper from "../components/SectionWrapper";
import { Text, Link } from "@nextui-org/react";
import { FaMapMarked } from "react-icons/fa";
import { GiWoodFrame, GiResize } from "react-icons/gi";
import popularProducts from '../data/products.json'
export default function Home() {
  // const popularProducts = [
  //   {
  //     productId: 1,
  //     name: "Old world map in Mercator Projection",
  //     description: "",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/mercator-map-of-the-world-ernest-dudley-chase-interior_285x399_82d.webp",
  //     price: 1,
  //   },
  //   {
  //     productId: 2,
  //     name: "Textile",
  //     description: "",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/textile-print_285x399_82d.webp",
  //     price: 1300,
  //   },
  //   {
  //     productId: 3,
  //     name: "Textile",
  //     description: "",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/faces-candles-eyes1_285x399_82d.webp",
  //     price: 1300,
  //   },
  //   {
  //     productId: 4,
  //     name: "Textile",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/new-york-print4_285x399_82d.webp",
  //     description: "",
  //     price: 1300,
  //   },
  //   {
  //     productId: 5,
  //     name: "Textile",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/eye-wall_285x399_82d.webp",
  //     description: "",
  //     price: 1300,
  //   },
  //   {
  //     productId: 6,
  //     name: "Textile",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/two-faces-one-line_285x399_82d.webp",
  //     description: "",
  //     price: 1300,
  //   },
  //   {
  //     productId: 7,
  //     name: "Textile",
  //     description: "",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/saint-smoke-2_285x399_82d.webp",
  //     price: 1300,
  //   },
  //   {
  //     productId: 8,
  //     name: "Textile",
  //     description: "",
  //     url: "https://mapny.store/assets/cache_image/img/catalog/leaves-eyes-frame_285x399_82d.webp",
  //     price: 1300,
  //   },
  // ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Alay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className="hero-section flex flex-col w-full ">
          <div className="hero-image-wrapper relative min-h-[260px] md:h-[75vh] lg:h-[80vh] ">
            <Image layout="fill" objectFit="cover" src={heroImage} />
          </div>
          <div className="bg-oyster-bay hero-description text-center pt-8 px-12  md:absolute md:ml-12 md:top-2/4 md:-translate-y-2/4 md:max-w-[45%] md:text-left xl:ml-48 xl:pt-16 xl:px-24">
            <div className="hero-logo mb-8">
              <h1 className="text-3xl text-left font-allura">New Collection</h1>
              <div className="tracking-wide text-5xl uppercase text-left font-thin ">
                style <br /> your <br /> walls
              </div>
            </div>

            <div className="design-button-wrapper bg-secondary mb-16 w-40 h-12 items-center md:w-48 md:text-lg text-center flex align-middle justify-center">
              <a href="#" className="md:text-lg ">
                Design your own
              </a>
            </div>
          </div>
        </section>
        <SectionWrapper>
          <div className="how-to-landing text-center md:mt-28 max-h-[600px]">
            <div className="flex flex-col md:flex-row md:gap-x-8">
              <div className="image-wrapper md:grow md:basis-0 relative h-[300px] md:h-[600px]">
                <Image src={demo} layout="fill" objectFit="cover" />
              </div>
              <div className="p-7 text-left md:grow md:basis-0 m-auto">
                <div className=" ">
                  <div className="mt-6 mb-8 md:mt-0">
                    <Text className="text-2xl capitalize">
                      Create a striking artwork in 3 steps
                    </Text>
                  </div>
                  <div>
                    <ul>
                      <li className="mb-4">
                        <div className="grid grid-cols-12">
                          <div>
                            <FaMapMarked className=" mt-2 text-secondary text-xl" />
                          </div>
                          <div className="col-span-11">
                            <div className="text-lg capitalize">
                              choose your city
                            </div>
                            <div className="mt-1">
                              we have all the cities in India, from the smallest
                              towns to the biggest cities
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-4">
                        <div className="grid grid-cols-12">
                          <div className="">
                            <GiResize className="mt-2 text-secondary text-xl" />
                          </div>
                          <div className="col-span-11">
                            <div className="text-lg capitalize">
                              customize your poster
                            </div>
                            <div className="mt-1">
                              Our custom editor comes with a choice of 15
                              beautiful styles.Zoom in and out to find your
                              house on the map! Customize yhe text on your
                              poster to make it extra special
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="grid grid-cols-12">
                          <div className="">
                            <GiWoodFrame className="mt-2 text-secondary text-xl" />
                          </div>
                          <div className="col-span-11">
                            <div className="text-lg capitalize">
                              choose your size
                            </div>
                            <div className="mt-1">
                              Our custom posters are available in 6 sizes, pick
                              the ones that suits you best and enjoy!
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="how-to-landing text-center md:mt-16 max-h-[600px] mt-48">
            <div className="flex flex-col-reverse md:flex-row md:gap-x-8">
              <div className="p-7 text-left md:grow md:basis-0 m-auto">
                <div>
                  <div className="mt-6 mb-8 md:mt-0">
                    <Text className="text-2xl capitalize">
                      Let the stars bring your special moments to life
                    </Text>
                  </div>
                  <div>
                    Each moment is unique. And the way the night sky looked is
                    unique to that date and location. Create your own night sky
                    poster with our Starmap editor!
                  </div>
                  <button>DESIGN YOUR POSTER</button>
                </div>
              </div>
              <div className="image-wrapper md:grow md:basis-0 relative h-[300px] md:h-[600px]">
                <Image src={demo2} layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="how-to-landing text-center md:mt-16 max-h-[600px] ">
            <div className="flex flex-col md:flex-row md:gap-x-8">
              <div className="image-wrapper md:grow md:basis-0 relative h-[300px] md:h-[600px]">
                <Image src={demo} layout="fill" objectFit="cover" />
              </div>
              <div className="p-7 text-left md:grow md:basis-0 m-auto">
                <div className=" ">
                  <div className="mt-6 mb-8 md:mt-0">
                    <Text className="text-2xl capitalize">
                      Bespoke maps to tell your story, your way
                    </Text>
                  </div>
                  <div>
                    Transform your space with personalized maps. Easily create
                    custom posters of your favorite places, no matter how small
                    or unique. Choose from 15 stylish designs and add a personal
                    touch with custom text. Perfect for gifting or making your
                    space stand out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="flex justify-center wrapper  mx-auto text-center mt-48 md:mt-24">
            <div className="popular text-center">
              <Text className="mb-4 text-2xl">POPULAR POSTERS AND MAPS</Text>
              <div className="mt-8 justify-items-center  grid  gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-flow-col 2xl:auto-cols-fr ">
                {popularProducts.map((product) => (
                  <div className="max-w-[250px]">
                    <ProductCard url={product.url} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
        <section className="inspiration"></section>
      </main>
    </div>
  );
}
