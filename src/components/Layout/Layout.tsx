import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Sidemenu } from "../Sidemenu/Sidemenu";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#000000] h-screen w-screen overflow-scroll">
      <Grid container>
        <Grid
          size={isExpanded ? 2 : 0.5}
          className="sfpro font-bold "
          sx={{
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Sidemenu onToggle={toggleSidebar} isExpanded={isExpanded} />
        </Grid>
        <Grid
          size={isExpanded ? 10 : 11.5}
          sx={{
            transition: "all 0.5s ease-in-out",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
