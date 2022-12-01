<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Khachhang extends Model
{
    use HasFactory;

    protected $fillable = [
        'hovaten',
        'email',
        'password',
        'sodienthoai',
        'gioitinh',
        'ngaysinh',
    ];

    protected $hidden = [
        'password',
    ];
}
