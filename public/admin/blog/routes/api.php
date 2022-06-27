<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\siteInfoController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/getVisitorDetails", [VisitorController::class, "getVisitorDetails"]);

Route::post("/postContactDetails", [ContactController::class, "postContactDetails"]);

Route::get("/sendSiteInfo", [siteInfoController::class, "sendSiteInfo"]);

Route::get("/sendCategoryDetails", [CategoryDetailsController::class, "sendCategoryDetails"]);

Route::get("/ProductListByRemark/{remark}", [ProductListController::class, "ProductListByRemark"]);

Route::get("/ProductListByCategory/{Category}", [ProductListController::class, "ProductListByCategory"]);


Route::get("/ProductListBySubCategory/{Category}/{SubCategory}", [ProductListController::class, "ProductListBySubCategory"]);
