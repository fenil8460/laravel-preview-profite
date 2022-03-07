<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\StockModels;
use App\Models\Leads;
use App\Models\Recentquotes;
use App\Models\ClientProtfolio;
use Illuminate\Support\Facades\Auth;
use App\Models\Newsletter;
use App\Models\UsefulLink;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Carbon\Carbon;
use App\Mail\SubMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Route;

date_default_timezone_set('Canada/Eastern');
class StockController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['auth', 'verified']);
        // $this->middleware('verified');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function index()
    {
        /******************************
         ********* home page*****************
         ***********************************/
        
        $data = [];
        $tadata = StockModels::where('status', 'unhide')->get();

        $client = new \GuzzleHttp\Client();
        //news
        $request = $client->get('https://financialmodelingprep.com/api/v3/stock_news?tickers=SPY,DIA,TSLA,AAPL,FB,GOOG,AMZN,NFLX,XOM,MSFT,GE,CAT,BRK-B,BA&limit=70&apikey='.env("API_KEY").'');
        $response = $request->getBody();
        $json = json_decode($response, true);
        $news = [];
        foreach ($json as $key=>$data) {
            # code...,
            if(!(in_array($data['symbol'],$news)))
            {
                array_push($news,$data['symbol']);
            }
            else{unset($json[$key]);}  
        }
        $json = array_slice($json, 0, 11);
        //gainer api
        $gainer_json = gainer();
        $gainer_json = array_slice($gainer_json, 0, 10);

        //loser api
        $loser_json = loser();
        $loser_json = array_slice($loser_json, 0, 10);
        
        //active api
        $active_json = active();
        $active_json = array_slice($active_json, 0, 10);

        //Commodites 
      
        $commodities_json = commodities();

        //Crypto 
        $crypto_json = crypto();

        //Major Index 
        $index_json = major_index();

        //Trends
        $trends = stockTrends();

        //view portfolio
        $user_id = isset(Auth::user()->id) ? Auth::user()->id : null;
        $client_data = userPortfolio();
        

        //recent quetos
        $r_quotes = recent_quetoes();
        $data = array(
            'tadata'=>$tadata,
            'json'=>$json,
            'gainer'=>$gainer_json,
            'loser'=>$loser_json,
            'active'=>$active_json,
            'commodities'=>$commodities_json,
            'crypto'=>$crypto_json,
            'major_index'=>$index_json,
            'client_data' => $client_data,
            'user_id' => $user_id,
            'r_quotes'=>$r_quotes,
            'trends'=>$trends
        );

        return view('stock180.index',$data);
    }
    //refresh stock every 5 second
    public function getstock()
    {
         $datas = [];
        //gainer api
        $gainer_json = gainer();
        $gainer_json = array_slice($gainer_json, 0, 10);

        //loser api
        $loser_json = loser();
        $loser_json = array_slice($loser_json, 0, 10);
        
        //active api
        $active_json = active();
        $active_json = array_slice($active_json, 0, 10);

        //Commodites 
        $commodities_json = commodities();

        //Crypto 
        $crypto_json = crypto();

        //Major Index 
        $index_json = major_index();
        $gainers="";$loser="";$active="";$commodites="";$crypto="";$m_index="";$r_quotes="";$bearish="";$bullish="";
        $client_portfolio="";

        //recent quetos
        $r_quote = recent_quetoes();
        
         //Trends
         $trends = stockTrends();

         //client_portfoli
         $portfoli = userPortfolio();
        foreach($gainer_json as $data)
        {
            $gainers.='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data->ticker.'">'.$data->ticker.'</a><span class="tooltiptext">'.$data->companyName.'</span></td>
                    <td class="iyjjgb" style="color:green;">'.number_format($data->price,2).'</td>
                    <td class="JgXcPd" style="color:green;">'.number_format($data->changes,2).'</td>
                    <td class="iyjjgb" style="color:green;">'.number_format(str_replace(array("(",")","%"),"",$data->changesPercentage),2).'</td>
            </tr>';
        }
        foreach($loser_json as $data)
        {
            $loser.='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data->ticker.'">'.$data->ticker.'</a><span class="tooltiptext">'.$data->companyName.'</span></td>
                    <td class="iyjjgb" style="color:red;">'.number_format($data->price,2).'</td>
                    <td class="JgXcPd" style="color:red;">'.number_format($data->changes,2).'</td>
                    <td class="iyjjgb" style="color:red;">'.number_format(str_replace(array("(",")","%"),"",$data->changesPercentage),2).'</td>
            </tr>';
        }
        foreach($active_json as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data->changesPercentage),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
                $active.='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data->ticker.'">'.$data->ticker.'</a><span class="tooltiptext">'.$data->companyName.'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data->price,2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data->changes,2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$chaneg.'</td>
                    </tr>';
        }
         foreach($commodities_json as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data->changesPercentage),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
             if(strlen($data->name) < 13){
                $name = $data->name;
            }else{
                $name = substr($data->name,0,10).'..';
            }
                $commodites.='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="#">'.$name.'</a><span class="tooltiptext">'.$data->name.'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';width:70px;">'.number_format($data->price,2).'</td>
                    <td class="JgXcPd" style="color:'.$color.';width:50px;">'.number_format($data->change,2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';width:50px;">'.$chaneg.'</td>
            </tr>';
        }

        foreach($crypto_json as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data->changesPercentage),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
             if(strlen($data->name) < 13){
                $name = $data->name;
            }else{
                $name = substr($data->name,0,10).'..';
            }
                $crypto .='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="#">'.$name.'</a><span class="tooltiptext">'.$data->name.'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';width:70px;">'.number_format($data->price,2).'</td>
                    <td class="JgXcPd" style="color:'.$color.';width:50px;">'.number_format($data->change,2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';width:50px;">'.$chaneg.'</td>
            </tr>';
        }

        foreach($index_json as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data->changesPercentage),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
             if(strlen($data->name) < 13){
                $name = $data->name;
            }else{
                $name = substr($data->name,0,10).'..';
            }
                $m_index .='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="#">'.$name.'</a><span class="tooltiptext">'.$data->name.'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';width:70px;">'.number_format($data->price,2).'</td>
                    <td class="JgXcPd" style="color:'.$color.';width:50px;">'.number_format($data->change,2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';width:50px;">'.$chaneg.'</td>
            </tr>';
        }
        foreach($r_quote as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data['changesPercentage']),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
                $r_quotes.='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$chaneg.'</td>
                    </tr>';
        }
        foreach($portfoli as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data['changesPercentage']),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
                $client_portfolio.='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$chaneg.'</td>
                    </tr>';
        }
        foreach($trends['Bearish'] as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data['changesPercentage']),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
                $bearish .='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$chaneg.'</td>
                    </tr>';
        }
        foreach($trends['Bullish'] as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data['changesPercentage']),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
                $bullish .='<tr>
                    <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$chaneg.'</td>
                    </tr>';
        }
        
         $datas = array
         (
             'gainer'=>$gainers,
             'loser'=>$loser,
             'active'=>$active,
             'commodites'=>$commodites,
             'crypto'=>$crypto,
             'm_index'=>$m_index,
             'r_quotes'=>$r_quotes,
             'bearish'=>$bearish,
             'bullish'=>$bullish,
             'portolio'=>$client_portfolio
         );
        echo json_encode($datas);
    }

    //view client portfolio
    public function viewClientPortfolio(){
        $client_data = userPortfolio(1);
        $client_portfolio = '';
        if(isset($_GET['ajax'])){
            foreach($client_data as $data)
        {
            $chaneg = round(preg_replace('/^[1-9]\d*$/','',$data['changesPercentage']),2);
            if($chaneg > 0){
                $color = "green";
            }elseif($chaneg == 0){
                $color = "black";
            }else{
                $color = "red";
            }
                $client_portfolio.='<tr>
                    <td class="JgXcPd"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$data['name'].'</td> 
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$chaneg.'</td>
                    <td><a href="'.route('delete_protfolio',['ticker'=>$data['symbol']]).'">Delete</a></td></tr>';
        } 
        $datas = array('portolio'=>$client_portfolio);
       echo json_encode($datas);
           
        }else{
            
            return view('stock180.client_portfolio',['client_data'=>$client_data]);
        }
    }

    public function delete_protfolio($ticker){
        ClientProtfolio::where('user_id', Auth::user()->id)->where('ticker',$ticker)->delete();
        return redirect()->back();
    }

    //add client protfolio
    public function client_protfolio($ticker)
    {
        $u_ticker = strtoupper($ticker);
        $id = Auth::user()->id;
        $data = ClientProtfolio::where('user_id',$id)->where('ticker',$u_ticker)->get();
        if(count($data) == 0){
            ClientProtfolio::insert([
                'user_id'=>$id,
                'ticker'=>$u_ticker
            ]);
            $message = 1;
           
        }else{
            $message = 0;
            
        }
        return $message;

    }

    //marketmovers and get updated every 5 second
    public function marketMovers($mover)
    {

         $datas = [];  
        //gainer api
        $trends = stockTrends(1);
        $bearish = $trends['Bearish'];
        $bullish = $trends['Bullish'];
        $gainer_json = gainer();
        $loser_json = loser();
        $active_json = active();
        
        // $bullish = 
        $main_title="";
        $sub1_title="";
        $sub2_title="";
        $sub3_title="";
        $sub4_title="";
        $link1_title="";
        $link2_title="";
        $link3_title="";
        $link4_title="";
        //recent quetos
        $r_quote = recent_quetoes();
        if($mover=="gainers" || $mover=="losers" ||$mover=="active")
        {
            $sub3_json = array_slice($bearish,0,8);
            $sub4_json = array_slice($bullish,0,8);
            $sub3_title="BEARISH TREND";
            $sub4_title="BULLISH TREND";
            $link3_title="bearish";
            $link4_title="bullish";
        }
        if($mover=="gainers")
        {
            $main_json = array_slice($gainer_json, 0, 30);
            $sub1_json =array_slice($loser_json, 0, 10);
            $sub2_json =array_slice($active_json, 0, 10);
            $main_title="TOP GAINERS";
            $sub1_title="TOP LOSERS";
            $sub2_title="MOST ACTIVE";
            $link1_title="losers";
            $link2_title="active";   
        }
        else if($mover=="losers")
        {
            $main_json = array_slice($loser_json, 0, 30);
            $sub1_json =array_slice($gainer_json, 0, 10);
            $sub2_json =array_slice($active_json, 0, 10);
            $main_title="TOP LOSERS";
            $sub1_title="TOP GAINERS";
            $sub2_title="MOST ACTIVE";
            $link1_title="gainers";
            $link2_title="active";
        }
        else if($mover=="active"){

            $main_json = array_slice($active_json, 0, 30);
            $sub1_json =array_slice($gainer_json, 0, 10);
            $sub2_json =array_slice($loser_json, 0, 10);
            $main_title="MOST ACTIVE";
            $sub1_title="TOP GAINERS";
            $sub2_title="TOP LOSERS";
            $link1_title="gainers";
            $link2_title="losers";
        }else if($mover == "bearish"){
            $main_json = array_slice($bearish, 0, 30);
            $sub1_json =array_slice($gainer_json, 0, 10);
            $sub2_json =array_slice($loser_json, 0, 10);
            $sub3_json =array_slice($active_json, 0, 10);
            $sub4_json =array_slice($bullish, 0, 8);
            $main_title="BEARISH TREND";
            $sub1_title="TOP GAINERS";
            $sub2_title="TOP LOSERS";
            $sub3_title="MOST ACTIVE";
            $sub4_title="BULLISH TREND";
            $link1_title="gainers";
            $link2_title="losers";
            $link3_title="active";
            $link4_title="bullish";

        }else if($mover == "bullish"){ 
            $main_json = array_slice($bullish, 0, 30);
            $sub1_json =array_slice($gainer_json, 0, 10);
            $sub2_json =array_slice($loser_json, 0, 10);
            $sub3_json =array_slice($active_json, 0, 10);
            $sub4_json =array_slice($bearish, 0, 8);
            $main_title="BULLISH TREND";
            $sub1_title="TOP GAINERS";
            $sub2_title="TOP LOSERS";
            $sub3_title="MOST ACTIVE";
            $sub4_title="BEARISH TREND";
            $link1_title="gainers";
            $link2_title="losers";
            $link3_title="active";
            $link4_title="bearish";

        }
         $datas = array
         (
             'main'=>$main_json,
             'sub1'=>$sub1_json,
             'sub2'=>$sub2_json,
             'sub3'=>$sub3_json,
             'sub4'=>$sub4_json,
             'link1'=>$link1_title,
             'link2'=>$link2_title,
             'link3'=>$link3_title,
             'link4'=>$link4_title,
             'main_title'=>$main_title,
             'sub1_title'=>$sub1_title,
             'sub2_title'=>$sub2_title,
             'sub3_title'=>$sub3_title,
             'sub4_title'=>$sub4_title,
             'r_quotes'=>$r_quote
         );
        //  dd($datas['sub3']->changesPercentage);
         if(!isset($_REQUEST['flag']) && ($mover != "bullish" && $mover != "bearish"))
         {return view('stock180.market_mover',['datas'=>$datas]);}
         else if(!isset($_REQUEST['flag']) &&($mover == "bullish" || $mover == "bearish"))
         {return view('stock180.trending_stock',['datas'=>$datas]);}
         else if(isset($_REQUEST['flag']) && ($mover != "bullish" && $mover != "bearish")){
            $main="";$sub1="";$sub2="";$sub3="";$sub4="";$r_quotes="";
            foreach($main_json as $data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data->changesPercentage);
                if($chaneg > 0){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                    $main.='<tr>
                        <td class="iyjjgb""><a href="'.URL::to("api/chart?ticker=").''.$data->ticker.'">'.$data->ticker.'</a></td>
                        <td class="iyjjgb" style="color:'.$color.';">'.$data->companyName.'</td> 
                        <td class="iyjjgb" style="color:'.$color.';">'.number_format($data->price,2).'</td> 
                        <td class="JgXcPd" style="color:'.$color.';">'.number_format($data->changes,2).'</td>
                        <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                        </tr>';
            }
            foreach($sub1_json as $index=>$data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data->changesPercentage);
                $chaneg1 = str_replace(array('(',')','+','%'),"",$sub2_json[$index]->changesPercentage);
                if($chaneg > 0 ){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                if($chaneg1 > 0 ){
                    $color1 = "green";
                }elseif($chaneg1 == 0){
                    $color1 = "black";
                }else{
                    $color1 = "red";
                }
                    $sub1.='<tr>
                        <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data->ticker.'">'.$data->ticker.'</a><span class="tooltiptext">'.$data->companyName.'</span></td>
                        <td class="iyjjgb" style="color:'.$color.';">'.number_format($data->price,2).'</td> 
                        <td class="JgXcPd" style="color:'.$color.';">'.number_format($data->changes,2).'</td>
                        <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                        </tr>';
                    $sub2.='<tr>
                        <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$sub2_json[$index]->ticker.'">'.$sub2_json[$index]->ticker.'</a><span class="tooltiptext">'.$sub2_json[$index]->companyName.'</span></td>
                        <td class="iyjjgb" style="color:'.$color1.';">'.number_format($sub2_json[$index]->price,2).'</td> 
                        <td class="JgXcPd" style="color:'.$color1.';">'.number_format($sub2_json[$index]->changes,2).'</td>
                        <td class="iyjjgb" style="color:'.$color1.';">'.number_format($chaneg1,2,'.', '').'</td>
                        </tr>';
            }
            foreach($sub3_json as $index=>$data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
                $chaneg1 = str_replace(array('(',')','+','%'),"",$sub4_json[$index]['changesPercentage']);
                if($chaneg > 0 ){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                if($chaneg1 > 0 ){
                    $color1 = "green";
                }elseif($chaneg1 == 0){
                    $color1 = "black";
                }else{
                    $color1 = "red";
                }
                $sub3.= '<tr>
                <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                </tr>';
                $sub4.= '<tr>
                <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$sub4_json[$index]['symbol'].'">'.$sub4_json[$index]['symbol'].'</a><span class="tooltiptext">'.$sub4_json[$index]['name'].'</span></td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($sub4_json[$index]['price'],2).'</td> 
                <td class="JgXcPd" style="color:'.$color.';">'.number_format($sub4_json[$index]['change'],2).'</td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                </tr>';
            }
            foreach($r_quote as $data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
                if($chaneg > 0 ){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                $r_quotes.= '<tr>
                <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                </tr>';
            }
            $data = array
            (
                 'main'=>$main,
                 'sub1'=>$sub1,
                 'sub2'=>$sub2,
                 'sub3'=>$sub3,
                 'sub4'=>$sub4,
                 'r_quotes'=>$r_quotes,
            );
            echo json_encode($data);
        }
        else if(isset($_REQUEST['flag']) && ($mover == "bullish" || $mover == "bearish")){
            $main="";$sub1="";$sub2="";$sub3="";$sub4="";$r_quotes="";
            foreach($main_json as $data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
                if($chaneg > 0){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                
                    $main.='<tr>
                    <td class="JgXcPd"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a></td>
                    <td class="iyjjgb" style="color:'.$color.';">'.$data['name'].'</td> 
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                    <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                    <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                    </tr>';
            }
            foreach($sub1_json as $index=>$data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data->changesPercentage);
                $chaneg1 = str_replace(array('(',')','+','%'),"",$sub2_json[$index]->changesPercentage);
                $chaneg2 = str_replace(array('(',')','+','%'),"",$sub3_json[$index]->changesPercentage);
                if($chaneg > 0 ){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }

                if($chaneg1 > 0 ){
                    $color1 = "green";
                }elseif($chaneg1 == 0){
                    $color1 = "black";
                }else{
                    $color1 = "red";
                }
            
                if($chaneg2 > 0 ){
                    $color2 = "green";
                }elseif($chaneg2 == 0){
                    $color2 = "black";
                }else{
                    $color2 = "red";
                }
                    $sub1.='<tr>
                        <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data->ticker.'">'.$data->ticker.'</a><span class="tooltiptext">'.$data->companyName.'</span></td>
                        <td class="iyjjgb" style="color:'.$color.';">'.number_format($data->price,2).'</td> 
                        <td class="JgXcPd" style="color:'.$color.';">'.number_format($data->changes,2).'</td>
                        <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                        </tr>';
                    $sub2.='<tr>
                        <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$sub2_json[$index]->ticker.'">'.$sub2_json[$index]->ticker.'</a><span class="tooltiptext">'.$sub2_json[$index]->companyName.'</span></td>
                        <td class="iyjjgb" style="color:'.$color1.';">'.number_format($sub2_json[$index]->price,2).'</td> 
                        <td class="JgXcPd" style="color:'.$color1.';">'.number_format($sub2_json[$index]->changes,2).'</td>
                        <td class="iyjjgb" style="color:'.$color1.';">'.number_format($chaneg1,2,'.', '').'</td>
                        </tr>';
                    $sub3.='<tr>
                        <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$sub3_json[$index]->ticker.'">'.$sub2_json[$index]->ticker.'</a><span class="tooltiptext">'.$sub2_json[$index]->companyName.'</span></td>
                        <td class="iyjjgb" style="color:'.$color2.';">'.number_format($sub3_json[$index]->price,2).'</td> 
                        <td class="JgXcPd" style="color:'.$color2.';">'.number_format($sub3_json[$index]->changes,2).'</td>
                        <td class="iyjjgb" style="color:'.$color2.';">'.number_format($chaneg2,2,'.', '').'</td>
                        </tr>';
                    
            }
            foreach($sub4_json as $data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
                if($chaneg > 0 ){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                $sub4.= '<tr>
                <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                </tr>';
            }
            foreach($r_quote as $data)
            {
                $chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
                if($chaneg > 0 ){
                    $color = "green";
                }elseif($chaneg == 0){
                    $color = "black";
                }else{
                    $color = "red";
                }
                $r_quotes.= '<tr>
                <td class="JgXcPd" id="tooltip"><a href="'.URL::to("api/chart?ticker=").''.$data['symbol'].'">'.$data['symbol'].'</a><span class="tooltiptext">'.$data['name'].'</span></td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($data['price'],2).'</td> 
                <td class="JgXcPd" style="color:'.$color.';">'.number_format($data['change'],2).'</td>
                <td class="iyjjgb" style="color:'.$color.';">'.number_format($chaneg,2,'.', '').'</td>
                </tr>';
            }
            $data = array
            (
                 'main'=>$main,
                 'sub1'=>$sub1,
                 'sub2'=>$sub2,
                 'sub3'=>$sub3,
                 'sub4'=>$sub4,
                 'r_quotes'=>$r_quotes,
            );
            echo json_encode($data);
        }
         
    }
    
    public function api_search_result()
    {
        return view('stock180.api_search_result');
    }
    public function view_by_month(Request $request)
    {
        /******************************
         ********* View by month funtion*****************
         ***********************************/
        $posted_data = request()->all();

        $datepickerOne = $posted_data['datepickerOne'];
        $datepicker = $datepickerOne . '-01';
        $d = strtotime($datepicker);
        $curMonth = date('Y-m-d', $d);
        Session::put('datedata', $datepickerOne);

        //    dd($newformat);
        $final = strtotime("+1 month", strtotime($curMonth));
        $nextMonth = date('Y-m-d', $final);
        Session::put('nextmonth', $nextMonth);


        $tadata = StockModels::whereDate('OnDate', '>=', $datepicker)->where('status', '>=', 'unhide')->whereDate('OnDate', '<=', $nextMonth)->orderBy('ondate','DESC')->paginate(20);
        // dd($datepicker,$tadata);

        $data = [
            'from_date' => $datepickerOne,
            'tadata' => $tadata
        ];

        if (!$tadata->isEmpty()) {
            return view('stock180.tech_analysis', $data);
        } else {
            return view('stock180.tech_analysis', $data);
        }
    }

    public function refreshapicall($id,$Ticker,$Listed_at)
    {
        
        /*********************** get quote funtion on click*******************/
        // $Listed_at0 = 'TSX';
        $Listed_at1 = 'TSXV';
        $tadata = new StockModels();
        if (Session::get('datedata')) {
            $datedata = Session::get('datedata');
            $nextmonth = Session::get('nextmonth');
           
            if ($Listed_at  == $Listed_at1) 
            {
                
            } 
            else 
            {
                $client = new \GuzzleHttp\Client();
                $request = $client->get('https://financialmodelingprep.com/api/v3/quote/' . $Ticker . '?apikey='.env("API_KEY").'');
                $response = $request->getBody();
                $json = json_decode($response, true);
                if (isset($json[0]['price']) && isset($json[0]['previousClose'])) {
                    $CurrentPrice = $json[0]['price'];
                    $previous_close = $json[0]['previousClose'];
                    StockModels::where('Ticker', $Ticker)
                        ->update(['CurrentPrice' => $CurrentPrice, 'previous_close' => $previous_close]);
                        
                }
            } 
     
            $data = StockModels::select('*')->get();
            $json = json_decode($data, true);
            foreach ($json as $key => $value) {
                $id = $value['id'];
                $Action = $value['Action'];
                $SL_Exit =  $value['SL_Exit'];
                $ondate = $value['OnDate']; 
                $AtPrice = $value['AtPrice']; //buy price
                $Gain_Loss = $value['Gain_Loss'];
                $CurrentPrice = $value['CurrentPrice'];
                $glprice = $value['glprice'];
                if (strcmp(strtolower($Action),strtolower('Exit')) == 0) {
                    $Gain_Loss = 'Realised';
                    $numofshares = 1000 / $AtPrice;
                    $CurrentValue = $numofshares * $SL_Exit;
                    $glprice = $CurrentValue - 1000;    
                   
                } else {
                    $Gain_Loss = 'Unrealised';
                    $numofshares = 1000 / $AtPrice;
                    $CurrentValue = $numofshares * $CurrentPrice;
                    $glprice =  $CurrentValue - 1000;         // (this is to be displayed to the user in Gain/Loss $)
          
                }
               
                StockModels::where('id', $id)  // find your data by their id
                    // ->limit(1)  // optional - to ensure only one record is updated.
                    ->update(array('glprice' => $glprice,'Gain_Loss'=> $Gain_Loss, 'Action' => $Action));
            }

            $status = 'unhide';
            $data = StockModels::where('status', $status)->where('Ondate', '>', $datedata)->where('Ondate', '<', $nextmonth)->orderBy('ondate', 'DESC')->paginate(20);
            return view('stock180.tech_analysis', compact('data'));

            // ***********************************************************
            $nextmonth = Session::forget('nextmonth');
            $datedata = Session::forget('datedata');
        } 
        else 
        {
            if(strcmp(strtolower($Listed_at),strtolower($Listed_at1)) == 0)
            {
                // do nothing
                // dd('do nothing');
            } 
            else 
            {
                //    dd($Ticker, $Listed_at);
                $client = new \GuzzleHttp\Client();
                $request = $client->get('https://financialmodelingprep.com/api/v3/quote/' . $Ticker . '?apikey='.env("API_KEY").'');
                $response = $request->getBody();
                $json = json_decode($response, true);
                // dd($json);
                if (isset($json[0]['price']) && isset($json[0]['previousClose'])) {
                    $CurrentPrice = $json[0]['price'];
                    $previous_close = $json[0]['previousClose'];
                    // dd($previous_close);
                    StockModels::where('id', $id)
                        ->update(['CurrentPrice' => $CurrentPrice, 'previous_close' => $previous_close]);
                }
            } 

            $data = StockModels::where('status','unhide')->select('*')->get();
            $json = json_decode($data, true);

            foreach ($json as $key => $value) {
                $id = $value['id'];
                $Action = $value['Action'];
                $SL_Exit =  $value['SL_Exit'];
                $ondate = $value['OnDate'];
                $AtPrice = $value['AtPrice'];
                $Gain_Loss = $value['Gain_Loss'];
                $CurrentPrice = $value['CurrentPrice'];
                $glprice = $value['glprice'];
                // dd($Action);
                if (strcmp(strtolower($Action),strtolower('Exit')) == 0) {
                    $Gain_Loss = 'Realised';
                    $numofshares = 1000 / $AtPrice;
                    $CurrentValue = $numofshares * $SL_Exit;
                    $glprice = $CurrentValue - 1000;   
                    // dd($glprice);
                   
                } else {
                    $Gain_Loss = 'Unrealised';
                    $numofshares = 1000 / $AtPrice;
                    $CurrentValue = $numofshares * $CurrentPrice;
                    $glprice = $CurrentValue - 1000; 
                    // dd($glprice); 
                           
                }
               
                StockModels::where('id', $id)->where('status','unhide')    
                    ->update(array('glprice' => $glprice, 'Gain_Loss'=> $Gain_Loss, 'Action' => $Action));  // update the record in the DB. 
                    // dd($glprice); 
            }

            $status = 'unhide';
            
        $data = StockModels::where('status', $status)->orderBy('ondate', 'DESC')->paginate(20);
            return view('stock180.tech_analysis', compact('data'));
        }
    }
    public function tech_analysis(Request $request)
    {
        
        
        if (Auth::check()) {
            // The user is logged in...
        }
        $view = '';
        $q = '';
        
        if(Route::currentRouteName() == "tadata"){
            $view = 'stock180.tech_analysis';
            $data = StockModels::orderBy('OnDate', 'DESC')
                ->Where(function($query) {
                    $query->whereNull('exit_date')
                            ->orwhere(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'<=',30);
                })
                ->paginate(20);
            }elseif(Route::currentRouteName() =="past_tadata"){
               $view = 'stock180.past_recommendation';  
               $data = StockModels::orderBy('OnDate', 'DESC')
                ->Where(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'>=',30)
                ->paginate(20);
            }
            
            
        $view_data['q'] = $q;
        $view_data['data'] = $data;
            return view($view)->with($view_data);
        
        
    }
    
 //add data autocomplete
 function fetch(Request $request)
 {
  if($request->get('query'))
  {
   $query = $request->get('query');
   $client = new \GuzzleHttp\Client();
   $request = $client->get('https://financialmodelingprep.com/api/v3/search?query='.$query.'&limit=5&apikey='.env("API_KEY").'');
   $response = $request->getBody();
   $json = json_decode($response, true);
   $output = '<div id="search-box-result" class="stock-search-result" style="max-height: 450px;">';
   foreach($json as $row)
   {
    $output .= '<a class="ticker_name" onclick=test(this) style="color:#000!important;" href="#" tag="div" class="search-result-item"><div class="ticker_res">
    <span  class="tickerName">'.$row["symbol"].'-'.strtoupper($row["name"]).'</span><span class="currency">'.$row["currency"].'</span><span class="listed-at">'.$row["exchangeShortName"].'</span></div></a>';
   }
   $output .= '</div>';
   echo $output;
  }
 }

    function fetch_data(Request $request)
    {
        $view = "";
        $request_data = $request->all();
        $page = $request_data['page'];
        $this->records_per_page = 20;

        if($request->ajax())
        {
        $sort_by = $request->get('sortby');
        $sort_type = $request->get('sorttype');
        if ($sort_by=='' || $sort_type== '') {
            $sort_by = 'id';
            $sort_type = 'asc';
        }
        $query = $request->get('query');
        
        $query = str_replace(" ", "%", $query);

        $flag = $request->get('flag');

        if($flag != ''){
            $view= 'stock180.past_render';
            $data1 = StockModels::Where(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'>=',30)
                        ->where(function($s) use ($query){
                            $s->Where('Ticker', 'like', '%'.$query.'%')
                            ->orWhere('CompanyName', 'like', '%'.$query.'%')
                            ->orWhere('SL_Exit', 'like', '%'.$query.'%')
                            ->orWhere('Gain_Loss', 'like', '%'.$query.'%')
                            ->orWhere('Listed_at', 'like', '%'.$query.'%')
                            ->orWhere('glprice', 'like', '%'.$query.'%')
                            ->orWhere('Action', 'like', '%'.$query.'%');
                        })
                        ->orderBy($sort_by, $sort_type);
        }else{
            $data1 = StockModels::Where(function($query) {
                $query->whereNull('exit_date')
                        ->orwhere(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'<=',30);
                        })
                        ->where(function($s) use ($query){
                            $s->Where('Ticker', 'like', '%'.$query.'%')
                            ->orWhere('CompanyName', 'like', '%'.$query.'%')
                            ->orWhere('SL_Exit', 'like', '%'.$query.'%')
                            ->orWhere('Gain_Loss', 'like', '%'.$query.'%')
                            ->orWhere('Listed_at', 'like', '%'.$query.'%')
                            ->orWhere('glprice', 'like', '%'.$query.'%')
                            ->orWhere('Action', 'like', '%'.$query.'%');
                        })
                        ->orderBy($sort_by, $sort_type);
                        $view= 'stock180.search_data';
        }
                        //$record_starts = $this->records_per_page * ($page - 1) + 1;
                        //$record_ends = $this->records_per_page * ($page - 1) + count($data);
                         //$view_data['record_starts'] = $record_starts;
                        //$view_data['record_ends'] = $record_ends;

            if ($query == '') {
                $data = $data1->paginate($this->records_per_page);
            }
            else{
                $data = $data1->get();
            }
            $view_data['page'] = $page;
            $view_data['data'] = $data;
            $view_data['q'] = $query;
        return view($view)->with($view_data)->render();
        }
    }
    function fetch_api_data(Request $request)
    {
      $ticker_id = 0;
      $view = ""; 
     if($request->ajax())
     {
      $sort_by = $request->get('sortby');
      $sort_type = $request->get('sorttype');
      if ($sort_by=='' || $sort_type== '') {
        $sort_by = 'id';
        $sort_type = 'asc';
      }
      $query = $request->get('query');
      
      $query = str_replace(" ", "%", $query);
      $q = $query;
     
        $ticker_id=1;
        $Ticker='';
        $Listed_at='';
        $ticker_id = $request->get('ticker_id');
        $Action='';
        $AtPrice='';
        $SL_Exit='';
        $flag = $request->get('flag');

        $data = StockModels::Where('id', '=',  $ticker_id)->first();

        $Ticker = $data['Ticker'];
        $Listed_at = $data['Listed_at'];
        $Action = $data['Action'];
        $CurrentPrice = $data['CurrentPrice'];
        $AtPrice = $data['AtPrice'];
        $glprice = $data['glprice'];
        $SL_Exit = $data['SL_Exit'];
        
        if (strcmp(strtolower($Action),strtolower('Exit')) == 0) {
            $Gain_Loss = 'Realised';
            $numofshares = 1000 / $AtPrice;
            $CurrentValue = $numofshares * $SL_Exit;
            $glprice = $CurrentValue - 1000;  
        } else {
            $Gain_Loss = 'Unrealised';
            $numofshares = 1000 / $AtPrice;
            $CurrentValue = $numofshares * $CurrentPrice;
            $glprice = $CurrentValue - 1000; 
        }
        $client = new \GuzzleHttp\Client();
        $request = $client->get('https://financialmodelingprep.com/api/v3/quote/' . $Ticker . '?apikey='.env("API_KEY").'');
        $response = $request->getBody();
        $json = json_decode($response, true);
        

        if (isset($json[0]['price']) && isset($json[0]['previousClose'])) {
            $CurrentPrice = $json[0]['price'];
            $previous_close = $json[0]['previousClose'];
            StockModels::where('Ticker', $Ticker)->where('id',$ticker_id)
                ->update(['CurrentPrice' => $CurrentPrice, 'previous_close' => $previous_close, 'glprice'=>$glprice]);
                
        }
        if($flag != ''){
            $view= 'stock180.past_render';
            $data = StockModels::Where('Ticker', 'like', '%'.$query.'%')
            ->Where(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'>=',30)
            ->Where('id', '=',  $ticker_id)
            ->orderBy($sort_by, $sort_type)
            ->paginate(20);
        }else{
            $data = StockModels::Where('Ticker', 'like', '%'.$query.'%')
            ->Where(function($query) {
                $query->whereNull('exit_date')
                        ->orwhere(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'<=',30);
            })
            ->Where('id', '=',  $ticker_id)
            ->orderBy($sort_by, $sort_type)
            ->paginate(20);
            $view = 'stock180.search_data';
        }
        $view_data['q'] = $q;
        $view_data['data'] = $data;
        return view($view)->with($view_data)->render();

     }
    }
    function fetch_by_date(Request $request)
    {
        $view = "";
     if($request->ajax())
     {
      $datepickerOne = $request->get('date');
      $datepicker = $datepickerOne . '-01';
      $d = strtotime($datepicker);
      $q = '';
      $flag = $request->get('flag');
      $curMonth = date('Y-m-d', $d);
      Session::put('datedata', $datepickerOne);

      //    dd($newformat);
      $final = strtotime("+1 month", strtotime($curMonth));
      $nextMonth = date('Y-m-d', $final);
      Session::put('nextmonth', $nextMonth);
    
      if($flag != ''){
        $view= 'stock180.past_render';
        $data = StockModels::Where('OnDate', '>=', $datepicker)
        ->Where(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'>=',30)
        ->where('status', '>=', 'unhide')
        ->whereDate('OnDate', '<=', $nextMonth)->orderBy('ondate', 'DESC')->paginate(20);
    }else{
        $data = StockModels::Where('OnDate', '>=', $datepicker)
        ->Where(function($query) {
                              $query->whereNull('exit_date')
                                    ->orwhere(DB::raw('DATEDIFF(CURRENT_TIME,exit_date)'),'<=',30);
                  })
        ->where('status', '>=', 'unhide')
        ->whereDate('OnDate', '<=', $nextMonth)->orderBy('ondate', 'DESC')->paginate(20);
        $view = 'stock180.search_data';
    }

      $view_data['q'] = $q;
      $view_data['data'] = $data;
      return view($view)->with($view_data)->render();
     }
    }

    public function useful_links()
    {
        /******************************
         ********* useful link page*****************
         ***********************************/
        $status = 'Show';
        $useful_links = UsefulLink::where('Visible', $status)->orderByDesc("created_at")->paginate(20);
        return view('stock180.useful_links', compact('useful_links'));
    }
    public function newsletter()
    {
        /******************************
         ********* newsletter page *****************
         ***********************************/
        $status = 'Show';
        $newsletter = Newsletter::where('Visible', $status)->orderByDesc("created_at")->paginate(20);
        return view('stock180.newsletter', compact('newsletter'));
    }
    public function contact_us()
    {

        /******************************
         ********* contect us page *****************
         ***********************************/
        return view('stock180.contact_us');
    }

    public function term_condition()
    {

        /******************************
         ********* term_condition us page *****************
         ***********************************/
        return view('stock180.about-us.terms-and-conditions');
    }
    #sub email function
    public function sub_email(Request $request)
    {
        $posted_data = request()->all();
        $validator = Validator::make($posted_data, array(
            'sub_email' => 'required|email',
           

        ), array(
            'sub_email.required' => 'Enter your email address.'
        ));
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 'ERROR',
                'message' => 'Please give valid email!!',
                'errors' => $validator->errors()
            ]);
        }


        $sub_email = $posted_data['sub_email'];
        try{
            $leads_data = new Leads();
            $leads_data->email = $sub_email;
            $leads_data->DoNotSend = 0;
            $leads_data->Unsubscribe = 0;
            $leads_data->created_at = Carbon::now();
            $leads_data->save();
            $data=['sender'=>$sub_email];
            Mail::to($sub_email)
            
            ->send(new SubMail($data));
            return response()->json([
                'status' => 'OK',
                'message' => 'Thank You for Subscribing our newsletter ',
                'redirect_url' => url('/')
            ]);
        }
        catch (\Exception $e){
            return response()->json([
                'status' => 'ERROR',
                'message' => 'Failed!!',
                'data' => $e->getMessage()
            ]);
        }
    }
    public function unsubscribe($sub_email)
    {
        #email unsubscribe function
        $data = [];
        try {
            $res = Leads::where('email',$sub_email)
                ->limit(1)
                ->update(array('Unsubscribe' => 1));
                if ($res) {

                    $data['Unsubscribe'] = 'Unsubscribed';
                    return view('stock180.unsubcribed',$data);
                }else{
                    $data['Unsubscribe'] = 'Already unsubscribed';
                    return view('stock180.unsubcribed',$data);
                }
               
        } catch (\Throwable $th) {
            throw $th;
        }
       
    }
  
}