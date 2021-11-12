import { useState, useEffect } from "react";
import * as Api from "../API";
import {
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [contact, setContact] = useState<any[]>([]);
  console.log(contact);

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
  return (<><p>{JSON.stringify(contact)}</p></>);
};

export default Home;
