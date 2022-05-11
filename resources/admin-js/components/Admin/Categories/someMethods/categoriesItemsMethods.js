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
        if (this.currentComponentsNames['id' + itemId] === this.simpleListItemComponentName) {
            return this.editionComponentName;
        }
        return this.simpleListItemComponentName;
    },

    _collapseItems() {
        const temp = { ...this.currentComponentsNames };
        Object.keys(temp).forEach((key) => {
            temp[key] = this.simpleListItemComponentName;
        });
        this.currentComponentsNames = {...temp};
    },

}
