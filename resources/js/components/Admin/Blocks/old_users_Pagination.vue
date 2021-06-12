<template>
<nav class="pagination_nav">

<table :class="containerClass" v-if="customizedUsersLength > 1"><tr>
    <td>
        <a href="#" class="pagination_link"
           @click.prevent="showUsersPage(currentUsersPage - 1)">
           <i class="fas fa-angle-left"></i>
        </a>
    </td>

    <td :class="innerContainerClass">

        <div class="pagination_left" v-if="showFirstPageWithDots">
            <a href="#" class="pagination_link"
               @click.prevent="showUsersPage(0)">
                1
            </a>
            <span class="pagination_dots">
                ...
            </span>
        </div>

        <div class="pagination_middle">
            <a href="#"
                 :class="usersPaginationLinkCssArr[item - 1]"
                 @click.prevent="showUsersPage(item - 1)"
                 v-for="item of usersPaginationLinksShot" :key="item">
                {{ item }}
            </a>
        </div>

        <!-- eslint-disable max-len -->
        <div class="pagination_right" v-if="showLastPageWithDots">
            <span class="pagination_dots">
                ...
            </span>
            <a href="#" class="pagination_link"
                 @click.prevent="showUsersPage(customizedUsersLength - 1)"
                v-if="showLastPageWithDots">
                {{customizedUsersLength}}
            </a>
        </div>

    </td>

    <td>
          <a href="#" class="pagination_link"
             @click.prevent="showUsersPage(currentUsersPage + 1)">
              <i class="fas fa-angle-right"></i>
          </a>
    </td>
</tr></table>

<div v-if="customizedUsersLength > 1" class="viewAll">
      <a href="#" class="pagination_link"
         @click.prevent="divideUsersIntoPages(1000000);">
        View all
      </a>
</div>
<div v-if="usersQuantityPerPage === 1000000" class="viewAll" >
    <a href="#" class="pagination_link"
        @click.prevent="divideUsersIntoPages(copyOfUsersQuantityPerPage);">
        Split into pages
    </a>
</div>


</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Pagination',
  methods: {
    ...mapActions([
      'showUsersPage',
      'divideUsersIntoPages',
    ]),
  },
  computed: {
    ...mapGetters([
      'currentUsersPage',
      'currentUsersPageNumber',
      'customizedUsers',
      'customizedUsersLength',
      'usersPaginationLinksShot',
      'usersPaginationLinkCssArr',
      'usersQuantityPerPage',
      'copyOfUsersQuantityPerPage',
      'usersWing',
      'usersMinimumPagesForComplexPagination',
    ]),
    aLotOfPages() {
        if (this.customizedUsersLength < this.usersMinimumPagesForComplexPagination) {
            return false;
        }
        return this.customizedUsersLength > (this.usersWing * 3);
    },
    showFirstPageWithDots() {
        return this.aLotOfPages && (this.currentUsersPageNumber > (this.usersWing + 2));
    },
    showLastPageWithDots() {
        /* eslint max-len: ["error", { "code": 130 }] */
        return this.aLotOfPages && ((this.currentUsersPageNumber + (this.usersWing + 1)) < this.customizedUsersLength);
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
