import { useSetAtom } from "jotai";
import { themeAtom } from "../atoms/themeAtom";

const THEMES = [
  "day",
  "night",
  "solarized",
  "forest",
  "ocean",
  "neon",
] as const;

export const ThemeSwitcher = () => {
  const setTheme = useSetAtom(themeAtom);
  const handleChange = (value: string) => {
    document.documentElement.setAttribute("data-theme", value);
    setTheme(value);
  };
  return (
    <div className="flex align-center justify-end w-full">
      <select
        onChange={(e) => handleChange(e.target.value)}
        className="px-3 py-2 rounded-lg border transition-colors duration-normal ease-standard"
      >
        {THEMES.map((theme) => (
          <option key={theme} value={theme}>
            Thème {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
