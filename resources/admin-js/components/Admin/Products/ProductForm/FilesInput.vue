<template>
    <div>
        <div class="photo_preview__container" :class="{'mt20': photos.length > 0}">

            <div v-for="item of graphicSrc"
                :key="item.index"
                class="prePhoto__wrapper">

                <img alt=""
                     :src="item.url"
                     class="prePhoto"/>

                <div
                    @click="removePreFile(item.index)"
                    class="prePhoto__delete_icon">
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
                    class="prePhoto__delete_icon prePhoto__delete_icon_offset">
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

            <button
                v-if="showPhotoButton"
                @click="selectFiles()"
                class="select_photos_button mauto">
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
    props: ['value', 'owner'],
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
            if (this.photos.length > 5) {
                const text = `Выбрано файлов больше чем 5,
                это может сильно замедлить загрузку фото. Рекомендуется загружать не более чем по 5 фото.
                Следущие фото можно будет добавить после.`;
                this.$store.dispatch('showInformationDialog', text);
            }

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

        showPhotoButton() {
            // показывать кнопку «Добавить/Заменить фото» всегда, кроме случая ниже
            return !(this.owner === 'ProductPhotoManager' && this.photos.length > 0);
        },
    },

}
</script>
