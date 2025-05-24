import { sortByAttribute } from '../helpers';

import Egoera from './Egoera';
import mountains from '../contents/mountains';

const Mountains = (props) => {
  const { mountains } = props;
  let mountain_list = sortByAttribute(
    Object.values(mountains),
    (item) => item.title,
  );

  return mountain_list.map((item, key) => {
    return (
      <a
        key={key}
        href={`/mendiak/${item.id}`}
        className="block p-6 mb-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Egoera egoera_single={item.egoera} />
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title} ({item.altuera} m.)
        </h2>
        <p className="font-small text-gray-700 dark:text-gray-400">
          <strong className="font-bold">Mendizerra:</strong> {item.mendizerra}
        </p>
      </a>
    );
  });
};

export default Mountains;
