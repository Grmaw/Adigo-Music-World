export default function PrimaryButton({ children, onClick, type = 'button', disabled, style }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className="btn-primary"
    >
      {children}
    </button>
  );
}
