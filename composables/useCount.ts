export const useCount = () => {
  const counter = useState("counter", () => Math.round(Math.random() * 1000));
  return { counter };
};
