import { Box, UnorderedList, ListItem, Button, Image, Text } from "@chakra-ui/react"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import {MotionBox} from "./MotionBox";
import Card from "./Card";

const BuildCard = ({
  title,
  image,
  isLoading = false,
  price = 0,
  onClick,
}: {
  title: string
  image: string
  isLoading?: boolean
  price?: number
  onClick: (e: any) => void
}) => {
  return (
    <Card>
      <Image src={image} alt="Rocket" width="70%" margin="2rem auto" />

      <Box display="flex" flexDirection="row" css={{ gap: "0.5rem" }} margin="0 0 1rem">
        <Box
          display="flex"
          borderRadius="0.5rem"
          alignItems="center"
          flex="2"
          flexDirection="column"
          justifyContent="center"
          padding="0.5rem 1rem"
          background="#29292e"
          border="1px solid #3a3f50"
        >
          <Text fontSize="1.1rem" fontWeight="bold">
            {title}
          </Text>
        </Box>
      </Box>
      <Box borderRadius="0.5rem" padding="1rem" background="#29292e" border="1px solid #3a3f50">
        <UnorderedList display="grid" gridTemplateColumns="1fr 1fr" css={{ gap: "0.5rem" }}>
          <ListItem display="flex" flexDirection="row" alignItems="center" css={{ gap: "0.5rem" }}>
            <FaCircle color="#d8d8d8" />
            <Text>
              Common: <strong>50%</strong>
            </Text>
          </ListItem>
          <ListItem display="flex" flexDirection="row" alignItems="center" css={{ gap: "0.5rem" }}>
            <FaCircle color="#80e220" />
            <Text>
              Uncommon: <strong>35%</strong>
            </Text>
          </ListItem>
          <ListItem display="flex" flexDirection="row" alignItems="center" css={{ gap: "0.5rem" }}>
            <FaCircle color="#618ffc" />
            <Text>
              Unique: <strong>12%</strong>
            </Text>
          </ListItem>
          <ListItem display="flex" flexDirection="row" alignItems="center" css={{ gap: "0.5rem" }}>
            <FaCircle color="#ae21e2" />
            <Text>
              Rare: <strong>2.5%</strong>
            </Text>
          </ListItem>
          <ListItem display="flex" flexDirection="row" alignItems="center" css={{ gap: "0.5rem" }}>
            <FaCircle color="#fd8209" />
            <Text>
              Epic: <strong>2%</strong>
            </Text>
          </ListItem>
          <ListItem display="flex" flexDirection="row" alignItems="center" css={{ gap: "0.5rem" }}>
            <FaCircle color="#b89400" />
            <Text>
              SpaceX: <strong>0.5%</strong>
            </Text>
          </ListItem>
        </UnorderedList>
      </Box>

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
        <MotionBox
          whileHover={{
            scale: 1.4,
          }}
        >
          <Image src="/img/crocket.png" alt="" width="100%" />
        </MotionBox>
        <Text color="#fff" fontWeight="bold" fontSize="2rem">
          {price} {process.env.BLITZ_PUBLIC_COINAME}
        </Text>
      </Box>

      <Box display="flex" margin="1rem 0 0" width="100%" css={{ gap: "1rem" }} flexDirection="row">
        <Button
          isLoading={isLoading}
          _hover={{ background: "#fe059c" }}
          onClick={onClick}
          display="flex"
          flex="1"
          leftIcon={<FaShoppingCart />}
          background="#5f0ea6"
          color="white"
          variant="solid"
        >
          BUILD YOUR {process.env.BLITZ_PUBLIC_COINAME}
        </Button>
      </Box>
    </Card>
  )
}

export default BuildCard
