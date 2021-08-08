<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use Illuminate\Support\Facades\DB;

class SeatController extends BaseController
{
    public function getSeats($busNumber){
        $seats = DB::table("seats")
                ->where('bus_nuber', $busNumber)
                ->get();

        return $seats;
    }

    public function updateSeatStatus($busNumber, $seatNumber, $reservationName){
        $response = DB::table('seats')
            ->where('bus_nuber', $busNumber)
            ->where('number', $seatNumber)
            ->update(['status' => "reserved", 'name_of_reservator' => $reservationName]);

        return $response;
    }
}
