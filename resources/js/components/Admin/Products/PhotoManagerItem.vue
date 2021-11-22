<template>
    <div ref="photo" class="photo_manager__item"
         :class="[draggedPhotoClass, beneathDraggedPhotoClass, notDraggedPhotosClass]"
         :style="{
            'left': leftByIndex(photoIndex),
            'top': topByIndex(photoIndex),
         }"
         @mousedown.stop="myDragStart({index: photoIndex, event: $event, entity: 'Photo'})"
         @mouseup.stop="myDragStop({ event: $event, clickedIndex: photoIndex, entity: 'Photo' })">

        <div class="photo_manager__item__content">
            <img alt="" :src="photoSrc" :class="imgClass" style="pointer-events: none"/>
        </div>

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
    props: ['photoName', 'productId', 'photoIndex', 'numberOfPhotos'],
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
            return this.numberOfPhotos - 1;
        },

        ...mapGetters('dragAndDropInAbsDiv', [
            'entity',
            'isDragging',
            'leftByIndex',
            'topByIndex',
            'draggingOccurs',
        ]),

        draggedEntity() {
            return this.entity;
        },

        draggedPhotoClass() {
            return {
                'draggedPhoto': this.isDragging(this.photoIndex) && this.draggedEntity === 'Photo' && this.numberOfPhotos > 1,
            };
        },
        notDraggedPhotosClass() {
            return {
                'notDraggedPhotos': this.numberOfPhotos < 2,
            };
        },
        beneathDraggedPhotoClass() {
            return {
                'beneathDraggedPhoto': this.draggingOccurs,
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
        if (this.numberOfPhotos < 2) {
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
