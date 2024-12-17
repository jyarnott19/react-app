interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

function Button({ children, onClick, color = "primary" }: ButtonProps) {
  const finalStyle = "btn ${style}";
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
