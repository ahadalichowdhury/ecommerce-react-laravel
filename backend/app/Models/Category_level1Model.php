<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category_level1Model extends Model
{
    public $table='category_level1';
    public $primaryKey='id';
    protected $fillable = ['cat1_name', 'cat1_image'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
