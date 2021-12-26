import { Box, Image, Text, Grid } from "@chakra-ui/react"
import React from "react"

function SubHeader({
  icon,
  title,
  content,
}: {
  icon: string
  title: string
  content?: React.ReactNode
}) {
  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 3fr" }}
        spacing={8}
        bg="#121214"
        p="1.5rem 0"
        maxWidth="85%"
        m="0 auto"
        borderBottom="2px solid #202024;"
      >
        <Box display="flex" flexDirection="row" alignItems="center" css="gap: 1rem !important">
          <Image width={{ base: "30% !important", lg: "7% !important" }} src={icon} alt="CROCKET" />
          <Text fontFamily="Montserrat, sans-serif" color="#fff" fontSize="2rem" fontWeight="bold">
            {title}
          </Text>
        </Box>
        {content}
      </Grid>
    </>
  )
}

export default SubHeader
