export default function Card({ children, onClick, className = "", ...props }) {
  return (
    <div className={`card ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
