<template>
    <div class="photo_management__item">
        <img alt="" :src="photoSrc" :class="imgClass" />
        <span class="context_menu__icon__photo_manager"
              @mouseover="showContextMenu({
                event: $event,
                target: 'Photos',
                data: {
                    productId: productId,
                    photoName: photoName,
                    currentListIndex: index,
                    lastListIndex: lastListIndex
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
    props: ['photoName', 'productId', 'index', 'length'],
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
        lastListIndex() {
            return this.length - 1;
        },
    },
    methods: {
        ...mapActions('contextMenu', [
            'showContextMenu',
        ]),
    },
}

</script>
