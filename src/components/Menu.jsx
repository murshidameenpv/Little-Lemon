import menuData from '../recipes.json'
function Menu() {
  return (
      <div className="menu-container">
          <div className='menu-header'>
              <h2>This week specials</h2>
              <button>Order Menu</button>
          </div>
          <div className='cards'>
            {menuData.map((item) => (
          <div key={item.id} className='menu-items'>
                       <img src={item.image} alt={item.title} /> 
                       <div className='menu-content'>
                           <div className='heading'>
                               <h5>{item.title}</h5>
                               <p>{item.price}</p>
                           </div>
                           <p>{item.description}</p>
                            <button className='orderbtn'>Order Now</button>
                       </div>
          </div>
        ))}
          </div>
    </div>
  )
}

export default Menu