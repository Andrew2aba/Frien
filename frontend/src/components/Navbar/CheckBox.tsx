import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const carMakesAndModels: Record<string, string[]> = {
  Acura: ['ILX', 'TLX', 'RDX', 'MDX', 'Integra'],
  Audi: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'e-tron'],
  BMW: ['2 Series', '3 Series', '5 Series', 'X1', 'X3', 'X5'],
  Chevrolet: ['Malibu', 'Camaro', 'Equinox', 'Traverse', 'Silverado', 'Tahoe'],
  Dodge: ['Charger', 'Challenger', 'Durango', 'Hornet'],
  Ford: ['Fiesta', 'Focus', 'Mustang', 'Escape', 'Explorer', 'F-150', 'Bronco'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V', 'Odyssey'],
  Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Kona'],
  Jeep: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Gladiator'],
  Kia: ['Forte', 'K5', 'Sportage', 'Sorento', 'Telluride', 'Soul'],
  Lexus: ['IS', 'ES', 'RX', 'NX', 'GX'],
  Mazda: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5 Miata'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class'],
  Nissan: ['Sentra', 'Altima', 'Maxima', 'Rogue', 'Murano', 'Pathfinder'],
  Subaru: ['Impreza', 'Legacy', 'Crosstrek', 'Forester', 'Outback', 'Ascent'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y'],
  Toyota: ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Tacoma', 'Tundra', 'Prius'],
  Volkswagen: ['Jetta', 'Golf', 'Tiguan', 'Atlas', 'Passat', 'ID.4'],
  Volvo: ['S60', 'S90', 'XC40', 'XC60', 'XC90'],
};

export default function CheckboxList() {
  const [checked, setChecked] = React.useState<string[]>([]);
  const [openMakes, setOpenMakes] = React.useState<Record<string, boolean>>({});

  const handleToggleMake = (make: string) => () => {
    setOpenMakes((prev) => ({ ...prev, [make]: !prev[make] }));
  };

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {Object.entries(carMakesAndModels).map(([make, models]) => {
        const isOpen = !!openMakes[make];

        const makeLabelId = `checkbox-list-label-${make}`;

        return (
          <React.Fragment key={make}>
            <ListItem disablePadding>
              <ListItemButton onClick={handleToggleMake(make)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.includes(make)}
                    tabIndex={-1}
                    disableRipple
                    onClick={(event) => event.stopPropagation()}
                    onChange={handleToggle(make)}
                    slotProps={{ input: { 'aria-labelledby': makeLabelId } }}
                  />
                </ListItemIcon>
                <ListItemText id={makeLabelId} primary={make} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {models.map((model) => {
                  const value = `${make}:${model}`;
                  const labelId = `checkbox-list-label-${value}`;

                  return (
                    <ListItem key={value} disablePadding sx={{ pl: 4 }}>
                      <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.includes(value)}
                            tabIndex={-1}
                            disableRipple
                            slotProps={{ input: { 'aria-labelledby': labelId } }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={model} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </React.Fragment>
        );
      })}
    </List>
  );
}
