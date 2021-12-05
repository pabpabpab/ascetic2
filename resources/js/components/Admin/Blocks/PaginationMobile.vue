<template>
    <nav data-pagination="mobile" class="pagination_nav">

        <quantity-per-page-of-pagination :entity="entity" :key="Number(quantityPerPage)"></quantity-per-page-of-pagination>


        <table class="pagination_table" v-if="customizedLength(entity) > 1"><tr>

            <td>
                <a href="#" class="pagination_link pagination_link__arrow_left"
                   @click.prevent="showPageByClick({
                        entity: entity,
                        pageIndex: currentPageIndex(entity) - 1
                   })">
                </a>
            </td>

            <td class="pagination_numbers_container">

                <div class="pagination_middle">
                    <a href="#" class="pagination_link pagination_link_active" v-text="currentPageNumber(entity)">
                    </a>
                </div>

            </td>

            <td>
                <a href="#" class="pagination_link pagination_link__arrow_right"
                   @click.prevent="showPageByClick({
                        entity: entity,
                        pageIndex: currentPageIndex(entity) + 1
                   })">
                </a>
            </td>

        </tr></table>
    </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import QuantityPerPageOfPagination from "./QuantityPerPageOfPagination";
export default {
    name: "PaginationMobile",
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
            'showPageByClick',
        ]),
    },
    computed: {
        ...mapGetters('pagination', [
            'currentPageIndex',
            'currentPageNumber',
            'customized',
            'customizedLength',
            'quantityPerPage',
        ]),
    },
}
</script>
