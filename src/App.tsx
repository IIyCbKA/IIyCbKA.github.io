import React from "react";
import "./index.scss";
import { usePreferencesStore } from "@/stores";
import ListenerScrollY from "@/hooks/SecrollListener";
import { ProgressBar } from "@/components";
import {
  Header,
  Hero,
  About,
  Stack,
  Works,
  Achievements,
  Footer,
} from "@/features";

export default function App(): React.ReactElement {
  const language = usePreferencesStore((s) => s.language);
  const theme = usePreferencesStore((s) => s.theme);

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <>
      <ListenerScrollY />
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Works />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
