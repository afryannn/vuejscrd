<?php
// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', 'PostController@homepage');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('/posts','PostController');

Route::get('/getall','PostController@getall');
