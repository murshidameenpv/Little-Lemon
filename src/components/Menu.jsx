import menuData from '../recipes.json'
import Swal from 'sweetalert2'
function Menu() {
const handleOrder = (id) => {
 Swal.fire({
  title: "Are you sure?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Order it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Ordered!",
      text: "Your Order has been placed.",
      icon: "success"
    });
  }
});
    }
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
                            <button className='orderbtn' onClick={()=>handleOrder(item.id)} >Order Now</button>
                       </div>
          </div>
        ))}
          </div>
    </div>
  )
}

export default Menu