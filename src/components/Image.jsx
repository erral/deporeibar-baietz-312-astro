const Image = (props) => {
  const base_url = 'https://www.deporeibar.com/312/images';
  const { alt, sizes, climbing_uid, image_uid, image, className = '' } = props;
  let srcset = [];
  //
  // Old 312.deporeibar.com as base URL
  //
  // srcset.push(`${image.download} ${image.width}w`);

  // Object.values(image.scales).map((item) => {
  //   srcset.push(`${item.download} ${item.width}w`);
  // });

  srcset.push(
    `${base_url}/${climbing_uid}/${image_uid}_${image.width}.jpg ${image.width}w`,
  );
  Object.values(image.scales).map((item) => {
    srcset.push(
      `${base_url}/${climbing_uid}/${image_uid}_${item.width}.jpg ${item.width}w`,
    );
  });

  return (
    <img
      className={className}
      alt={alt}
      srcSet={srcset.join(',')}
      sizes={sizes}
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
