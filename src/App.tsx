import { useBottomSheet } from "./hooks/useBottomSheet";
import BottomSheet from "./components/BottomSheet/BottomSheet";
import { Button } from "./components/Button";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Header } from "./components/Layout/Header";
import { useAtomValue } from "jotai";
import { themeAtom } from "./atoms/themeAtom";

export default function App() {
  const sheet = useBottomSheet();
  const currentTheme = useAtomValue(themeAtom);

  return (
    <div>
      <Header />
      <div className="container-global">
        <ThemeSwitcher />
        <h2>Bottom Sheet</h2>
        <p className="mb-8">
          A Bottom Sheet is a user interface component that slides up from the
          bottom of the screen to display content that complements the main
          screen.
        </p>
        <Button onClick={sheet.open}>Ouvrir la bottom sheet</Button>
      </div>

      <BottomSheet
        isOpen={sheet.isOpen}
        onClose={sheet.close}
        onOpen={sheet.open}
      >
        <BottomSheet.Header>
          <h2 className="text-btn-fg"> Theme : {currentTheme}</h2>
        </BottomSheet.Header>

        <BottomSheet.Body>
          <h2 className="text-xl font-bold text-fg">Produit incroyable</h2>

          {[...Array(40)].map((_, i) => (
            <p key={i} className="text-fg/70">
              Ligne #{i + 1} — Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          ))}
        </BottomSheet.Body>

        <BottomSheet.Footer>
          <div className="text-center">
            <Button onClick={() => alert("cta clicked !")}>
              Call To Action !
            </Button>
          </div>
        </BottomSheet.Footer>
      </BottomSheet>
    </div>
  );
}
