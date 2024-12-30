import React, {useState} from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import property from "@/pages/property";
import TopPropertyCard from "./TopPropertyCard";

const TrendProperties =( { initialInput, ...props}: any) => {
    const [trendProperties, setTrendProperties] = useState<number[]>(initialInput);
    return (
        <Stack className={"top-properties"}>
            <Stack className={"container"}>
                <Stack className={"left"}>
                    <Box className={"left"}>
                        <span>Top properties</span>
                        <p>Check out Top Properties</p>
                    </Box>
                    <Box className={"right"}>
                        <div className={"pagination-box"}>
                            <WestIcon className={"swiper-top-pagination"} />
                            <div className={"swiper-top-pagination"}></div>
                            <EastIcon className={"swiper-top-next"} />
                        </div>
                    </Box>
                </Stack>
                <Stack className={"card-box"}>
                  <Swiper 
                     className={"top-property-swiper"}
                     slidesPerView={"auto"}
                     spaceBetween={15}
                     navigation={{
                        nextEl: ".swiper-top-next",
                        prevEl: ".swiper-top-prev",
                     }}
                     pagination={{
                        el: ".swiper-top-pagination",
                     }}
                     >
                        {trendProperties.map((property, index) => {
                            return(
                            <SwiperSlide className={"top-property-slider"} key={index}>
                                <TopPropertyCard />
                            </SwiperSlide>
                            )
                        })}
                     </Swiper>
                </Stack>
            </Stack>
        </Stack>
    );
};

TrendProperties.defaultProps ={
    initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default TrendProperties;

