<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class slidermodel extends Model
{
     public $table='slider';
    public $primaryKey='id';
    protected $fillable = ['text_color', 'bg_color', 'image', 'title', 'sub_title', 'product_code'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
