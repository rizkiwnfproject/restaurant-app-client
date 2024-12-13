import SideBar from "./SideBar"
import Menus from "./Menus"
import { useState } from "react"

const Home = ({
    onAddToCart, search
}) => {
    const [category, setCategory] = useState([])
    const [taste, setTaste] = useState([])
    return (
        <div className="grid grid-flow-row-dense grid-cols-5">
            <div className="">
                <SideBar setCategory={setCategory} setTaste={setTaste}/>
            </div>
            <div className="col-span-4">
                <Menus onAddToCart={onAddToCart} search={search} category={category} taste={taste}/>
            </div>
        </div>
    )
}

export default Home