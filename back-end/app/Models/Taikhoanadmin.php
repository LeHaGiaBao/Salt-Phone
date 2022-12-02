<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Taikhoanadmin extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'matkhau',
    ];

    protected $hidden = [
        'matkhau',
    ];
}
