import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((item) => {
          const { id, name, category,
            // description, 
            image } = item;
          return (
            <>
              <div className="card-container" key={id + category}>
                <div className="card">
                  <div className="card-body">
                    {/* <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-author subtle">{category}</span> */}
                    <h2 className="card-title">{name}</h2>
                    {/* <span className="card-description subtle">
                      {description}
                    </span> */}
                  </div>
                  <div className="card-read"></div>
                  <img src={image} alt="images" className="card-media" />

                  {/* <span className="card-tag subtle">Order Now</span> */}

                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
