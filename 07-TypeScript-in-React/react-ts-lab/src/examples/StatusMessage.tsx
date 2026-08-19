// TypeScript lehnt jeden Status außerhalb dieser drei Varianten ab.
type StatusMessageProps = {
  status: "loading" | "success" | "error";
};

const StatusMessage = ({ status }: StatusMessageProps) => {
  return <p>Status: {status}</p>;
};

export default StatusMessage;
