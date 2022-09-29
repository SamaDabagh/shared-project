import ItemInfos from "../item-info/item-info";

const GroupItemsList = ({ index, products }) => {
  const temp = Object.values(products);
  const productsKeys = Object.keys(products);
  const productsInfo = temp.map((element, index) => {
    return { ...element, id: `${productsKeys[index]}` };
  });

  console.log("temp====>", temp);
  console.log("productsInfo===>", productsInfo);
  const filteredGroup = productsInfo?.filter(
    (product) => product?.group === index
  );
  console.log("filteredGroup==>", filteredGroup);
  return (
    <>
      {filteredGroup?.map((item) => {
        const { name, price, imageUrl, id } = item;

        return (
          <div className="card-container-GroupItemsList" key={id}>
            <ItemInfos
              nameOfItem={name}
              PriceOfItem={price}
              imageOfItem={imageUrl}
              idOfItem={id}
            />
          </div>
        );
      })}
    </>
  );
};

export default GroupItemsList;
