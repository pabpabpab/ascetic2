<template>
    <nav class="pagination_nav">

        <table :class="containerClass" v-if="customizedLength > 1"><tr>
            <td>
                <a href="#" class="pagination_link"
                   @click.prevent="showPage({
                        moduleName,
                        page: currentPageIndex - 1
                   })">
                    <i class="fas fa-angle-left"></i>
                </a>
            </td>

            <td :class="innerContainerClass">

                <div class="pagination_left" v-if="showFirstPageWithDots">
                    <a href="#" class="pagination_link"
                       @click.prevent="showPage({
                            moduleName,
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
                       v-for="item of paginationLinksShot" :key="item"
                       :class="paginationLinkCssArr[item - 1]"
                       @click.prevent="showPage({
                            moduleName,
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
                            moduleName,
                            page: customizedLength - 1
                       })" v-if="showLastPageWithDots">
                        {{ customizedLength }}
                    </a>
                </div>

            </td>

            <td>
                <a href="#" class="pagination_link"
                   @click.prevent="showPage({
                        moduleName,
                        page: currentPageIndex + 1
                   })">
                      <i class="fas fa-angle-right"></i>
                </a>
            </td>
        </tr></table>

        <div v-if="customizedLength > 1" class="viewAll">
            <a href="#" class="pagination_link"
               @click.prevent="divideIntoPages({
                    moduleName,
                    customQuantityPerPage: 1000000
               });">
                View all
            </a>
        </div>
        <div v-if="quantityPerPage(moduleName) === 1000000" class="viewAll" >
            <a href="#" class="pagination_link"
               @click.prevent="divideIntoPages({
                    moduleName,
                    customQuantityPerPage: copyOfQuantityPerPage(moduleName)
               });">
                Split into pages
            </a>
        </div>


    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Pagination',
    props: ['moduleName'],
    methods: {
        ...mapActions([
            'showPage',
            'divideIntoPages',
        ]),
    },
    computed: {
        ...mapGetters([
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
            if (this.customizedLength < this.minimumPagesForComplexPagination(this.moduleName)) {
                return false;
            }
            return this.customizedLength > (this.wing(this.moduleName) * 3);
        },
        showFirstPageWithDots() {
            return this.aLotOfPages && (this.currentPageNumber > (this.wing(this.moduleName) + 2));
        },
        showLastPageWithDots() {
            /* eslint max-len: ["error", { "code": 130 }] */
            return this.aLotOfPages && ((this.currentPageNumber + (this.wing(this.moduleName) + 1)) < this.customizedLength);
        },
        containerClass() {
            if (this.aLotOfPages) {
                return 'pagination_table pagination_width_outer mauto';
            }
            return 'pagination_table mauto';
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
