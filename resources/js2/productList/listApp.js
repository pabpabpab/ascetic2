import state from './myState';
import mutations from "./myMutations";
import components from './myComponents';
import Commiter from "./commiter";


export default function listApp() {



    const app = {
        state,
        mutations,
        commiter: new Commiter(),
        components,
    };


    app.commiter.app = app;

    for (let item in app.components) {
        if (app.components.hasOwnProperty(item)) {
            app.components[item].setAppRef(app);
            // в классах будет this.components
            app.components[item].components = app.components;
            // в классах будет this.state
            app.components[item].state = app.state;
            // в классах будет this.commit();
            app.components[item].commit = app.commiter.commit;
        }
    }

}

