import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
/* Paginas */
import Noticias from "../Pages/Noticias";
import Agenda from "../Pages/Agenda";
import MinhasTarefas from "../Pages/MinhasTarefas";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  rootBlock: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function TabPanel(props) {
  const { children, value, index } = props;
  const classes = useStyles();

  return <Paper className={classes.paper}>{value === index && children}</Paper>;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const FullWidthTabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Box height="100%">
      <AppBar position="static" color="default">
        <Tabs
          className={classes.rootBlock}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
          aria-label="Tabs "
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Minhas Tarefas " {...a11yProps(1)} />
          <Tab label="Noticias" {...a11yProps(2)} />
          <Tab label="Agenda" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Home
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MinhasTarefas />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Noticias />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Agenda />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};
export default FullWidthTabs;
