import { useEffect, useState } from "react";

const UseOnlineStaus = () => {
    const [onlineStatus, setonlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        });

        window.addEventListener("online", () => {
            setonlineStatus(true);
        });
    }, []);
    //boolean value
    return onlineStatus;
};
export default UseOnlineStaus;