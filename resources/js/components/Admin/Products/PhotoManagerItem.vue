<template>
    <div ref="photo" class="photo_manager__item"
         :class="[draggablePhotoItemClass, underDraggablePhotoItemClass, notDraggablePhotoItemClass]"
         :style="{
            'left': leftByIndex(photoIndex),
            'top': topByIndex(photoIndex),
         }"
         @mousedown.stop="myDragStart({index: photoIndex, event: $event, entity: 'Photo'})"
         @mouseup.stop="myDragStop({ event: $event, clickedIndex: photoIndex, entity: 'Photo' })">
        <img alt="" :src="photoSrc" :class="imgClass" style="pointer-events: none"/>
        <span class="context_menu__icon__photo_manager"
              @mouseover="showContextMenu({
                event: $event,
                target: 'Photos',
                data: {
                    productId: productId,
                    photoName: photoName,
                    currentListIndex: photoIndex,
                    lastListIndex: lastPhotoListIndex
                }
            })">
            &#8942;
        </span>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "PhotoManagerItem",
    props: ['photoName', 'productId', 'photoIndex', 'length'],
    data() {
        return {
            sizeIndex: 3
        };
    },
    computed: {
        ...mapGetters([
            'imgFolderPrefix',
        ]),
        photoSrc() {
            return `${this.folderName}/${this.fileNamePrefix}${this.photoName}`;
        },
        folderName() {
            return `/storage/${this.imgFolderPrefix}${this.sizeIndex}`;
        },
        fileNamePrefix() {
            return  `${this.productId}s${this.sizeIndex}-`;
        },
        imgClass() {
            return `photo__size${this.sizeIndex}`;
        },
        lastPhotoListIndex() {
            return this.length - 1;
        },

        ...mapGetters('dragAndDropInAbsDiv', [
            'entity',
            'isDragging',
            'leftByIndex',
            'topByIndex',
        ]),

        draggedEntity() {
            return this.entity;
        },

        draggablePhotoItemClass() {
            return {
                'draggablePhoto': this.isDragging(this.photoIndex) && this.draggedEntity === 'Photo' && this.length > 1,
            };
        },
        notDraggablePhotoItemClass() {
            return {
                'notDraggablePhoto': this.length < 2,
            };
        },
        underDraggablePhotoItemClass() {
            return {
                'underDraggablePhoto': !this.isDragging(this.photoIndex) && this.draggedEntity === 'Photo',
            };
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
        ...mapActions('dragAndDropInAbsDiv', [
            'myDragStart',
            'myDragStop',
        ]),
    },

    mounted() {
        if (this.length < 2) {
            return;
        }
        this.$store.dispatch('dragAndDropInAbsDiv/resetCoordinates', {cycleNumber: this.photoIndex, entity: 'Photo'})
            .then(() => {
                const xy = this.$refs.photo.getBoundingClientRect();
                this.$store.commit('dragAndDropInAbsDiv/addXIntoXCoordinates', {x: xy.x, entity: 'Photo'});
                this.$store.commit('dragAndDropInAbsDiv/addYIntoYCoordinates', {y: xy.y, entity: 'Photo'});
            });
    },
}

</script>
