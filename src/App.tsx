import { useBottomSheet } from "./hooks/useBottomSheet";
import BottomSheet from "./components/ds/BottomSheet/BottomSheet";
import { Button } from "./components/ds";
import { ThemeSwitcher } from "./components/app/ThemeSwitcher/ThemeSwitcher";
import { Header } from "./components/app/Layout/Header";
import { useAtomValue } from "jotai";
import { themeAtom } from "./atoms/themeAtom";
import {
  Paragraph,
  SubTitle,
  Suptitle,
  Title,
} from "./components/ds/typography";
import { DEMO_BOTTOM_SHEET } from "./data/demo";

export default function App() {
  const sheet = useBottomSheet();
  const currentTheme = useAtomValue(themeAtom);

  return (
    <div>
      <Header />

      <main className="container-global">
        <ThemeSwitcher />

        <Suptitle>{DEMO_BOTTOM_SHEET.suptitle}</Suptitle>

        <Title>{DEMO_BOTTOM_SHEET.title}</Title>

        <Paragraph className="mb-8">{DEMO_BOTTOM_SHEET.description}</Paragraph>

        <div>
          <div className="flex gap-4 justify-center mb-4">
            <Button onClick={sheet.open}>Ouvrir la bottom sheet</Button>

            <Button
              disabled
              onClick={sheet.open}
              aria-label="Bouton désactivé - exemple"
            >
              Ne pas cliquer
            </Button>
          </div>
          <Button className="w-full" onClick={sheet.open}>
            Pleine largeur
          </Button>
        </div>
      </main>

      <BottomSheet isOpen={sheet.isOpen} onClose={sheet.close}>
        <BottomSheet.Header>
          <Title as="h2" className="text-primary-fg">
            Theme : {currentTheme}
          </Title>
        </BottomSheet.Header>

        <BottomSheet.Body>
          <SubTitle as="h3">{DEMO_BOTTOM_SHEET.productTitle}</SubTitle>

          <Paragraph>{DEMO_BOTTOM_SHEET.productDescription}</Paragraph>
        </BottomSheet.Body>

        <BottomSheet.Footer>
          <div className="flex gap-4 justify-center">
            <Button variant="solid" size="lg" onClick={() => alert("Action !")}>
              Call To Action
            </Button>
            <Button variant="outline" size="lg" onClick={sheet.close}>
              Annuler
            </Button>
          </div>
        </BottomSheet.Footer>
      </BottomSheet>
    </div>
  );
}
