const categories = [
  "Celsius",
  "Celsius Essentials",
  "Celsius On-The-Go",
  "Celsius Hydration",
];

const CategoryBar = () => {
  return (
    <nav className="category-bar" aria-label="Celsius product categories">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <a href="#">{cat}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryBar;
