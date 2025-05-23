const Mountains = (props) => {
  const { mountain } = props;
  return (
    <>
      <h1>{mountain.title}</h1>
      <p>
        {mountain.lat} {mountain.lon}
      </p>
    </>
  );
};

export default Mountains;
