import { notification } from "antd";
import "antd/dist/antd.css";
const createNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
export default createNotification;
