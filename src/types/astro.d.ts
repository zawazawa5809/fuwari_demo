declare namespace App {
  interface AstroEvent extends Event {
    type: "astro:page-load" | "astro:after-swap" | "astro:after-navigation";
  }

  interface BeforePreparationEvent extends CustomEvent {
    persist(element: Element): void;
  }
}

interface ViewTransitionsAPI {
  navigate(url: string | URL): Promise<void>;
  back(): Promise<void>;
  forward(): Promise<void>;
}
