export default function Title({ title = "Our Products", fontSize = 32 }) {
  return (
    <div className="title" style={{ fontSize: `${fontSize}px` }}>
      {title}
    </div>
  );
}
