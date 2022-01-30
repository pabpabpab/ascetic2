import el from './../el';


export default class PaginationBlockRenderer {

    constructor({searchSettingsStore, publicUrlMaker}) {
        this.searchSettingsStore = searchSettingsStore;
        this.publicUrlMaker = publicUrlMaker;
        this.wrapper = el('#paginationWrapper');
    }

    remake() {

        if (el('#paginationContent')) {
            el('#paginationContent').remove();
        }

        const data = this._getPaginationData();
        const contentHtml = data.pageCount > 7
            ? this._getComplexPaginationBlockHtml(data)
            : this._getSimplePaginationBlockHtml(data)
        const totalHtml = `<div id="paginationContent" class="pagination_nav__content">
                              ${ contentHtml }
                           </div>`;
        this.wrapper.insertAdjacentHTML('afterbegin', totalHtml);
    }


    _getPaginationData() {
        const settings = this.searchSettingsStore.getSettings();

        const pageNumber = settings.pageNumber;
        const pageCount = settings.pageCount;

        const firstPageUrl = this.publicUrlMaker.getFirstPageUrl();
        const pageUrl = firstPageUrl === '/' ? `/products` : firstPageUrl;
        const lastPageUrl = `${pageUrl}/${pageCount}`;

        const prevPageNumber = pageNumber - 1;
        const nextPageNumber = pageNumber + 1;

        let prevRoute = '';
        if (prevPageNumber === 1) {
            prevRoute = firstPageUrl;
        } else if (prevPageNumber > 1) {
            prevRoute = `${pageUrl}/${prevPageNumber}`;
        }

        let nextRoute = '';
        if (nextPageNumber <= pageCount) {
            nextRoute = `${pageUrl}/${nextPageNumber}`;
        }

        return {
            firstPageUrl,
            pageUrl,
            lastPageUrl,
            currentPageNumber: pageNumber,
            pageCount,
            prevRoute,
            prevPageNumber,
            nextRoute,
            nextPageNumber,
        };
    }


    _getComplexPaginationBlockHtml({firstPageUrl, pageUrl, lastPageUrl, currentPageNumber, pageCount, prevRoute, prevPageNumber, nextRoute, nextPageNumber}) {
        const items = [];
        if (prevRoute) {
            items.push(
                `<a href="${prevRoute}" data-paginator-page-number="${prevPageNumber}" class="pagination__link pagination__link__arrow_left"></a>`
            );
        }
        if (currentPageNumber > 1) {
            items.push(
                `<a href="${firstPageUrl}" data-paginator-page-number="1" class="pagination__link">
                    1
                </a>`
            );
        }
        items.push(
            `<span data-paginator-page-number="${currentPageNumber}" class="pagination__link_active">
                ${currentPageNumber}
            </span>`
        );
        if (currentPageNumber < pageCount) {
            items.push(
                `<a href="${lastPageUrl}" data-paginator-page-number="${pageCount}" class="pagination__link">
                    ${pageCount}
                </a>`
            );
        }
        if (nextRoute) {
            items.push(
                `<a href="${nextRoute}" data-paginator-page-number="${nextPageNumber}" class="pagination__link pagination__link__arrow_right"></a>`
            );
        }
        return items.join('');
    }


    _getSimplePaginationBlockHtml({firstPageUrl, pageUrl, currentPageNumber, pageCount}) {
        if (pageCount < 2) {
            return '';
        }

        const items = [];
        for (let i = 1; i <= pageCount; i++) {
            if (currentPageNumber === i) {
                items.push(
                    `<span data-paginator-page-number="${i}" class="pagination__link_active">${i}</span>`
                );
            } else if (i === 1) {
                items.push(
                    `<a href="${firstPageUrl}" data-paginator-page-number="1" class="pagination__link">1</a>`
                );
            } else {
                items.push(
                    `<a href="${pageUrl}/${i}" data-paginator-page-number="${i}" class="pagination__link">${i}</a>`
                );
            }
        }
        return items.join('');
    }

}
