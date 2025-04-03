interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
  type?: "horizontal" | "vertical";
  margin?: string;
  borderTop?: string;
}

const Divider = ({
  width,
  height,
  color = "#6f6f6f",
  margin,
  borderTop,
}: DividerProps) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        margin: margin,
        borderTop: borderTop,
      }}
    />
  );
};

export default Divider;
