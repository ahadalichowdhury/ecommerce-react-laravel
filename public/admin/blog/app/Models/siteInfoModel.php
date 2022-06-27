<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class siteInfoModel extends Model
{
    public $table='siteinfo';
    public $primaryKey='id';
    protected $fillable = ['about', 'terms', 'policy', 'purchase_guide', 'about_company', 'address', 'android_app_link', 'ios_app_link', 'facebook_link', 'twitter_link', 'instagram_link', 'delivery_notice'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
