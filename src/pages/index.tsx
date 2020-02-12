import React, { useState } from "react";
import useDarkMode from "use-dark-mode";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <Link
          component={(props: { children: any }) => (
            <GatsbyLink to={"/page-2"}>
              {props.children}
            </GatsbyLink>
          )}>
        </Link>
        <img className="logo" alt="logo" src={darkMode.value
          ? "https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-dark/jade-logo-dark%20(PNG)/256x256.png"
          : "https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png"
        } style={{ paddingTop: "10%", paddingBottom: "10%" }} />
        <Typography gutterBottom variant="inherit" style={{ paddingBottom: "15px" }}>
          Jade is an opinionated JSON-RPC service manager, that provides daemonization, installation, and discovery for JSON-RPC based services.
        </Typography>
        <Grid style={{paddingBottom: "100px"}}>
          <Button style={{marginRight: "30px"}} variant="contained" href="/getting-started">Get Started</Button>
          <Button variant="contained" href="https://github.com/etclabscore/jade-desktop/releases/latest">Desktop App</Button>
        </Grid>
        <Grid container justify="space-between" style={{ marginBottom: "85px" }}>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/getting-started"} style={{ textDecoration: "none", color: grey[500] }} activeStyle={{ color: grey[500] }}>
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Getting Started</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>Step-by-step guide to running a service with Jade.</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink
                  to={"/topic-guides"}
                  style={{ textDecoration: "none", color: grey[500] }}
                  activeStyle={{ color: grey[500] }}
                >
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Topic Guides</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">Topic guides discuss high level concepts and key topics</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/api-documentation"}
                  style={{ textDecoration: "none", color: grey[500] }}
                  activeStyle={{ color: grey[500] }}
                >
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Reference</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- API Documentation</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Fully Interactive</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyApp;
