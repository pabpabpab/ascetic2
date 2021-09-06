<template>
    <nav class="pagination_nav">

        <quantity-per-page-of-pagination :entity="entity" :key="Number(quantityPerPage)"></quantity-per-page-of-pagination>

        <table :class="containerClass" v-if="customizedLength(entity) > 1"><tr>

            <td>
                <a href="#" class="pagination_link"
                   @click.prevent="showPage({
                        entity: entity,
                        page: currentPageIndex(entity) - 1
                   })">
                    <i class="fas fa-angle-left">&larr;</i>
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
                      <i class="fas fa-angle-right"> &rarr; </i>
                </a>
            </td>

        </tr></table>


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
import QuantityPerPageOfPagination from "./QuantityPerPageOfPagination";

export default {
    name: 'Pagination',
    components: {
        QuantityPerPageOfPagination,
    },
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
};
</script>
