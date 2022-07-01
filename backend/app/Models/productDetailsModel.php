<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class productDetailsModel extends Model
{
     public $table='product_details';
    public $primaryKey='id';
    protected $fillable = ['product_code', 'img1', 'img2img3', 'img3', 'img4address', 'address', 'des', 'color', 'size', 'details'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
