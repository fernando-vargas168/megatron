import React from "react";
import {
  Grid,
  Card,
  CardContent,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
const ListBox = ({ title, label, array, xs = 12, sm = 6, md = 4, lg = 3 }) =>
  array ? (
    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
      <Card>
        <CardContent>
          <List
            component="nav"
            aria-labelledby={label}
            subheader={
              <ListSubheader component="div" id={label}>
                {title}
              </ListSubheader>
            }
          >
            {array.map((e, i) => (
              <ListItemBox text={e} i={i} key={i} length={array.length} />
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  ) : (
    <></>
  );

const ListItemBox = ({ text, i = 0, length = 0 }) => (
  <>
    <ListItem>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
    {i !== length - 1 && <Divider />}
  </>
);
export default ListBox;
