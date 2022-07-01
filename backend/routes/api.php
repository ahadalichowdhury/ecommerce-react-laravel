<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\siteInfoController;
use App\Http\Controllers\sliderController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\productDetailsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/getVisitorDetails", [VisitorController::class, "getVisitorDetails"]);

Route::post("/postContactDetails", [ContactController::class, "postContactDetails"]);

Route::get("/sendSiteInfo", [siteInfoController::class, "sendSiteInfo"]);

Route::get("/sendCategoryDetails", [CategoryDetailsController::class, "sendCategoryDetails"]);

Route::get("/ProductListByRemark/{remark}", [ProductListController::class, "ProductListByRemark"]);

Route::get("/ProductListByCategory/{Category}", [ProductListController::class, "ProductListByCategory"]);


Route::get("/ProductListBySubCategory/{Category}/{SubCategory}", [ProductListController::class, "ProductListBySubCategory"]);

Route::get("/sendSliderInfo", [sliderController::class, "sendSliderInfo"]);


Route::get("/productDetails/{code}", [productDetailsController::class, "productDetails"]);

Route::get("/notificationHistory", [NotificationController::class, "notificationHistory"]);


Route::get("/ProductBySearch/{key}", [ProductListController::class, "ProductBySearch"]);


Route::get("/CreateOTP/{mobile}", [LoginController::class, "CreateOTP"]);

Route::post("/OtpVerification", [LoginController::class, "OtpVerification"]);