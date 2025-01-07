import useDeviceDetect from "@/libs/components/hooks/useDeviceDetect";
import withLayoutBasic from "@/libs/components/layout/LayoutBesic";
import { Stack } from "@mui/material";
import { NextPage } from "next";


const AgentList: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>AGENT LISTy MOBILE</Stack>
  } else {
  return (
     <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENT LIST</Stack>
     </div>
  )
 }
};

export default withLayoutBasic(AgentList);