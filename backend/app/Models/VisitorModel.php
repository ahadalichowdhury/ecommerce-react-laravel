<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitorModel extends Model
{
    public $table='Visitor';
    public $primaryKey='id';
    protected $fillable = ['ip_address', 'visit_time'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
