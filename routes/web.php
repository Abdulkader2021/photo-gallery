<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\CategoryController;

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
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard
Route::get('/', function () {
    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Category
Route::get('category', [CategoryController::class, 'index'])->name('category.index')->middleware(['auth', 'verified']);
Route::get('category/create', [CategoryController::class, 'create'])->name('category.create')->middleware(['auth', 'verified']);
Route::get('category/{id}/edit', [CategoryController::class, 'edit'])->name('category.edit')->middleware(['auth', 'verified']);
Route::post('category/store', [CategoryController::class, 'store'])->name('category.store')->middleware(['auth', 'verified']);
Route::put('category/update/{id}', [CategoryController::class, 'update'])->name('category.update')->middleware(['auth', 'verified']);
Route::delete('category/{id}', [CategoryController::class, 'destroy'])->name('category.destroy')->middleware(['auth', 'verified']);


// Gallery
Route::get('/gallery', function () {
    return Inertia::render('Gallery/PhotoGallery');
})->middleware(['auth', 'verified'])->name('gallery');

// Documentation
Route::get('/documentation', function () {
    return Inertia::render('Documentation/Documentation');
})->middleware(['auth', 'verified'])->name('documentation');


require __DIR__.'/auth.php';
