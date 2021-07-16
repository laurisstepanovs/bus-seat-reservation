<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seats extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'status',
        'bus_nuber',
        'reservation_name'
    ];
}
