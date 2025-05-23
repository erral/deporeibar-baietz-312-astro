const Mountains = (props) => {
  const { mountains } = props;
  let mountain_list = Object.values(mountains);

  return mountain_list.map((item) => {
    return (
      <li>
        <a href={`/mendiak/${item.id}/`}>{item.title}</a>
      </li>
    );
  });
};

export default Mountains;
