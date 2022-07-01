<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings_Model extends Model
{
    public $table='settings';
    public $primaryKey='id';
    protected $fillable = ['ssl_wireless_sms_api_token', 'ssl_wireless_sms_sid', 'ssl_wireless_sms_domain'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
