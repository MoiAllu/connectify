import React from "react";
import Notification from "./Notification";
import data from "./data.json";
import { enumSafety } from "../../utils";
type Props = {};

const NotificationList = (props: Props) => {
  return (
    <div className="flex flex-col">
      {data.map((notif) => (
        <Notification
          key={notif.id}
          notification={{
            ...notif,
            category: enumSafety(notif.category),
            //? Gives error => string to Enum type conversion
            // category: notif.category as NotificationCategory,
          }}
        />
      ))}
    </div>
  );
};

export default NotificationList;
