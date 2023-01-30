import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

import { useTheme } from '../context/theme';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex min-h-[200px] px-2 pt-2 pr-4.5 dark:text-white">
      <h1 className="py-2 px-[20px] text-6xl">Quick Commands</h1>
      <button type="button" onClick={() => setTheme()} className="absolute flex flex-col items-center justify-center top-2 right-2 p-1 rounded-full shadow-gravy bg-whiten dark:shadow-nighty dark:bg-darken">
        {
          theme ? (
            <FontAwesomeIcon icon={faSun} title="Light" className="h-4 w-4" />
          ) : (
            <FontAwesomeIcon icon={faMoon} title="Dark" className="h-4 w-4 text-gray-400" />
          )
        }
      </button>
    </div>
  );
};

export default Header;
