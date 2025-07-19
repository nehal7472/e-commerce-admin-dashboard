import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-orange-500 dark:hover:bg-orange-300 text-white bg-white "
    >
      {isDark ? (
        <FaSun className="text-[#FF8901]" />
      ) : (
        <FaMoon className="text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
