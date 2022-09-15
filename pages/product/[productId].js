import React, { useState } from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "nextjs-antd-breadcrumbs";
import SectionWrapper from "../../components/SectionWrapper";
import Image from "next/image";
import { Image as NextImage, Text, Input, Collapse, Dropdown } from "@nextui-org/react";
import TypeSelection from "../../components/TypeSelection";
import Button from "../../components/Button";
const Product = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (data) => {
    console.log(data.target.value);
    setQuantity(data.target.value);
  };
  const [selected, setSelected] = React.useState(new Set([1]));

  const product = {
    productId: 1,
    title: " I'm a product",
    price: 1200,
    description: `I'm a product description. This is a great place to "sell" your product and grab buyers' attention. Describe your product clearly and concisely. Use unique keywords. Write your own description instead of using manufacturers' copy.`,
  };
  const setFrameType = (frame) => {
    console.log(frame);
  };
  return (
    <div className=''>
      <SectionWrapper className='text-center'>
        <div className='flex flex-col justify-center md:flex-row'>
          <section className='product-image-section flex flex-col justify-center basis-0 md:grow md:justify-start md:max-w-[600px]'>
            <div className=''>
              <NextImage
                alt='Default Image'
                objectFit='cover'
                src='https://static.wixstatic.com/media/f61af8_0e1d112d72604aae9e506c5919bd1696~mv2_d_2433_2987_s_4_2.png/v1/fill/w_480,h_590,al_c,q_90,usm_0.66_1.00_0.01/f61af8_0e1d112d72604aae9e506c5919bd1696~mv2_d_2433_2987_s_4_2.webp'
              />
            </div>
            <div className='hidden md:block mt-6'>
              <Text>{product.description}</Text>
            </div>
          </section>
          <div className='space mt-8 md:mr-6' />
          <section className='product-details-section basis-0 md:grow md:max-w-[455px]'>
            <div>
              <Text
                className='text-3xl'
                style={{
                  lineHeight: "1.2em",
                }}>
                {product.title}
              </Text>
              <Text
                className='text-xl'
                style={{
                  lineHeight: "1.4em",
                }}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </Text>
              {/* <div className='frame-type-selection-wrapper'>
              <Text className='text-base'>Frame Type</Text>
              <TypeSelection
                items={[
                  {
                    name: "Wooden",
                    url: "",
                    value: "wooden",
                  },
                  {
                    name: "Metal",
                    url: "",
                    value: "metal",
                  },
                ]}
                defaultIndex={0}
                onChecked={setFrameType}
              />
              
            </div>
            <div className='color-selection-wrapper'>
            <Text className='text-base'>Color</Text>
              <TypeSelection
                items={[
                  {
                    name: "Wooden",
                    url: "",
                    value: "wooden",
                  },
                  {
                    name: "Metal",
                    url: "",
                    value: "metal",
                  },
                ]}
                defaultIndex={0}
                onChecked={setFrameType}
              />
              
            </div> */}
              <div className='size-wrapper mt-4'>
                <Text className='text-basw'>Size</Text>
                <TypeSelection
                  items={[
                    {
                      name: "11x17",
                      url: "",
                      value: "small",
                    },
                    {
                      name: "17x24",
                      url: "",
                      value: "medium",
                    },
                    {
                      name: "24x36",
                      url: "",
                      value: "large",
                    },
                  ]}
                  defaultIndex={0}
                  onChecked={setFrameType}
                />
              </div>
              <div className='quantity-wrapper mt-4'>
                <Text>Quantity</Text>
                <Dropdown>
                  <Dropdown.Button flat color={"black"}>
                    {selected}
                  </Dropdown.Button>
                  <Dropdown.Menu
                    aria-label='Single selection actions'
                    disallowEmptySelection
                    selectionMode='single'
                    selectedKeys={selected}
                    onSelectionChange={setSelected}>
                    <Dropdown.Item key='1'>1</Dropdown.Item>
                    <Dropdown.Item key='2'>2</Dropdown.Item>
                    <Dropdown.Item key='3'>3</Dropdown.Item>
                    <Dropdown.Item key='4'>4</Dropdown.Item>
                    <Dropdown.Item key='5'>5</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className='add-to-cart-wrapper mt-4 md:max-w-[355px]'>
                <Button color='bg-tint-dark-gray'>Add to Cart</Button>
                <div className='mt-2'>
                  <Button color={"bg-tint-black"}>Buy Now</Button>
                </div>
              </div>
              <div className='mt-4 md:hidden'>
                <Text>{product.description}</Text>
              </div>
              <div className='product-specification mt-4'>
                <Collapse.Group accordion={false}>
                  <Collapse title='Product Info'>
                    <Text>
                      I'm a product detail. I'm a great place to add more information about your product such as sizing,
                      material, care and cleaning instructions. This is also a great space to write what makes this
                      product special and how your customers can benefit from this item. Buyers like to know what
                      they’re getting before they purchase, so give them as much information as possible so they can buy
                      with confidence and certainty.
                    </Text>
                  </Collapse>
                  <Collapse title='Return and Refund Policy'>
                    <Text>
                      I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case
                      they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a
                      great way to build trust and reassure your customers that they can buy with confidence.
                    </Text>
                  </Collapse>
                </Collapse.Group>
              </div>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Product;
