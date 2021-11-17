import { useState, useEffect } from "react";
import * as Api from "../API";
import {
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import moment from "moment";

const Home = () => {
  const [contacts, setContact] = useState<any[]>([]);
  console.log(contacts);

  useEffect(() => {
    const init = async () => {
      const [err, res] = await Api.getContacts();
      if (err) {
        console.log(err);
      }
      setContact(res?.data.contacts);
    };
    init();
  }, []);
  return (
    <>
      <Grid
        container
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
      >
        <Grid
          item
          xs={6}
          sm={6}
          sx={{
            mb: 4,
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            border: "1px",
            borderRadius: "20px",
          }}
        >
           <Typography sx={{ mt: 3, mb: 2 ,color:"grey" }} variant="h4" component="div">
          CONTACTS
        </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 3 }}>
            <Button variant="contained" color="success" size="large">ADD</Button>
          </Box>
          <List>
            {contacts.map((contact: any, index: any) => {
              return (
                <>
                  <ListItem key={index} sx={{ border: "1px solid gray" }}>
                    <ListItemAvatar>
                      <Avatar src={contact.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={contact.name.toUpperCase()}
                      secondary={moment(contact.date).format(
                        "DD-MMMM-YYYY h:mm:ss a"
                      )}
                    />
                    <ListItemSecondaryAction>
                    <Button variant="contained" sx={{ml:1}} size="small">Details</Button>
                    <Button variant="contained" sx={{ml:1}} size="small">Update</Button>
                    <Button variant="contained" color="error" sx={{ml:1}} size="small">Delete</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
