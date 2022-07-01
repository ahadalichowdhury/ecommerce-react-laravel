<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category_level2Model extends Model
{
    public $table='category_level2';
    public $primaryKey='id';
    protected $fillable = ['cat1_name', 'cat1_image', 'cat2_name'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
