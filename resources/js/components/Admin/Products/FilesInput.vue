<template>
    <div>
        <div class="photo_preview__container" :class="{'mt50': photos.length > 0}">

            <div v-for="item of graphicSrc"
                :key="item.index"
                class="prePhoto__wrapper">

                <img alt=""
                     :src="item.url"
                     class="prePhoto"/>

                <div
                    @click="removePreFile(item.index)"
                    class="prePhoto__close_icon">
                    &#10006;
                </div>
            </div>


            <div v-for="item of nonGraphicNames"
                :key="item.index"
                class="prePhoto__wrapper">

                <div
                    v-html="item.name"
                    class="preFile_name">
                </div>

                <div
                    @click="removePreFile(item.index)"
                    class="prePhoto__close_icon prePhoto__close_icon_offset">
                    &#10006;
                </div>
            </div>

        </div>

        <div class=input_photo__wrapper>
            <input ref="photos"
                   @change="previewFiles()"
                   type="file"
                   accept="image/*"
                   multiple
                   class="input_photo">

            <button @click="selectFiles()" class="button__select_photos mauto">
                {{ buttonHeader }}
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: "FilesInput",
    // пропс value, потому что в родителе v-model, который есть как
    // :value="photos"  @input="photos = $event"
    props: ['value'],
    data() {
        return {
            photos: [],
        };
    },

    methods: {
        previewFiles() {
            if (this.$refs.photos.files.length === 0) {
                return;
            }
            this.photos = [...this.$refs.photos.files];
        },
        removePreFile(index) {
            this.photos.splice(index, 1);
        },
        selectFiles() {
            this.$refs.photos.click();
        },
    },

    computed: {

        graphicSrc() {
            const graphicSrc = [];
            for (let i = 0; i < this.photos.length; i++) {
                const photo = this.photos[i];
                if (!/\.(jpe?g|png|gif|bmp|webp)$/i.test(photo.name)) {
                    continue;
                }
                graphicSrc.push({
                    url: URL.createObjectURL(photo),
                    index: i
                });
            }

            // событие input, потому что в родителе v-model, который есть как
            // :value="photos"  @input="photos = $event"
            this.$emit('input', this.photos);

            return graphicSrc; // array of objects
        },

        nonGraphicNames() {
            const nonGraphicNames = [];
            for (let i = 0; i < this.photos.length; i++) {
                const photo = this.photos[i];
                if (!/\.(jpe?g|png|gif|bmp|webp)$/i.test(photo.name)) {
                    nonGraphicNames.push({
                        name: photo.name,
                        index: i
                    });
                }

                // событие input, потому что в родителе v-model, который есть как
                // :value="photos"  @input="photos = $event"
                this.$emit('input', this.photos);
            }
            return nonGraphicNames; // array of objects
        },

        buttonHeader() {
            if (this.photos.length > 0) {
                return 'Заменить фото';
            }
            return 'Добавить фото';
        },
    },

}
</script>
