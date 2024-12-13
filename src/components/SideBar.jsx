const SideBar = ({ setCategory, setTaste }) => {
    const category = ["appetizer", "main course", "dessert", "oily", "healthy"]
    const taste = ["spicy", "sour", "sweet", "salty", "bitter"]

    const handleChangeCategory = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCategory((prevCategory) => [...prevCategory, value.toLowerCase()]);
        } else {
            setCategory((prevCategory) => prevCategory.filter((cat) => cat !== value.toLowerCase()));
        }
    };
    const handleChangeTaste = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setTaste((prevTaste) => [...prevTaste, value.toLowerCase()]);
        } else {
            setTaste((prevTaste) => prevTaste.filter((cat) => cat !== value.toLowerCase()));
        }
    };

    return (
        <div className="container mx-auto py-10">
            <div className="">
                <div className="">
                    <h4 className="headline-4">Filter</h4>

                </div>
                <div className="py-5 text-sm">
                    {/* <div className="flex flex-col pb-4">
                        <p className="headline-5">Price</p>
                        <div className="text-xs py-2 flex flex-row gap-1    ">
                            <div className="flex flex-row gap-1 items-center">
                                <label htmlFor="">Min</label>
                                <input type="number" min="1" max="500000" className="w-20 rounded-md p-1 bg-white border" placeholder="10000" />
                            </div>
                            <div className="flex flex-row gap-1 items-center">
                                <label htmlFor="">Max</label>
                                <input type="number" min="1" max="10000" className="rounded-md p-1 bg-white border w-20" placeholder="150000" />
                            </div>
                        </div>
                    </div>
                    <hr /> */}
                    <div className="flex flex-col">
                        <label className="pb-4 headline-5">Category</label>
                        <div className="flex flex-col gap-1">
                            {category.map((el, index) => (
                                <div key={index} className="flex flex-row items-center gap-2">
                                    <input type="checkbox" value={el} onChange={handleChangeCategory} />
                                    <label className="capitalize">{el}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col py-4">
                        <label className="pb-4 headline-5">Taste</label>
                        <div className="flex flex-col gap-1">
                            {taste.map((el, index) => (
                                <div key={index} className="flex flex-row items-center gap-2">
                                    <input type="checkbox" value={el} onChange={handleChangeTaste} />
                                    <label className="capitalize">{el}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar