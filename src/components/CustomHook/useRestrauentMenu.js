import { useEffect, useState } from "react"
import { MENU_API } from "../../utils/constents";

const useRestrauentMenu = (resId) => {
    const [ResInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
     
        // console.log("inside fetch data", json);
    };
    // console.log("outside fetch data", ResInfo);
    return ResInfo;

};
export default useRestrauentMenu;
