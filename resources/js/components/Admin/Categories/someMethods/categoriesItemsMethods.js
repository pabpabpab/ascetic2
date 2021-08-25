export default  {

    changeItemComponent(itemId) {
        this.closeContextMenu();
        this.$emit('close-adding-component');

        this._getNewComponentName(itemId).then((newName) => {
            this._collapseItems();
            const temp = {...this.currentComponentsNames};
            temp['id' + itemId] = newName;
            this.currentComponentsNames = {...temp};
        });
    },

    async _getNewComponentName(itemId) {
        if (this.currentComponentsNames['id' + itemId] === this.categoryComponentName) {
            return this.editionComponentName;
        }
        return this.categoryComponentName;
    },

    _collapseItems() {
        const temp = {...this.currentComponentsNames};
        for (let key in temp) {
            temp[key] = this.categoryComponentName;
        }
        this.currentComponentsNames = {...temp};
    },

    _initComponentsNames(categories) {
        const temp = {};
        categories.forEach((item) => {
            temp['id' + item.id] = this.categoryComponentName;
        });
        this.currentComponentsNames = {...temp};
    },

}
