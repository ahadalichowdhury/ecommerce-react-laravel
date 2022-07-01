<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificationModel extends Model
{
     public $table='notification';
    public $primaryKey='id';
    protected $fillable = ['title', 'msg', 'message', 'date'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
