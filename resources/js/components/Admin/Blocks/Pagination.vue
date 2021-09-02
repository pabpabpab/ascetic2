<template>
    <nav class="pagination_nav">

        <div class="quantity_per_page__wrapper">
            <p class="quantity_per_page__title">Показывать по</p>
            <select class="quantity_per_page__select_input"
                    v-model="customQuantityPerPage"
                    @change="divideIntoPages({
                        entity: entity,
                        customQuantityPerPage: customQuantityPerPage
                    });">
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="1000000">Все</option>
            </select>
        </div>



        <table :class="containerClass" v-if="customizedLength(entity) > 1"><tr>
            <td>
                <a href="#" class="pagination_link"
                   @click.prevent="showPage({
                        entity: entity,
                        page: currentPageIndex(entity) - 1
                   })">
                    <i class="fas fa-angle-left">&lt;</i>
                </a>
            </td>

            <td :class="innerContainerClass">

                <div class="pagination_left" v-if="showFirstPageWithDots">
                    <a href="#" class="pagination_link"
                       @click.prevent="showPage({
                            entity: entity,
                            page: 0
                       })">
                        1
                    </a>
                    <span class="pagination_dots">
                        ...
                    </span>
                </div>

                <div class="pagination_middle">
                    <a href="#"
                       v-for="item of paginationLinksShot(entity)" :key="item"
                       :class="paginationLinkCssArr(entity)[item - 1]"
                       @click.prevent="showPage({
                            entity: entity,
                            page: item - 1
                       })">
                        {{ item }}
                    </a>
                </div>

                <!-- eslint-disable max-len -->
                <div class="pagination_right" v-if="showLastPageWithDots">
                    <span class="pagination_dots">
                        ...
                    </span>
                    <a href="#" class="pagination_link"
                       @click.prevent="showPage({
                            entity: entity,
                            page: customizedLength(entity) - 1
                       })" v-if="showLastPageWithDots">
                        {{ customizedLength(entity) }}
                    </a>
                </div>

            </td>

            <td>
                <a href="#" class="pagination_link"
                   @click.prevent="showPage({
                        entity: entity,
                        page: currentPageIndex(entity) + 1
                   })">
                      <i class="fas fa-angle-right">&gt;</i>
                </a>
            </td>

        </tr></table>

        <div v-if="customizedLength(entity) > 1" class="viewAll">
            <a href="#" class="pagination_link"
               @click.prevent="divideIntoPages({
                    entity: entity,
                    customQuantityPerPage: 1000000
               });">
                Показать все
            </a>
        </div>
        <div v-if="quantityPerPage(entity) === 1000000" class="viewAll" >
            <a href="#" class="pagination_link"
               @click.prevent="divideIntoPages({
                    entity: entity,
                    customQuantityPerPage: copyOfQuantityPerPage(entity)
               });">
                Разбить по страницам
            </a>
        </div>


    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Pagination',
    props: ['entity'],
    data() {
        return {
            customQuantityPerPage: 0,
        };
    },
    methods: {
        ...mapActions('pagination', [
            'showPage',
        ]),
        ...mapActions([
            'divideIntoPages',
        ]),
    },
    computed: {
        ...mapGetters('pagination', [
            'currentPageIndex',
            'currentPageNumber',
            'customized',
            'customizedLength',
            'paginationLinksShot',
            'paginationLinkCssArr',
            'quantityPerPage',
            'copyOfQuantityPerPage',
            'wing',
            'minimumPagesForComplexPagination',
        ]),
        aLotOfPages() {
            if (this.customizedLength(this.entity) < this.minimumPagesForComplexPagination(this.entity)) {
                return false;
            }
            return this.customizedLength(this.entity) > (this.wing * 3);
        },
        showFirstPageWithDots() {
            return this.aLotOfPages && (this.currentPageNumber(this.entity) > (this.wing + 2));
        },
        showLastPageWithDots() {
            /* eslint max-len: ["error", { "code": 130 }] */
            return this.aLotOfPages && ((this.currentPageNumber(this.entity) + (this.wing + 1)) < this.customizedLength(this.entity));
        },
        containerClass() {
            if (this.aLotOfPages) {
                return 'pagination_table pagination_width_outer';
            }
            return 'pagination_table';
        },
        innerContainerClass() {
            if (this.aLotOfPages) {
                return 'pagination_numbers_container pagination_width_inner';
            }
            return 'pagination_numbers_container';
        },
    },
    mounted() {
        // обратная связь (от стора в v-model) при включении
        this.customQuantityPerPage = this.quantityPerPage(this.entity);
    },
};
</script>
