
@php
   $viewedIdsStr = request()->cookie('viewedIds') ?? '';
   $excludedRoutes = [
       // 'products.viewed',
       'products.singlePhotoPage',
       'my'
   ];
   $isAccountRoute = explode(".", $currentRouteName)[0] === 'account';

@endphp

@if (in_array($currentRouteName, $excludedRoutes))
    {{-- --}}
@elseif ($isAccountRoute)
    {{-- --}}
{{-- @elseif (!$viewedIdsStr) --}}
@else
    <aside id="viewedProductsSummaryWrapper" class="viewed_products__wrapper">
    </aside>
@endif






