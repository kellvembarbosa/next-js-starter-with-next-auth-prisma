import React from 'react';
import SubHeader from "../../core/components/SubHeader";
import BuildCard from "../../core/components/common/BuildCard";
import {Box, SimpleGrid} from "@chakra-ui/react";
import {CustomNextPage} from "../../../types/auth.types";
import Layout from "../../core/layout/Layout";
import useIsConnected from "../../core/hooks/useIsConnected";

const BuildRocket: CustomNextPage = () => {
    const isConnected = useIsConnected();

    if(!isConnected)
        return <>Loading...</>

    return (
        <>
            <SubHeader icon="/img/iconRocket.png" title="build your rocket" />
            <Box display="flex" alignItems="center" justifyContent="center" maxWidth="85%" m="3rem auto">
                <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={8}>
                    <BuildCard
                        title="Station Bronze"
                        image="/img/baseStation.png"
                        price={500}
                        isLoading={false}
                        onClick={() => {}}
                    />
                </SimpleGrid>
            </Box>
        </>
    );
};

BuildRocket.getLayout = (page) => <Layout title={"Build Rocket"} currentPage={'rockets'}>{page}</Layout>;
export default BuildRocket;