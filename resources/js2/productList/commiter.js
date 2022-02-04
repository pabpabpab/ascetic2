import Aware from "../parentClasses/app/aware";

export default class Commiter extends Aware {

    constructor() {
        super();
    }

    commit(mutationName, data) {
        this.app.mutations[mutationName](this.app.state, data);

        for (let item in this.app.components) {
            if (this.app.components.hasOwnProperty(item)) {
                this.app.components[item].checkState();
            }
        }
    }
}

