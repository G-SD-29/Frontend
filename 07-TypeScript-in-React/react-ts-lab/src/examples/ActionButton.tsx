// TypeScript verlangt label; das ? erlaubt, color wegzulassen.
type ActionButtonProps = {
  label: string;
  color?: string;
};

const ActionButton = ({ label, color = "steelblue" }: ActionButtonProps) => {
  return <button style={{ backgroundColor: color }}>{label}</button>;
};

export default ActionButton;
