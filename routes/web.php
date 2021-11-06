<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    sleep(2);
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/category', function () {
    return Inertia::render('Category');
})->middleware(['auth', 'verified'])->name('category');

Route::get('/gallery', function () {
    return Inertia::render('PhotoGallery');
})->middleware(['auth', 'verified'])->name('gallery');

Route::get('/documentation', function () {
    return Inertia::render('Documentation');
})->middleware(['auth', 'verified'])->name('documentation');


require __DIR__.'/auth.php';
