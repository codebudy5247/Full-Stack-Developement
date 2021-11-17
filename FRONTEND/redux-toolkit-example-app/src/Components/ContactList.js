import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {retrieveContacts} from "../Slices/contacts";
import { Link } from "react-router-dom";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log("CONTACTS",JSON.stringify(contacts));
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(retrieveContacts());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <div className="col-md-6">
        <ul className="list-group">
          {contacts &&
            contacts.map((contact) => (
              <li className="list-group-item" key={contact._id}>
                {contact.name}
                {contact.email}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;
