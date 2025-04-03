interface DividerProps {
  width?: string;
  height?: string;
  bgColor?: string;
  type?: "horizontal" | "vertical";
  margin?: string;
  borderTop?: string;
}

const Divider = ({
  width,
  height,
  bgColor,
  margin,
  borderTop,
}: DividerProps) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor,
        margin: margin,
        borderTop: borderTop,
      }}
    />
  );
};

export default Divider;
