@if ($paginator->hasPages())

    @php
        $routeName = 'products.viewed';

        $prevPageNumber = $paginator->currentPage() - 1;
        $nextPageNumber = $paginator->currentPage() + 1;

        $prevRoute = '';
        if ($prevPageNumber === 1) {
            $prevRoute = route($routeName);
        } elseif ($prevPageNumber > 1) {
            $prevRoute = route($routeName, ['pageNumber' => $prevPageNumber]);
        }

        $nextRoute = '';
        if ($nextPageNumber <= $paginator->lastPage()) {
            $nextRoute = route($routeName, ['pageNumber' => $nextPageNumber]);
        }
    @endphp

    <nav class="pagination_nav">

        <div class="pagination_nav__left">
            @if ($prevRoute)
                <a href="{{ $prevRoute }}" class="pagination__link pagination__link__arrow_left"></a>
            @endif

            @for ($i = 1; $i <= $paginator->lastPage(); $i++)
                @if ($paginator->currentPage() === $i)
                    <span class="pagination__link pagination__link_active">
                        {{ $i }}
                    </span>
                @elseif ($i === 1)
                    <a href="{{ route($routeName) }}" class="pagination__link">
                        1
                    </a>
                @else
                    <a href="{{ route($routeName, ['pageNumber' => $i]) }}" class="pagination__link">
                        {{ $i }}
                    </a>
                @endif
            @endfor

            @if ($nextRoute)
                <a href="{{ $nextRoute }}" class="pagination__link pagination__link__arrow_right"></a>
            @endif
        </div>

    </nav>
@endif
