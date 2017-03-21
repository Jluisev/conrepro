<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Illuminate\Support\Facades\File;

$app->get('/api/{id}', 'Controller@apiResponse');

$app->get('/[{id}[/{sub}[/{sub2}]]]', function () use ($app) {
    return File::get(base_path() . '/build/index.html');
});

