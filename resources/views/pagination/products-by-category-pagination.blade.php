@if ($paginator->hasPages())

    @php
        $routeName = 'products.byCategory';

        $prevPageNumber = $paginator->currentPage() - 1;
        $nextPageNumber = $paginator->currentPage() + 1;

        $prevRoute = '';
        if ($prevPageNumber === 1) {
            $prevRoute = route($routeName, ['category' => $category->slug]);
        } elseif ($prevPageNumber > 1) {
            $prevRoute = route($routeName, ['category' => $category->slug, 'pageNumber' => $prevPageNumber]);
        }

        $nextRoute = '';
        if ($nextPageNumber <= $paginator->lastPage()) {
            $nextRoute = route($routeName, ['category' => $category->slug, 'pageNumber' => $nextPageNumber]);
        }
    @endphp



        @if ($prevRoute)
            <a href="{{ $prevRoute }}" data-paginator-page-number="{{$prevPageNumber}}" class="pagination__link pagination__link__arrow_left"></a>
        @endif

        @for ($i = 1; $i <= $paginator->lastPage(); $i++)
            @if ($paginator->currentPage() === $i)
                <span data-paginator-page-number="{{ $i }}" class="pagination__link_active">
                    {{ $i }}
                </span>
            @elseif ($i === 1)
                <a href="{{ route($routeName, ['category' => $category->slug]) }}" data-paginator-page-number="1" class="pagination__link">
                    1
                </a>
            @else
                <a href="{{ route($routeName, ['category' => $category->slug, 'pageNumber' => $i]) }}"
                   data-paginator-page-number="{{ $i }}" class="pagination__link">
                    {{ $i }}
                </a>
            @endif
        @endfor

        @if ($nextRoute)
            <a href="{{ $nextRoute }}" data-paginator-page-number="{{$nextPageNumber}}" class="pagination__link pagination__link__arrow_right"></a>
        @endif

@endif
