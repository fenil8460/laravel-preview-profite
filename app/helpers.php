<?php

use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use App\Models\Recentquotes;
use App\Models\Trends;
use App\Models\ClientProtfolio;

  //gainer api
 function gainer()
 {
 	 $client=new \GuzzleHttp\Client();
 	$gainer_request = $client->get('https://financialmodelingprep.com/api/v3/gainers?limit=5&apikey='.env("API_KEY").'');
        $gainer_responce = $gainer_request->getBody();
    $gainer_json = json_decode($gainer_responce);
    return $gainer_json;
 }
 //loser api
 function loser()
 {
 	 $client=new \GuzzleHttp\Client();
 	 $loser_request = $client->get('https://financialmodelingprep.com/api/v3/losers?apikey='.env("API_KEY").'');
     $loser_responce = $loser_request->getBody();
     $loser_json = json_decode($loser_responce);
     return $loser_json;
 }

//active api
 function active()
 {
 	 $client=new \GuzzleHttp\Client();
 	 $active_request = $client->get('https://financialmodelingprep.com/api/v3/actives?apikey='.env("API_KEY").'');
     $active_responce = $active_request->getBody();
     $active_json = json_decode($active_responce);
     return $active_json;
 }

//Commodites 
 function commodities()
 {
 	 $client=new \GuzzleHttp\Client();
 	 $commodities_request = $client->get('https://financialmodelingprep.com/api/v3/quotes/commodity?apikey='.env("API_KEY").'');
        $commodities_responce = $commodities_request->getBody();
        $commodities_json = json_decode($commodities_responce);
        $datas=[];
        foreach ($commodities_json as $key=>$data) 
        {
              if($data->symbol=="GCUSD")
              {$datas[0] = $commodities_json[$key];}
              elseif($data->symbol=="SIUSD")
              {$datas[1] = $commodities_json[$key];}
              elseif($data->symbol=="HGUSD")
              { $datas[2] = $commodities_json[$key];}
              elseif($data->symbol=="BZUSD")
              { $datas[3] = $commodities_json[$key];}
              elseif($data->symbol=="CLUSD")
              { $datas[4] = $commodities_json[$key];}
              elseif($data->symbol=="NGUSD")
              { $datas[5] = $commodities_json[$key];}
              elseif($data->symbol=="SUSX")
              { $datas[6] = $commodities_json[$key];}
            elseif($data->symbol=="CTUSX")
              { $datas[7] = $commodities_json[$key];} 
        }
        ksort($datas);
     return $datas;
 }

 //Crypto 
 function crypto()
 {
 	 $client=new \GuzzleHttp\Client();
 	  $crypto_request = $client->get('https://financialmodelingprep.com/api/v3/quotes/crypto?apikey='.env("API_KEY").'');
        $crypto_responce = $crypto_request->getBody();
        $crypto_json = json_decode($crypto_responce);
    $datas=[];
        foreach ($crypto_json as $key=>$data) 
        {
              if($data->symbol=="BTGUSD")
              {$datas[0] = $crypto_json[$key];}
              elseif($data->symbol=="BTCUSD")
              {$datas[1] = $crypto_json[$key];}
              elseif($data->symbol=="ETCUSD")
              { $datas[2] = $crypto_json[$key];}
              elseif($data->symbol=="XRPUSD")
              { $datas[3] = $crypto_json[$key];}
              elseif($data->symbol=="LTCUSD")
              { $datas[4] = $crypto_json[$key];}
              elseif($data->symbol=="LINKUSD")
              { $datas[5] = $crypto_json[$key];}
              elseif($data->symbol=="ADAUSD")
              { $datas[6] = $crypto_json[$key];}
            elseif($data->symbol=="DOGEUSD")
              { $datas[7] = $crypto_json[$key];} 
        }
        ksort($datas);
     return $datas;
 }

//Major Index
 function major_index()
 {
 	 $client=new \GuzzleHttp\Client();
 	   $index_request = $client->get('https://financialmodelingprep.com/api/v3/quotes/index?apikey='.env("API_KEY").'');
        $index_responce = $index_request->getBody();
        $index_json = json_decode($index_responce);
       $major_indexs = array("^GSPC"=>"S&P 500","^IXIC"=>"NASDAQ COMPOSITE","^DJI"=>"DOW JONES INDUSTRIAL","^RUT"=>"RUSSEL 2000","^NDX"=>"NASDAQ 100","^VIX"=>"CBOE Volatility Index","^GSPTSE"=>"S&P/TSX Composite index");
       $datas=[];
        foreach ($index_json as $key=>$data) 
        {
            if(array_key_exists($data->symbol,$major_indexs))
            {

              $index_json[$key]->name=$major_indexs[$data->symbol];
              if($data->symbol=="^GSPC")
              {$datas[0] = $index_json[$key];}
              elseif($data->symbol=="^IXIC")
              {$datas[1] = $index_json[$key];}
              elseif($data->symbol=="^DJI")
              { $datas[2] = $index_json[$key];}
              elseif($data->symbol=="^RUT")
              { $datas[3] = $index_json[$key];}
              elseif($data->symbol=="^NDX")
              { $datas[4] = $index_json[$key];}
              elseif($data->symbol=="^VIX")
              { $datas[5] = $index_json[$key];}
              elseif($data->symbol=="^GSPTSE")
              { $datas[6] = $index_json[$key];}
            }
            else{unset($index_json[$key]);}  
        }
        ksort($datas);
     return $datas;
 }
 
 //recent quotes
 function recent_quetoes(){
      $client=new \GuzzleHttp\Client();
      $recentData = new Recentquotes();
      $recent_quotes = $recentData->getData();
      $r_quotes = '';
      $r_data = [];
      foreach($recent_quotes as $quotes){
          if($quotes->ticker != null){
              $r_quotes .= $quotes->ticker.',';
          }else{
              $r_quotes = '';
          }
          $r_data[] = $quotes->ticker;
      }
      $quotes_index = [];
      if( $r_quotes != ''){
      $get_recent_quotes =  $client->get('https://financialmodelingprep.com/api/v3/quote/'.$r_quotes.'?apikey='.env("API_KEY").'');
      $response3 = $get_recent_quotes->getBody();
      $a = json_decode($response3, true);
     
      foreach($a as $data){
          if($r_data[0] == $data['symbol']){
              $quotes_index[0] = $data;
          }else if($r_data[1] == $data['symbol']){
              $quotes_index[1] = $data;
          }else if($r_data[2] == $data['symbol']){
              $quotes_index[2] = $data;
          }else if($r_data[3] == $data['symbol']){
              $quotes_index[3] = $data;
          }else if($r_data[4] == $data['symbol']){
              $quotes_index[4] = $data;
          }else if($r_data[5] == $data['symbol']){
              $quotes_index[5] = $data;
          }else if($r_data[6] == $data['symbol']){
              $quotes_index[6] = $data;
          } 
      }
      ksort($quotes_index);
    }
    return $quotes_index;
     
 }

 function stockTrends($limit=null){
     if($limit != null){
        $bearish_trend = Trends::where('display_flag','=',1)
        ->where('trend_type','Bearish')
        ->get();
        $bullish_trend = Trends::where('display_flag','=',1)
        ->where('trend_type','Bullish')
        ->get();
     }else{
        $bearish_trend = Trends::where('display_flag','=',1)
                        ->where('trend_type','Bearish')
                        ->limit(8)->get();
        $bullish_trend = Trends::where('display_flag','=',1)
                        ->where('trend_type','Bullish')
                        ->limit(8)->get();
     }
     $trendcount = Trends::count();
     $Bullish = '';
     $Bearish = '';
     if($trendcount > 0){
        foreach($bearish_trend as $data){
            $Bearish .= $data->ticker.',';
        }
        foreach($bullish_trend as $data){
           $Bullish .= $data->ticker.',';
        }
     $client = new \GuzzleHttp\Client();
     $Bearish_data = $client->get('https://financialmodelingprep.com/api/v3/quote/' . $Bearish . '?apikey='.env("API_KEY").'');
     $Bullish_data = $client->get('https://financialmodelingprep.com/api/v3/quote/' . $Bullish . '?apikey='.env("API_KEY").'');
     $Bearish_response = $Bearish_data->getBody();
     $Bullish_data_response = $Bullish_data->getBody();
     $json = json_decode($Bearish_response, true);
     $json1 = json_decode($Bullish_data_response, true);
     $data = [
        "Bullish" => $json1,
        "Bearish" => $json,
     ];
     
     }else{
        $data = [
            "Bullish" => [],
            "Bearish" => [],
         ];
        }
        return $data;
    }

  //recent quotes
  function userPortfolio($limit=null){
    $client=new \GuzzleHttp\Client();
    $clientportfolio = new ClientProtfolio();
    if($limit != null){
    $portfoli = $clientportfolio->getData();
    }else{
     $portfoli = $clientportfolio->getlimitData();
    }
    $r_quotes = '';
    $r_data = [];
    foreach($portfoli as $data){
        if($data->ticker != null){
            $r_quotes .= $data->ticker.',';
        }else{
            $r_quotes = '';
        }
        $r_data[] = $data->ticker;
    }
    // $portfolio_index = [];
    if( $r_quotes != ''){
    $get_recent_quotes =  $client->get('https://financialmodelingprep.com/api/v3/quote/'.$r_quotes.'?apikey='.env("API_KEY").'');
    $response3 = $get_recent_quotes->getBody();
    $a = json_decode($response3, true);
   
    // foreach($a as $data){
    //     if($r_data[0] == $data['symbol']){
    //         $portfolio_index[0] = $data;
    //     }else if($r_data[1] == $data['symbol']){
    //         $portfolio_index[1] = $data;
    //     }else if($r_data[2] == $data['symbol']){
    //         $portfolio_index[2] = $data;
    //     }else if($r_data[3] == $data['symbol']){
    //         $portfolio_index[3] = $data;
    //     }else if($r_data[4] == $data['symbol']){
    //         $portfolio_index[4] = $data;
    //     }else if($r_data[5] == $data['symbol']){
    //         $portfolio_index[5] = $data;
    //     }else if($r_data[6] == $data['symbol']){
    //         $portfolio_index[6] = $data;
    //     } 
    // }
    // ksort($portfolio_index);
  }
  return $a;
   
}


