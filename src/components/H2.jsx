const H2 = (props) => {
  const { children, ...rest } = props;

  return (
    <h2 className="text-xl font-bold mb-5" {...rest}>
      {children}
    </h2>
  );
};

export default H2;
