import el from './../el';
import Aware from "./../parentClasses/app/aware";

export default class H1Renderer extends Aware {

    constructor() {
        super();
        this.header = el('#productsH1');
    }

    checkSectionSettings() {
        let h1Text = this.state.sectionSettings.h1Text;
        if (!h1Text) {
            h1Text = el('[data-logo="link"]').dataset.menuLinkTitleText;
        }
        this.header.innerText = h1Text;
    }
}
