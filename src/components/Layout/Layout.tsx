import { Grid, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Sidemenu } from "../Sidemenu/Sidemenu";
import { MobileSideMenu } from "../Sidemenu/MobileSideMenu";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#000000] h-screen w-screen overflow-scroll">
      <Grid container>
        <Grid
          size={{ xs: 0, md: isExpanded ? 1.5 : 0.5 }}
          sx={{
            transition: "all 0.5s ease-in-out",
            display: { xs: "none", md: "block" },
          }}
          className="pl-1"
        >
          <Sidemenu onToggle={toggleSidebar} isExpanded={isExpanded} />
        </Grid>
        <Grid
          size={{ xs: 12, md: isExpanded ? 10.5 : 11.5 }}
          sx={{
            transition: "all 0.5s ease-in-out",
          }}
          className="h-screen "
        >
          {isMobile && <MobileSideMenu />}
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
