@extends('layouts.app')

@section('content')
<div id="app">
<div class="container">
<div class="jumbotron jumbotron-fluid" id="jumbotron_index">
  <div class="text-center">
    <h1>Example Title</h1>
    <p>Example</p>
    <router-view></router-view>
  </div>
</div>
</div>
</div>
@endsection
