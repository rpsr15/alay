import Head from "next/head";
import SimpleImageSlider from "react-simple-image-slider";
import styles from "../styles/Home.module.css";
import { Button } from "semantic-ui-react";
import { useState, useContext } from "react";
import Image from "next/image";
import { Image as SemanticImage } from "semantic-ui-react";
import heroImage from "/images/hero.webp";
import heroMobileImage from "/images/hero_mobile.jpg";
import borderBackground from "/images/mobile_border_background.webp";
import mobileDemo2 from "/images/mobile_demo2.webp";
import mobileDemo3 from "/images/mobile_demo3.webp";
import mobileDemo4 from "/images/mobile_demo4.webp";
import useResizeObserver from "use-resize-observer";

const SectionWrapper = ({ children }) => {
  return <section>{children}</section>;
};
export default function Home() {
  const { ref, width = 1, height = 1 } = useResizeObserver();
  const popularProducts = [
    {
      productId: 1,
      name: "Old world map in Mercator Projection",
      description: "",
      url: "https://mapny.store/assets/cache_image/img/catalog/mercator-map-of-the-world-ernest-dudley-chase-interior_285x399_82d.webp",
      price: 1,
    },
    {
      productId: 2,
      name: "Textile",
      description: "",
      url: "https://mapny.store/assets/cache_image/img/catalog/textile-print_285x399_82d.webp",
      price: 1300,
    },
    {
      productId: 3,
      name: "Textile",
      description: "",
      url: "https://mapny.store/assets/cache_image/img/catalog/faces-candles-eyes1_285x399_82d.webp",
      price: 1300,
    },
    {
      productId: 4,
      name: "Textile",
      url: "https://mapny.store/assets/cache_image/img/catalog/new-york-print4_285x399_82d.webp",
      description: "",
      price: 1300,
    },
    {
      productId: 5,
      name: "Textile",
      url: "https://mapny.store/assets/cache_image/img/catalog/eye-wall_285x399_82d.webp",
      description: "",
      price: 1300,
    },
    {
      productId: 6,
      name: "Textile",
      url: "https://mapny.store/assets/cache_image/img/catalog/two-faces-one-line_285x399_82d.webp",
      description: "",
      price: 1300,
    },
    {
      productId: 7,
      name: "Textile",
      description: "",
      url: "https://mapny.store/assets/cache_image/img/catalog/saint-smoke-2_285x399_82d.webp",
      price: 1300,
    },
    {
      productId: 8,
      name: "Textile",
      description: "",
      url: "https://mapny.store/assets/cache_image/img/catalog/leaves-eyes-frame_285x399_82d.webp",
      price: 1300,
    },
  ];
  const slideImages = [
    {
      url: "https://static.wixstatic.com/media/84770f_bde889cbaedd4544be894767f6edda3f~mv2_d_1470_1560_s_2.png/v1/fill/w_572,h_690,q_90/84770f_bde889cbaedd4544be894767f6edda3f~mv2_d_1470_1560_s_2.webp",
    },
    {
      url: "https://static.wixstatic.com/media/84770f_736da3e2a21f4a36969a4ce08a4f6166~mv2.jpg/v1/fill/w_572,h_690,q_90/84770f_736da3e2a21f4a36969a4ce08a4f6166~mv2.webp",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className='hero-section flex flex-col w-full md:relative'>
          <div className='hero-image-wrapper'>
            <Image layout='responsive' src={heroImage} />
          </div>
          <div className='hero-description text-center pt-8 px-5 md:absolute md:ml-12 md:top-2/4 md:-translate-y-2/4 md:max-w-[45%] md:text-left'>
            <div className='hero-logo'>
              <h1 className='font-semibold'>
                Custom posters for
                <br />
                meaningful moments
              </h1>
            </div>
            <div className='hero-para mt-3 md:text-lg'>
              Make your home more your with unique prints and products that truly express who you are . Great art tells
              a story, and we're sure that you have some amazing stories to share with the world
            </div>
            <div className='design-button-wrapper mt-4 md:text-lg'>
              <Button className='md:text-lg' style={{ backgroundColor: "#F8A888" }}>
                Design your own
              </Button>
            </div>
          </div>
        </section>
        <section className='showcase text-center mt-8 px-5'>
          <div className='grid sm:grid-cols-2 gap-4'>
            <div className=''>
              <div className='text-left'>
                <div className=' text-3xl'>
                  FRESH <br />
                  POSTERS
                </div>
                <div className='text-2xl mt-1 font-greatvibes'>This Summer</div>
                <div className='text-sm mt-2 '>
                  I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text".
                </div>
              </div>
            </div>
            <div className='text-center relative mt-10 sm:row-span-2' style={{ backgroundColor: "#CCEAEA" }}>
              <Image src={mobileDemo2} layout='intrinsic' />
              <div className='absolute  left-14 bottom-8'>
                <div>TROPICAL COLLECTION</div>
                <a>Shop Now</a>
              </div>
            </div>
            <div className=' sm:row-span-2'>
              {" "}
              <div className='relative mt-6 w-11/12' ref={ref}>
                <div>
                  <Image src={borderBackground} layout='intrinsic' />
                </div>
                <div className='absolute top-6 left-6'>
                  <SimpleImageSlider width={width} height={height} images={slideImages} autoPlay={true} />
                </div>
              </div>
            </div>
            <div className='text-center relative mt-10 sm:row-span-2' style={{ backgroundColor: "#F5E5D6" }}>
              <Image src={mobileDemo3} layout='intrinsic' />
              <div className='absolute  left-14 bottom-8'>
                <div>FREEDOM COLLECTION</div>
                <a>Shop Now</a>
              </div>
            </div>
            <div className='border-4 border-black text-center relative mt-10sm:row-span-2'>
              <Image src={mobileDemo4} layout='intrinsic' />
              <div className='absolute bottom-8 left-14'>
                <div>TROPICAL COLLECTION</div>
                <a>Shop Now</a>
              </div>
            </div>
          </div>
        </section>
        <SectionWrapper>
        <div className='popular text-center'>
          <div>POPULAR POSTERS AND MAPS</div>
          <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-flow-col lg:auto-cols-fr '>
            {popularProducts.map((product) => (
              <div>
                <SemanticImage src={product.url} />
              </div>
            ))}
          </div>
        </div>
        </SectionWrapper>
        <section className='inspiration'></section>
      </main>
    </div>
  );
}
