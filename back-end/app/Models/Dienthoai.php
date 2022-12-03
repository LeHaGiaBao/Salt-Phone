<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dienthoai extends Model
{
    use HasFactory;

    protected $fillable = [
        'tendienthoai',
        'hangdienthoai',
        'hinhanh',
        'giadienthoai',
        'manhinh',
        'camerasau',
        'cameratruoc',
        'cpu',
        'hedieuhanh',
        'ram',
        'bonho',
        'dungluongpin',
        'soluong',
    ];
}
