<?php

namespace App\Http\Controllers;

use App\Models\siteInfoModel;
use Illuminate\Http\Request;

class siteInfoController extends Controller
{
    function sendSiteInfo(){
    	$result= siteInfoModel::get();


    	return $result;
    }
}
