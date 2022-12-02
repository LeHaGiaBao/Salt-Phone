<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donhang extends Model
{
    use HasFactory;

    protected $fillable = [
        'tongsotien',
        'ngaymuahang',
        'diachigiaohang',
        'trangthaidonhang',
        'makhachhang',
    ];
}
