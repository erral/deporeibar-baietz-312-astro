const Mountains = (props) => {
  const { mountains } = props;
  let mountain_list = Object.values(mountains);

  return mountain_list.map((item) => {
    return (
      <a
        href={`/mendiak/${item.id}`}
        class="block max-w-sm p-6 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title} ({item.altuera} m.)
        </h2>
        <p class="font-small text-gray-700 dark:text-gray-400">
          {item.mendizerra}
        </p>
      </a>
    );
  });
};

export default Mountains;
