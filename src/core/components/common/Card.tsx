import { Box } from "@chakra-ui/react"
import React from "react"
import { MotionBox } from "./MotionBox"

function Card({ children, ...rest }) {
  return (
    <MotionBox
      cursor="pointer"
      whileHover={{ scale: 1.05 }}
      animate={{ scale: [1, 1.01, 1] }}
      transition={{ duration: 0.3 }}
      bg="#212125"
      borderRadius="0.5rem"
      p="2rem 1rem"
      color="#fff"
      {...rest}
    >
      {children}
    </MotionBox>
  )
}

export default Card
