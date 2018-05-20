## Install

* `git clone` the repo.
* `npm install` in root and `client/` directories.
* `sudo npm install yarn -g` if not done already.
* `npm run dev` in root should start both.
* connect to http://localhost:3000/ to see the base page.


## Whats this good for:
Originally designed as demo app for react semi-starter workshop, to teach basic structure of react app, including:
* Component lifecyle.
* `this.state` and what changing it means.
* ReactRouter, with BrowserRouter, Switch with Routes, and referencing `this.props.location` to derive location for component logic.
* Container-Component pattern, with a root container, with a subcontainer on the page, with subcomponents within that container.
* Communication down to child components with props, how to cause a re-render.
* Communication up to parent component via prop callbacks.
* HTTP calls with ECSMA2017 Async/Await functions.
* Services pattern within a React app context.
* Handling and rendering component children.

Can be expanded to include other concepts if nessesary.

## Probable Extension:
Most likely things I'll add to make the React workshop more useful:
* `axios` HTTP library.
* `redux` and how actions + filters + reducers = good.
* Service worker and how to make it useful.
* Node-express for API tesing and quick hacky devlopment for frontend-centric apps.

No guarantee's here.
