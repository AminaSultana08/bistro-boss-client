

const MenuItem = ({item}) => {
    const {name, recipe,image,price}= item
    return (
        <div>
            <div className="flex space-x-1 gap-1 ">
                <img className="w-[118px] rounded-tl-none  rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt=""/>
                <div>
                    <h1 className="uppercase">{name}--------------</h1>
                    <p>{recipe}</p>
                </div>
                <p className="text-[#BB8506]">৳{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;