const Card = (props) => {
  const { url, title, children } = props;
  return (
    <a
      href={url}
      class="block max-w-sm p-6 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>

      {children}
    </a>
  );
};

export default Uint8ClampedArray;
