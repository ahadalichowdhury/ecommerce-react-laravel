<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    public $table='contact';
    public $primaryKey='id';
    protected $fillable = ['name', 'mobile', 'message', 'contact_time', 'contact_date'];
    public $incrementing=true;
    public $keyType='int';
    public $timestamps=false;
}
