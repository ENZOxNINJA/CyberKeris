export default function Footer() {
  return (
    <footer>
      <div
        style={{
          width: "min(1200px, 92%)",
          margin: "0 auto",
          padding: "1.5rem 0",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <p>© 2024 CyberKeris. All rights reserved.</p>
        <p>Privacy • Terms • Accessibility</p>
      </div>
    </footer>
  );
}
