import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@gkf/react-app",
  app: () => System.import("@gkf/react-app"),
  activeWhen: (location) => location.pathname === '/react-app',
});




// if needs intern routes
registerApplication({
  name: "@gkf/routes-app",
  app: () => System.import("@gkf/routes-app"),
  activeWhen: ["/routes-app"]
});

start({
  urlRerouteOnly: true,
});
