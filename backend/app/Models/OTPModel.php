<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OTPModel extends Model
{
      public $table='notification';
    public $primaryKey='id';
    protected $fillable = ['mobile', 'otp', 'created_timestamp', 'created_date', 'created_time'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
