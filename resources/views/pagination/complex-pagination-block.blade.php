@if ($prevRoute)
    <a href="{{ $prevRoute }}" data-paginator-page-number="{{$prevPageNumber}}" class="pagination__link pagination__link__arrow_left"></a>
@endif

@if ($currentPageNumber > 1)
    <a href="{{ $firstPageUrl }}" data-paginator-page-number="1" class="pagination__link">
        1
    </a>
@endif

{{--
@if ($currentPageNumber > 2)
    <span class="pagination__three_dots">
    </span>
@endif
--}}

<span data-paginator-page-number="{{ $currentPageNumber }}" class="pagination__link_active">
    {{ $currentPageNumber }}
</span>

{{--
@if ($currentPageNumber < $pageCount - 1)
    <span class="pagination__three_dots">
    </span>
@endif
--}}

@if ($currentPageNumber < $pageCount)
    <a href="{{ $lastPageUrl }}" data-paginator-page-number="{{ $pageCount }}" class="pagination__link">
        {{ $pageCount }}
    </a>
@endif

@if ($nextRoute)
    <a href="{{ $nextRoute }}" data-paginator-page-number="{{$nextPageNumber}}" class="pagination__link pagination__link__arrow_right"></a>
@endif
