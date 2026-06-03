export default function Button({ children, onClick, variant = "primary", icon, className = "", ...props }) {
  const cls = `btn ${variant} ${className}`.trim();

  return (
    <button className={cls} onClick={onClick} {...props}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
