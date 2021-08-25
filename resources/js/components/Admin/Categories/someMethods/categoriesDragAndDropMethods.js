export default  {
    myDrag(index, event) {
        this.draggableIndex = index;
        console.log(this.draggableIndex);
        //this.moveAt(event);
    },
    myMove(event) {
        console.log(this.draggableIndex);
        if(this.draggableIndex !== -1) {
            console.log('uuu');
            this.dragTop = event.pageY - 12;
        }
    },
    moveAt(event){
        if(this.draggableIndex !== -1) {
            this.dragTop = event.pageY - 12;
        }
    },
    myDragStop() {
        this.draggableIndex = -1;
        this.dragTop = 0;
        console.log('zzz');
    },
    isDragging(index) {
        return this.draggableIndex === index;
    },
    positionOfIndex(index) {
        return this.isDragging(index) ? 'absolute' : 'relative'
    },
    leftOfIndex(index) {
        return this.isDragging(index) ? this.dragLeft + 'px' : 0
    },
    topOfIndex(index) {
        return this.isDragging(index) ? this.dragTop + 'px' : 0
    },


}
