export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(stat => (
          <li key={stat.id} style={{ backgroundColor: generateRandomColor() }}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};
