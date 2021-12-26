import { Button, IconButton } from "@chakra-ui/button"
import { Collapse, Image, Skeleton, useDisclosure } from "@chakra-ui/react"
import {
  Box,
  ListItem,
  Text,
  UnorderedList,
  Link as LinkChakra,
  Divider,
  Flex,
} from "@chakra-ui/layout"
import React from "react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { limitMiddleText } from "../utils/helpers"
import Link from "next/link"
import { HeaderTypes } from "../../../types"
import LoginButton from "../components/LoginButton"
import { Suspense } from "react"

function Header({ currentPage = "/" }: HeaderTypes) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box bg="pmGray" p={{ base: "0 0.5rem", lg: "0 1rem" }}>
      <Flex
        alignItems="center"
        justifyContent={{ base: "space-between", lg: "space-between" }}
        columns={{ base: 3, md: 3 }}
        height="100px"
        spacing={{ base: "1", md: "1" }}
      >
        <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={7} h={7} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Box
          display={{ base: "flex", lg: "initial" }}
          justifyContent={{ base: "center", lg: "auto" }}
          flex={{ base: 3, lg: "auto" }}
          sx={{
            img: {
              base: { width: "auto", height: "60px" },
              lg: { width: "35% !important", height: "auto !important" },
            },
          }}
        >
          <Image src="/img/logo.png" alt="Crypto Rocket" />
        </Box>

        <Box
          flex={{ base: 1, lg: "auto" }}
          textAlign="center"
          display={{ base: "none", lg: "flex" }}
        >
          <MenuItemsDesk currentPage={currentPage} />
        </Box>

        <Box
          display={{ base: "flex", lg: "initial" }}
          flex={{ base: 1, lg: "auto" }}
          textAlign="right"
        >
          <Suspense fallback={<Skeleton height="40px" borderRadius="md" />}>
            <LoginButton />
          </Suspense>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MenuItemsMobile />
      </Collapse>
    </Box>
  )
}

const MenuItemsMobile = () => {
  return (
    <UnorderedList
      m="0 !important"
      sx={{ li: { display: "flex", flexDirection: "column", p: "1rem 0", textAlign: "center" } }}
    >
      <ListItem>
        <Link href="/" passHref>
          <LinkChakra fontWeight="bold" color="#fff">
            Home
          </LinkChakra>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/rockets" passHref>
          <LinkChakra color="#737380">Rockets</LinkChakra>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/staking" passHref>
          <LinkChakra color="#737380">Staking</LinkChakra>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/marketplace" passHref>
          <LinkChakra color="#737380">Marketplace</LinkChakra>
        </Link>
      </ListItem>
    </UnorderedList>
  )
}

const MenuItemsDesk = ({ currentPage }: { currentPage: string }) => {
  return (
    <UnorderedList sx={{ li: { display: "inline", m: "0 1rem" } }}>
      <ListItem>
        <Link href="/" passHref>
          <LinkChakra
            _focus={{ outline: "none" }}
            fontWeight={currentPage === "/" ? "bold" : "normal"}
            color={currentPage === "/" ? "#fff" : "#737380"}
          >
            Home
          </LinkChakra>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/rockets" passHref>
          <LinkChakra
            _focus={{ outline: "none" }}
            fontWeight={currentPage === "rockets" ? "bold" : "normal"}
            color={currentPage === "rockets" ? "#fff" : "#737380"}
          >
            Rockets
          </LinkChakra>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/staking" passHref>
          <LinkChakra
            _focus={{ outline: "none" }}
            fontWeight={currentPage === "staking" ? "bold" : "normal"}
            color={currentPage === "staking" ? "#fff" : "#737380"}
          >
            Staking
          </LinkChakra>
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/marketplace" passHref>
          <LinkChakra
            _focus={{ outline: "none" }}
            fontWeight={currentPage === "marketplace" ? "bold" : "normal"}
            color={currentPage === "marketplace" ? "#fff" : "#737380"}
          >
            Marketplace
          </LinkChakra>
        </Link>
      </ListItem>
    </UnorderedList>
  )
}

export default Header
