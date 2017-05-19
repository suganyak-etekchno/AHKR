<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'User\UserController@index')->name('home');
Route::get('/admin', 'Admin\AdminController@page')->name('adminpage');
Route::post('/query', 'Admin\AdminController@insert');
Route::post('/companyinsert', 'Company\CompanyController@insert');
Route::post('/productinsert', 'Product\ProductController@insert');
//selling
Route::post('/sale', 'Product\ProductController@selling');

Route::get('/user', 'Admin\AdminController@add')->name('user');
Route::get('/edit', 'Admin\AdminController@edit')->name('edit_user');
Route::get('/list', 'Admin\AdminController@view')->name('view_user');



Route::get('/company', 'Company\CompanyController@add')->name('company');
Route::get('/product', 'Product\ProductController@add')->name('product');
Route::get('/sale', 'Product\ProductController@sale')->name('sale');






