@extends('layouts.main')


@section('title')Товар {{$product->name}}@endsection


@section('content')
    <h1>Один товар {{$product->name}}</h1>
@endsection
