import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CheckboxList from './CheckBox';
import { FaCar } from 'react-icons/fa'
import { FormGroup, Grid } from '@mui/material';
import NumberField from './NumberField';
import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Build } from '@mui/icons-material';
import ListItem from '@mui/material/ListItem';
import { LuDollarSign } from "react-icons/lu";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';





export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [openPrice, setOpenPrice] = React.useState(false);
  const [openEngine, setOpenEngine] = React.useState(false);
  const [openBodyType, setOpenBodyType] = React.useState(false);

  const bodyTypes = [
    'Sedan',
    'SUV',
    'Coupe',
    'Hatchback',
    'Convertible',
    'Wagon',
    'Truck',
    'Van',
    'Minivan',
  ];

  const handleClick = () => {
    setOpen(!open);
  }

  const handlePriceClick = () => {
    setOpenPrice(!openPrice);
  }

  const handleClick3 = () => {
    setOpenEngine(!openEngine);
  }

  const handleBodyTypeClick = () => {
    setOpenBodyType(!openBodyType);
  }

  

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Search for car
        </ListSubheader>
      }
    >

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FaCar />
        </ListItemIcon>
        <ListItemText primary="Make" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <CheckboxList />
          </ListItemButton>
        </List>
      </Collapse>

      <Divider />

      <ListItemButton onClick={handlePriceClick}>
        <ListItemIcon>
          <LuDollarSign />
        </ListItemIcon>
        <ListItemText primary="Price"/>
        {openPrice ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openPrice} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 5 }}>
            <Grid container spacing={2}>
              <ListItemText primary="Min Price" />
              <NumberField label="Number Field" min={1000} />
              <FormHelperText sx={{ ml: 0, '&:empty': { mt: 0 } }}>
                     minimim $1000
                </FormHelperText>

              <ListItemText primary="Max Price" />
              <NumberField label="Number Field" min={1500} max={100000000} />
               
            </Grid>
          </ListItemButton>
        </List>
      </Collapse>

      <Divider />

      <ListItemButton onClick={handleClick3}>
      <ListItemIcon>
          <Build />
        </ListItemIcon>
        <ListItemText primary="Engine" />
        {openEngine ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openEngine} timeout="auto" unmountOnExit>
          <ListItem component="div" disablePadding sx={{ pl: 6 }}>
            <FormControlLabel control={<Checkbox />} label="Automatic" />
          </ListItem>

          <ListItem component="div" disablePadding sx={{ pl: 6 }}>
            <FormControlLabel control={<Checkbox />} label="Manuel" />
          </ListItem>
      </Collapse>

      <Divider />

      <ListItemButton onClick={handleBodyTypeClick}>
      <ListItemIcon>
          <FaCar />
        </ListItemIcon>
        <ListItemText primary="Body Type" />
        {openBodyType ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openBodyType} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {bodyTypes.map((type) => (
            <ListItem key={type} component="div" disablePadding sx={{ pl: 4 }}>
              <FormControlLabel
              control={<Checkbox />}
            label={type}
            />
            </ListItem>
          ))}
        </List>
      </Collapse>

      <Divider />
      
      <Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, ml: 2, justifyContent: 'center', width: '80%' }}
        >
          Apply Filters
        </Button>
      </Box>
    </List>
  );
}
