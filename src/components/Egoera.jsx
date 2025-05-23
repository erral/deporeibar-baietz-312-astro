const bg_colors = {
  eginda:
    'bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300',
  'bertan-behera':
    'bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300',
  'proposatutakoa-eginda':
    'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300',
  proposatutakoa:
    'bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300',
};

const text_colors = {
  eginda: 'text-white',
};

const Egoera = (props) => {
  const { egoera } = props;

  return (
    <>
      <span
        className={`ml-2 ${bg_colors[egoera.token]} ${
          text_colors[egoera.token]
        }`}
      >
        {egoera.title}
      </span>
      <span class="bg-gren"></span>
    </>
  );
};

export default Egoera;
