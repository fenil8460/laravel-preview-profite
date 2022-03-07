<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientProtfolio extends Model
{
    //
    protected $table = 'client_portfolio';

    public function getData(){
     $data=ClientProtfolio::get();
     return $data;
    }

    public function getlimitData(){
        $data=ClientProtfolio::limit(7)->get();
        return $data;
       }
}