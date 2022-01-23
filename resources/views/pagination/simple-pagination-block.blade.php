@for ($i = 1; $i <= $pageCount; $i++)
    @if ($currentPageNumber === $i)
        <span data-paginator-page-number="{{ $i }}" class="pagination__link_active">
            {{ $i }}
        </span>
    @elseif ($i === 1)
        <a href="{{ $firstPageUrl }}" data-paginator-page-number="1" class="pagination__link">
            1
        </a>
    @else
        @php
            $url = $categorySlug
                      ? route($routeName, ['category' => $categorySlug, 'pageNumber' => $i])
                      : route($routeName, ['pageNumber' => $i])
        @endphp
        <a href="{{ $url }}" data-paginator-page-number="{{ $i }}" class="pagination__link">
            {{ $i }}
        </a>
    @endif
@endfor
