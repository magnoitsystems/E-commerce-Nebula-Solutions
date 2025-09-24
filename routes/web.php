<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/fileProduct', function () {
    return Inertia::render('FileProduct', [
        'image' => [] // para luego pasar props desde el back
    ]);
});

Route::get('/admin', function () {
    return Inertia::render('Admin');
});

Route::get('/purchases', function () {
    return Inertia::render('Purchases');
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/logup', function () {
    return Inertia::render('Logup');
});

Route::get('/micarrito', function () {
    return Inertia::render('Cart');
});

Route::get('/products', function () {
    return Inertia::render('AllProducts');
});

Route::get('/productsByCategory/{category}', function ($category) {
    return Inertia::render('ProductsByCategory', [
        'category' => $category
    ]);
});
