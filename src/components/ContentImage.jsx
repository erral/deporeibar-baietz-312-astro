const Image = (props) => {
  const base_url = 'https://www.deporeibar.com/312/assets';
  const { base, image, widths, sizes, className = '', alt } = props;
  let srcset = [];

  widths.map((width) => {
    srcset.push(`${base_url}/${image}-${width}.jpeg ${width}w`);
  });

  return (
    <img
      className={className}
      alt={alt}
      srcset={srcset.join(',')}
      sizes={sizes}
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
