import { Box, SimpleGrid, Skeleton, Image, Text, Grid } from "@chakra-ui/react"
import Card from "app/core/components/common/Card"
import React from "react"

function LoadingRocketPage() {
  const LoadingBox = () => {
    return (
      <Card>
        <Skeleton height="40px" borderRadius="md" />
        <Skeleton margin="2rem auto" height="200px" borderRadius="md" />
        <Skeleton margin="1rem auto" height="50px" borderRadius="md" />
        <Skeleton margin="1rem auto" height="80px" borderRadius="md" />
        <Skeleton margin="0 auto" height="40px" borderRadius="md" />
      </Card>
    )
  }
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
        <Skeleton width="90%" height="40px" borderRadius="md" />
        <Skeleton width="100%" height="40px" borderRadius="md" />
      </Grid>
      <Box alignItems="center" justifyContent="center" maxWidth="85%" m="3rem auto">
        <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={8}>
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
          <LoadingBox />
        </SimpleGrid>
      </Box>
    </>
  )
}

export default LoadingRocketPage
