<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductListModel extends Model
{
    public $table='productlist';
    public $primaryKey='id';
    protected $fillable = ['title', 'price', 'special_price', 'image', 'category', 'subcategory', 'remark', 'brand', 'star', 'product_code'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
