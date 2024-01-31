class Router {
  add(routeName, link) {
    this.routes;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || routes[404];

    fetch(route)
      .then((response) => response.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
