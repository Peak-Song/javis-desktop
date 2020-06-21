interface I18nRouter {
  Note: string;
  Dashboard: string;
}

interface I18nLocale {
  route: I18nRouter;
}

export { I18nRouter, I18nLocale }
