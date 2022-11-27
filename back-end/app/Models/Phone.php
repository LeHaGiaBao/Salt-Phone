<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    use HasFactory;

    protected $fillable = [
        'tendienthoai',
        'hangdienthoai',
        'hinhanh',
        'giatien',
        'manhinh',
        'camerasau',
        'cameratruoc',
        'cpu',
        'hedieuhanh',
        'ram',
        'bonho',
        'pin',
        'soluong',
    ];
}
