<?php

namespace App\Http\Controllers;

use App\Models\productDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class productDetailsController extends Controller
{
    function productDetails(Request $request){
        $product_code = $request->code;

        $productDetails= productDetailsModel::Where('product_code',$product_code)->get();
        $ProductList= ProductListModel::Where('product_code',$product_code)->get();

        $item=[
            'product_details'=>$productDetails,
            'productlist'=>$ProductList,
        ];
        return $item;
    }
}
