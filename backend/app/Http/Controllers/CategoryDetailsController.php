<?php

namespace App\Http\Controllers;

use App\Models\Category_level1Model;
use App\Models\Category_level2Model;
use Illuminate\Http\Request;

class CategoryDetailsController extends Controller
{
    function sendCategoryDetails(){
        $parentCategory=Category_level1Model::all();
        $cateforyDetailsArray = [];
                 
        foreach($parentCategory as $value){
            $subCategory= Category_level2Model::where('cat1_name', $value['cat1_name'])->get();
            $item=[
                    'parentCategoryName'=>$value['cat1_name'],
                    'parentCategoryImg'=>$value['cat1_image'],
                    'subCategory'=>$subCategory,
                  ];
                    array_push($cateforyDetailsArray, $item);
            }

        return $cateforyDetailsArray;
    }
}
