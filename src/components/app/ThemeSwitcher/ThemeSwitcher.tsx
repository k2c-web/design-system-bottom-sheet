import { useAtom } from "jotai";
import { themeAtom } from "../../../atoms/themeAtom";

const THEMES = [
  "day",
  "night",
  "solarized",
  "forest",
  "ocean",
  "neon",
] as const;

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const handleChange = (value: string) => {
    document.documentElement.setAttribute("data-theme", value);
    setTheme(value);
  };
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div className="flex align-center justify-end w-full">
      <select
        value={theme}
        onChange={(e) => handleChange(e.target.value)}
        className="px-3 py-2 rounded-lg border border-outline bg-primary text-on-primary transition-colors duration-normal ease-standard"
      >
        <option value="" disabled>
          Choisir un thème
        </option>
        {THEMES.map((theme) => (
          <option key={theme} value={theme}>
            Thème {capitalize(theme)}
          </option>
        ))}
      </select>
    </div>
  );
};
