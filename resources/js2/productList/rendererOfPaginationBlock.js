import el from './../el';
import getPaginationBlockHtml from "../html/paginationBlock/getPaginationBlockHtml";


export default class RendererOfPaginationBlock {

    constructor({searchSettingsStore, publicUrlMaker}) {
        this.searchSettingsStore = searchSettingsStore;
        this.publicUrlMaker = publicUrlMaker;
        this.wrapper = el('#paginationWrapper');
    }

    remake() {
        if (el('#paginationContent')) {
            el('#paginationContent').remove();
        }

        const settings = this.searchSettingsStore.getSettings();
        const pageNumber = settings.pageNumber;
        const pageCount = settings.pageCount;
        const firstPageUrl = this.publicUrlMaker.getFirstPageUrl();
        const pageUrl = firstPageUrl === '/' ? `/products` : firstPageUrl;

        const data = {
            firstPageUrl,
            pageUrl,
            pageNumber,
            pageCount,
        }

        const contentHtml = this._getPaginationBlockHtml(data);
        const html = `<div id="paginationContent" class="pagination_nav__content">${ contentHtml }</div>`;
        this.wrapper.insertAdjacentHTML('afterbegin', html);
    }


    _getPaginationBlockHtml({firstPageUrl, pageUrl, pageNumber, pageCount}) {
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

        const items = [];

        if (prevRoute) {
            items.push(
                `<a href="${prevRoute}" data-paginator-page-number="${prevPageNumber}" class="pagination__link pagination__link__arrow_left"></a>`
            );
        }

        for (let i = 1; i <= pageCount; i++) {
            if (pageNumber === i) {
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

        if (nextRoute) {
            items.push(
                `<a href="${nextRoute}" data-paginator-page-number="${nextPageNumber}" class="pagination__link pagination__link__arrow_right"></a>`
            );
        }

        return items.join('');
    }



}
