<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Recentquotes extends Model
{
    //
    protected $table = 'recent_quotes';
    public function getdata()
    {
        $id = isset(Auth::user()->id) ? Auth::user()->id : 0;
        $data=Recentquotes::where('machine_id','=',request()->getClientIp())->orWhere('user_id','=',$id)->orderBy('quote_date', 'desc')->groupBy('ticker')->limit(7)->get();
        return $data;
    }
}
