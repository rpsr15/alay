import React, { useEffect } from "react";
import { Link as NextLink } from "@nextui-org/react";
import PropTypes from "prop-types";
import { Card, Text } from "@nextui-org/react";
import Button from "./Button";
function ProductCard({ url }) {
  useEffect(() => {
    console.log("url", url);
  }, [url]);
  const price = 1200;
  return (
    <NextLink href='#' className=''>
      <Card className='text-centre group bg-background-gray rounded-none' variant="flat">
        <Card.Body className='overflow-hidden p-0'>
          <Card.Image src={url} className='group-hover:scale-125' />
        </Card.Body>
        <Card.Header>
          <Text className='w-full text-left' size={"1rem"}>
            Visakhapatham
          </Text>
          <Text className='text-right'>
            {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumSignificantDigits: 3 }).format(
              price
            )}
          </Text>
        </Card.Header>
        <Card.Divider />
        {/* <Card.Footer className='flex-col'>
        
        <div className="group">
          <Button color={"transition  bg-tint-dark-gray invisible  group-hover:visible"} className='text-black' size='sm'>
            Add to Cart
          </Button>
        </div>
      </Card.Footer> */}
      </Card>
    </NextLink>
  );
}

ProductCard.propTypes = {};

export default ProductCard;
