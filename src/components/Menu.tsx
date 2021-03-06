import React from "react";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {createStyles, makeStyles, Theme, useTheme} from "@material-ui/core/styles";
// import Account from "./Account";
import {ListItemText} from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuLink: {
      textDecoration: 'none',
      color: 'Black',
    },
    menuLinkSandbox: {
      textDecoration: 'none',
      color: 'Gray',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default function Menu(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    props.setOpen(true);
  };

  const handleDrawerClose = () => {
    props.setOpen(false);
  };


  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            <Link to="/" className="logo">
              Nifty.Help
            </Link>
          </Typography>
        </Toolbar>

        {/*<div style={{*/}
        {/*  float: 'right'*/}
        {/*}}>*/}
        {/*  <Account/>*/}
        {/*</div>*/}
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        onKeyDown={handleDrawerClose} // todo find out if this is needed as well as handleDrawerClose on ListItems
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <Link to="/what-are-nfts" className={classes.menuLink}>
              <ListItemText primary="1. WTFlip is an NFT?" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link to="/why-nfts" className={classes.menuLink}>
              <ListItemText primary="2. Why NFTS?" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link to="/how-they-work" className={classes.menuLink}>
              <ListItemText primary="3. How They Work." />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link to="/get-involved" className={classes.menuLink}>
              <ListItemText primary="4. Get Involved!" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link to="/faqs" className={classes.menuLink}>
              <ListItemText primary="5. Questions?" />
            </Link>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <Link to="/sandbox" className={classes.menuLinkSandbox}>
              <ListItemText primary="Sandbox" />
            </Link>
          </ListItem>
          <ListItem>
            <Typography><a className={classes.menuLinkSandbox} href="https://unegma.com" target="_blank">Unegma LTD</a></Typography>
          </ListItem>
        </List>

      </Drawer>
    </div>
  )
}
