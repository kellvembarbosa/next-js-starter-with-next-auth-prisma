import { Box, Text, Image, ListItem, UnorderedList, Button, Tag } from "@chakra-ui/react"
import { Nft } from "@prisma/client"
import Card from "app/core/components/common/Card"
import { getColorRarity, getNameRarity } from "app/core/utils/helpers"
import React from "react"
import {
  FaChartLine,
  FaUserAstronaut,
  FaDumbbell,
  FaStar,
  FaGasPump,
  FaTachometerAlt,
  FaPlus,
  FaHandHoldingUsd,
  FaPlay,
} from "react-icons/fa"

function BoxCars({
  isMarketplace = false,
  price,
  rocket,
  onClick,
}: {
  isMarketplace?: boolean
  price?: number
  rocket: any
  onClick?: () => void
}) {
  return (
    <>
      <Card>
        <Box
          display="flex"
          borderRadius="0.5rem"
          flexDirection="column"
          alignItems="center"
          border="1px solid #3a3f50"
          padding="0.5rem 2rem"
          background="#29292e"
        >
          <Text fontSize="0.8rem">Type</Text>
          <Tag background={getColorRarity(rocket.type)}>
            <Text
              fontSize="1.1rem"
              fontWeight="bold"
              color={rocket.type == 1 || rocket.type == 2 ? "gray.900" : "white"}
            >
              {getNameRarity(rocket.type)}
            </Text>
          </Tag>
        </Box>
        <Image src="/img/rocket.png" alt="Rocket" width="70%" margin="2rem auto" />
        <Box display="flex" flexDirection="row" css={{ gap: "0.5rem" }} margin="0 0 1rem">
          <Box
            display="flex"
            borderRadius="0.5rem"
            flex="2"
            flexDirection="column"
            justifyContent="center"
            padding="0.5rem 1rem"
            background="#29292e"
            border="1px solid #3a3f50"
          >
            <Text fontSize="0.8rem">Name</Text>
            <Text fontSize="1.1rem" fontWeight="bold">
              {rocket.name}
            </Text>
          </Box>
        </Box>
        <Box borderRadius="0.5rem" padding="1rem" background="#29292e" border="1px solid #3a3f50">
          <UnorderedList display="grid" gridTemplateColumns="1fr 1fr" css={{ gap: "0.5rem" }}>
            <ListItem
              display="flex"
              flexDirection="row"
              alignItems="center"
              css={{ gap: "0.5rem" }}
            >
              <FaChartLine />
              <Text>
                Level: <strong>{rocket.nftAttributes!.level}</strong>
              </Text>
            </ListItem>
            <ListItem
              display="flex"
              flexDirection="row"
              alignItems="center"
              css={{ gap: "0.5rem" }}
            >
              <FaDumbbell />
              <Text>
                Power: <strong>{rocket.nftAttributes.power}</strong>
              </Text>
            </ListItem>
            <ListItem
              display="flex"
              flexDirection="row"
              alignItems="center"
              css={{ gap: "0.5rem" }}
            >
              <FaStar />
              <Text>
                Exp: <strong>{rocket.nftAttributes!.exp}</strong>
              </Text>
            </ListItem>
            <ListItem
              display="flex"
              flexDirection="row"
              alignItems="center"
              css={{ gap: "0.5rem" }}
            >
              <FaGasPump />
              <Text>
                Fuel: 0/<strong>{rocket.nftAttributes!.fuel}</strong>
              </Text>
            </ListItem>
            <ListItem
              display="flex"
              flexDirection="row"
              alignItems="center"
              css={{ gap: "0.5rem" }}
            >
              <FaTachometerAlt />
              <Text>
                Speed: <strong>{rocket.nftAttributes.speed}</strong>
              </Text>
            </ListItem>
            <ListItem
              display="flex"
              flexDirection="row"
              alignItems="center"
              css={{ gap: "0.5rem" }}
            >
              <FaUserAstronaut />
              <Text>
                Pilots: <strong>{rocket.nftAttributes.pilots}</strong>
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        {!isMarketplace && (
          <Box
            display="flex"
            margin="1rem 0 0"
            width="100%"
            css={{ gap: "1rem" }}
            flexDirection="row"
          >
            <Button
              _hover={{ background: "#424242" }}
              display="flex"
              flex="1"
              leftIcon={<FaHandHoldingUsd />}
              background="#2d2d2e"
              color="white"
              variant="solid"
            >
              REWARDS
            </Button>
            <Button
              _hover={{ background: "#424242" }}
              display="flex"
              flex="1"
              leftIcon={<FaPlay />}
              background="#2d2d2e"
              color="white"
              variant="solid"
            >
              START
            </Button>
          </Box>
        )}

        {isMarketplace && (
          <Box
            borderRadius="0.5rem"
            margin="1rem 0"
            padding="1rem"
            css={{ gap: "1rem" }}
            background="#29292e"
            border="1px solid #3a3f50"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Image src="/crocket.png" alt="" width="10%" />
            <Text color="#fff" fontWeight="bold" fontSize="2rem">
              {price} {process.env.BLITZ_PUBLIC_COINAME}
            </Text>
          </Box>
        )}
        <Box
          display="flex"
          margin="1rem 0 0"
          width="100%"
          css={{ gap: "1rem" }}
          flexDirection="row"
        >
          <Button
            _hover={{ background: "#fe059c" }}
            onClick={onClick}
            display="flex"
            flex="1"
            leftIcon={<FaPlus />}
            background="#5f0ea6"
            color="white"
            variant="solid"
          >
            VIEW MORE
          </Button>
        </Box>
      </Card>
    </>
  )
}

export default BoxCars
