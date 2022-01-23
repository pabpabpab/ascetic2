@if ($paginator->hasPages())

    @php
        $routeName = 'products.list';
        $firstPageUrl = route('mainPage');


        $pageCount = $paginator->lastPage();
        $lastPageUrl = route($routeName, ['pageNumber' => $pageCount]);

        $currentPageNumber = $paginator->currentPage();

        $prevPageNumber = $currentPageNumber - 1;
        $nextPageNumber = $currentPageNumber + 1;

        $prevRoute = '';
        if ($prevPageNumber === 1) {
            $prevRoute = route('mainPage');
        } elseif ($prevPageNumber > 1) {
            $prevRoute = route($routeName, ['pageNumber' => $prevPageNumber]);
        }

        $nextRoute = '';
        if ($nextPageNumber <= $pageCount) {
            $nextRoute = route($routeName, ['pageNumber' => $nextPageNumber]);
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
            'categorySlug' => ''
        ];
    @endphp

    @if ($pageCount > 7)
        @include('pagination.complex-pagination-block', $paginationData)
    @else
        @include('pagination.simple-pagination-block', $paginationData)
    @endif

@endif
