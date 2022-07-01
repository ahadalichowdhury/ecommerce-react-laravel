<?php

namespace App\Http\Controllers;

use App\Models\slidermodel;
use Illuminate\Http\Request;

class sliderController extends Controller
{
    function sendSliderInfo(){
       $result = slidermodel::all();

        return $result;
    }
}
