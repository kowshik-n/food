import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data,showItem,setShowIndex,index }) => {
    // const [showItem, setshowItem] = useState(false);

    const handleClick =()=> {
        showItem ? setShowIndex(null) : setShowIndex(index);
        // console.log("cliclked");
    };
    return (
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
            >
                <div className="flex justify-between cursor-pointer" onClick={handleClick}
                >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {/* accordian */}
                {showItem && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};
export default  RestaurentCategory;