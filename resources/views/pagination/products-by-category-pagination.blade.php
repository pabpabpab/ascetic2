@if ($paginator->hasPages())

    @php

        $routeName = 'products.byCategory';
        $firstPageUrl = route($routeName, ['category' => $category->slug]);

        $pageCount = $paginator->lastPage();
        $lastPageUrl = route($routeName, ['category' => $category->slug, 'pageNumber' => $pageCount]);

        $currentPageNumber = $paginator->currentPage();

        $prevPageNumber = $currentPageNumber - 1;
        $nextPageNumber = $currentPageNumber + 1;

        $prevRoute = '';
        if ($prevPageNumber === 1) {
            $prevRoute = route($routeName, ['category' => $category->slug]);
        } elseif ($prevPageNumber > 1) {
            $prevRoute = route($routeName, ['category' => $category->slug, 'pageNumber' => $prevPageNumber]);
        }

        $nextRoute = '';
        if ($nextPageNumber <= $pageCount) {
            $nextRoute = route($routeName, ['category' => $category->slug, 'pageNumber' => $nextPageNumber]);
        }

        $paginationData = [
            'routeName' => $routeName,
            'firstPageUrl' => $firstPageUrl,
            'lastPageUrl' => $lastPageUrl,
            'currentPageNumber' => $currentPageNumber,
            'pageCount' => $pageCount,
            'prevRoute' => $prevRoute,
            'prevPageNumber' => $prevPageNumber,
            'nextRoute' => $nextRoute,
            'nextPageNumber' => $nextPageNumber,
            'categorySlug' => $category->slug
        ];
    @endphp


    @if ($pageCount > 7)
        @include('pagination.complex-pagination-block', $paginationData)
    @else
        @include('pagination.simple-pagination-block', $paginationData)
    @endif

@endif
