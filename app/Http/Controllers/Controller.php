<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    public function apiResponse($id){
        return response()->json(['success' => true, 'object' => $id]);
    }
}
