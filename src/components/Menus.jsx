import CardMenu from './CardMenu'
import { useState, useEffect } from 'react';

const Menus = ({
  onAddToCart,
  search,
  category,
  taste,
}) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/menus')
      .then((response) => response.json())
      .then((data) => setMenus(data))
      .catch((error) => console.error('Error fetching menus:', error));
  }, []);

  const filterMenus = (menus, search, category) => {
    return menus.filter((menu) => {
      const matchesSearch =
        search.toLowerCase() === '' || menu.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category.length === 0 || category.includes(menu.category.toLowerCase());

      const matchesTaste =
        taste.length === 0 || taste.includes(menu.taste.toLowerCase());

      return matchesSearch && matchesCategory && matchesTaste;
    });
  };
  const filtered = filterMenus(menus, search, category, taste);

  return (
    <div className="container mx-auto py-10">
      <h3 className='headline-3 pb-20'>Our Menu</h3>
      <div className="grid gap-x-0 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,_minmax(240px,1fr))] justify-items-center md:justify-items-end lg:justify-items-start">
        {filtered.map((menu, index) => (
          <CardMenu
            key={index}
            onAddToCart={onAddToCart}
            menu={menu}
          />
        ))}
      </div>
    </div>
  )
}

export default Menus