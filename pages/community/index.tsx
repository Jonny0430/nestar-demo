import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";
import withLayoutBasic from "@/libs/components/layout/LayoutBesic";
import { Stack } from "@mui/material";
import { NextPage } from "next";


const Community: NextPage = () => {
   const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Community MOBILE</Stack>
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
       <Stack className="container">Community</Stack>
      </div>
   )
 }
};

export default withLayoutBasic(Community);