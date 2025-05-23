const Image = (props) => {
  const { alt, sizes, image, className = '' } = props;
  let srcset = [];
  srcset.push(`${image.download} ${image.width}w`);

  Object.values(image.scales).map((item) => {
    srcset.push(`${item.download} ${item.width}w`);
  });

  return (
    <img
      className={className}
      alt={alt}
      srcset={srcset.join(',')}
      sizes={sizes}
    />
  );
};

export default Image;
