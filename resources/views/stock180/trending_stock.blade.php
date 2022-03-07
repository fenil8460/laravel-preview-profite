@include('stock180.header')
<link rel="stylesheet" href="/../assets/css/marquee.css" />
<link rel="stylesheet" href="/../assets/css/example.css" />
<style>
   .content-blog {
    display: inline-block;
}
#tooltip {
  position: relative;
  display: inline-block;
}
#tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  margin-left:5px;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}
#tooltip:hover .tooltiptext {
  visibility: visible;
}
.col-md-6 {
    padding-top: 12px;
}
table {
    border: 1px solid #bababa !important;
    table-layout: fixed;
    
}
tr{border-bottom: 1px solid #bababa !important;}
td,th{border-right-style: inherit;border-left-style:inherit;border-top-style: inherit; }
a:focus, a:hover {
    text-decoration: unset;
}
    .hide{
        display: none;
    }
            .modal-newsletter { 
            color: #999;
            width: 625px;
            max-width: 625px;
            font-size: 15px;
        }
        .modal-newsletter .modal-content {
            padding: 30px;
            border-radius: 0;       
            margin-top: 125px;
            border: none;
        }
        .modal-newsletter .modal-header {
            border-bottom: none;   
            position: relative;
            border-radius: 0;
        }
        .modal-newsletter h4 {
            color: #000;
            font-size: 30px;
            margin: 0;
            font-weight: bold;
        }
        .modal-newsletter .close {
            position: absolute;
            top: -15px;
            right: -15px;
            text-shadow: none;
            opacity: 0.3;
            font-size: 24px;
        }
        .modal-newsletter .close:hover {
            opacity: 0.8;
        }
        .modal-newsletter .icon-box {
            color: #7265ea;     
            display: inline-block;
            z-index: 9;
            text-align: center;
            position: relative;
            margin-bottom: 10px;
        }
        .modal-newsletter .icon-box i {
            font-size: 110px;
        }
        .modal-newsletter .form-control, .modal-newsletter .btn {
            min-height: 46px;
            border-radius: 0;
        }
        .modal-newsletter .form-control {
            box-shadow: none;
            border-color: #dbdbdb;
        }
        .modal-newsletter .form-control:focus {
            border-color: #f95858;
            box-shadow: 0 0 8px rgba(249, 88, 88, 0.4);
        }
        .modal-newsletter .btn {
            color: #fff;
            background: #f95858;
            text-decoration: none;
            transition: all 0.4s;
            line-height: normal;
            padding: 6px 20px;
            min-width: 150px;
            margin-left: 6px !important;
            border: none;
        }
        .modal-newsletter .btn:hover, .modal-newsletter .btn:focus {
            box-shadow: 0 0 8px rgba(249, 88, 88, 0.4);
            background: #f72222;
            outline: none;
        }
        .modal-newsletter .input-group {
            margin-top: 30px;
        }
        .hint-text {
            margin: 100px auto;
            text-align: center;
        }
        .input-group {
            /* position: relative; */
            display: flex;
        }
        .content-masonry .card {
            margin: 15px 0;
            width: 100%;
            border-radius: 0;
        }
        .card {
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .25rem;
        }
        .content-masonry .card img {
            padding: 15px;
        }
        .card-img-top {
            width: 100%;
            border-top-left-radius: calc(.25rem - 1px);
            border-top-right-radius: calc(.25rem - 1px);
        }
        .content-masonry .card .card-body {
            text-align: center;
            font-family: 'Raleway', sans-serif;
            margin: 0;
            padding-top: 0;
            position: relative;
            z-index: 1;
        }
        .card-body {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 1.25rem;
        }.content-masonry .card .card-body h5 {
            position: relative;
            height: 100px;
            margin-bottom: 40px;
        }
        .card-title {
            margin-bottom: .75rem;
        }.content-masonry .card .card-body h5 a {
            margin: 0;
            font-size: 19px;
            font-weight: 600;
            color: #666666;
        }
        a {
            color: #007bff;
            text-decoration: none;
            background-color: transparent;
        }.content-masonry .card .card-body p {
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 20px;
            font-size: 15px;
            color: #666666;
        }
        .card-text:last-child {
            margin-bottom: 0;
        }.content-masonry .card .card-body {
            text-align: center;
            font-family: 'Raleway', sans-serif;
            margin: 0;
            padding-top: 0;
            position: relative;
            z-index: 1;
        }
        .card-body {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 1.25rem;
        }.content-masonry .card .card-body span {
            padding: 0 30px;
            border-right: 0px solid #e6e6e6;
            font-size: 15px;
            color: #666666;
            z-index: 1;
        }
        .one{
            width: 73%;
        }
        .two{
            width: 27%;
        }
        .ticker{
            width:15%;
        }
        .Company{
            width:40%;
        }
        td{word-break: break-word;}
        #crypto {display: none;}
        #commodities,.mostactive_mob,.loser_mob,.gainer_mob,.mob_title{display: none;}
        #main_title{display:flex;justify-content: space-between;width: 106%;}
        h5>span{color: #007bff;cursor: pointer;}
        @media screen and (max-width: 600px) {
            .ticker{
            width:unset;
        }
        .Company{
            width:unset;
        }
            .mob_view{
                display: none;
            }
            .modal-newsletter {
                    color: #999;
                    width: auto;
            }
            .img-responsive{
                width: 100%;
            }
        }
        @media screen and (max-width: 1023px) {
    .content-blog { display: flex; flex-flow: column; }
    .desktop{display: block;}
    .gainer_mob{display: table;}
    .mob_title{display: flex;justify-content: space-between;}
    .two { order: 2;width: auto;}
    .one { order: 1; margin-top:80px !important;width: auto;}
    table{width: -webkit-fill-available;}
    #main_title{width: 99%;}
}
</style>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
    
    
    <script type="text/javascript" src="{{asset('assets/js/marquee.js?v='.time())}}"></script>
    {{--  popup script for first time users  --}}
    
    <!-- Container (home Section) -->
    <div class="container" style="padding-top:40px;">
        <div class="row content-blog">
                <div class="col-md-9 col-sm-12 one" style="margin-top: 20px;overflow: auto;">
                    <div class="content-blog-center">
                        <div class="blog">
                            <div class="item-blog">
                               <h5>{{$datas['main_title']}}</h5>
                                        <table id="main">
                                        <thead>
                                            <tr>
                                                <th class="ticker" >Ticker</th>
                                                <th class="Company">Company</th>
                                                <th>Price</th>
                                                <th style="width:100px">Change</th>
                                                <th style="width:100px">% Chg</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                            	 @foreach($datas['main'] as $data)
                                            	@php
                                            	$chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
									            if($chaneg > 0){
									                $color = "green";
									            }elseif($chaneg == 0){
									                $color = "black";
									            }else{
									                $color = "red";
									            }
                                            	@endphp
                                            	<tr>
                                                    <td class="JgXcPd"><a href="{{ URL::to('api/chart?ticker=')}}{{$data['symbol']}}">{{$data['symbol']}}</a></td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{$data['name']}}</td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($data['price'],2)}}</td>
                                                    <td class="JgXcPd" style="color:{{$color}};">{{number_format($data['change'],2)}}</td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($chaneg,2)}}</td>
                                            	</tr>
                                            	@endforeach
                                            </tbody>
                                        </table>
                            </div>
                        </div>
                       
                    </div>
        
                </div>
                <div class="col-md-3 col-sm-12 two" style="margin-top: 20px;">
                                        <h5>{{$datas['sub1_title']}}</h5>
                                        <table id="sub1">
                                        <thead>
                                            <tr>
                                                <th style="width:56px;">Company</th>
                                                <th style="width:84px;">Price</th>
                                                <th style="width:62px;">Change</th>
                                                <th style="width:60px;">% Chg</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                            	 @foreach($datas['sub1'] as $data)
                                            	@php
                                            	$chaneg = str_replace(array('(',')','+','%'),"",$data->changesPercentage);
									            if($chaneg > 0){
									                $color = "green";
									            }elseif($chaneg == 0){
									                $color = "black";
									            }else{
									                $color = "red";
									            }
                                            	@endphp
                                            	<tr>
                                            	<td class="JgXcPd" id="tooltip"><a href="{{ URL::to('api/chart?ticker=')}}{{$data->ticker}}">{{$data->ticker}}</a><span class="tooltiptext">{{$data->companyName}}</span></td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($data->price,2)}}</td>
                                                    <td class="JgXcPd" style="color:{{$color}};">{{number_format($data->changes,2)}}</td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($chaneg,2,'.', '')}}</td>
                                            	</tr>
                                            	@endforeach
                                            </tbody>
                                        </table>
                                        <h5 id="main_title" style="text-align: right;display: block;"><a href="{{route('marketmover',['mover'=>$datas['link1']])}}" style="margin-right: 18px;" class="desktop">Show More>></a></h5>      
                                        <h5 style="margin-top:20px">{{$datas['sub2_title']}}</h5>
                                        <table id="sub2">
                                        <thead>
                                            <tr>
                                                <th style="width:56px;">Company</th>
                                                <th style="width:84px;">Price</th>
                                                <th style="width:62px;">Change</th>
                                                <th style="width:60px;">% Chg</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                            	 @foreach($datas['sub2'] as $data)
                                            	@php
                                            	$chaneg = str_replace(array('(',')','+','%'),"",$data->changesPercentage);
									            if($chaneg > 0){
									                $color = "green";
									            }elseif($chaneg == 0){
									                $color = "black";
									            }else{
									                $color = "red";
									            }
                                            	@endphp
                                            	<tr>
                                            	<td class="JgXcPd" id="tooltip"><a href="{{ URL::to('api/chart?ticker=')}}{{$data->ticker}}">{{$data->ticker}}</a><span class="tooltiptext">{{$data->companyName}}</span></td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($data->price,2)}}</td>
                                                    <td class="JgXcPd" style="color:{{$color}};">{{number_format($data->changes,2)}}</td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($chaneg,2,'.', '')}}</td>
                                            	</tr>
                                            	@endforeach
                                            </tbody>
                                        </table>
                                        <h5 id="main_title" style="text-align: right;display: block;"><a href="{{route('marketmover',['mover'=>$datas['link2']])}}" style="margin-right: 18px;" class="desktop">Show More>></a></h5>  
                                        <h5 style="margin-top:20px">{{$datas['sub3_title']}}</h5>
                                        <table id="sub3">
                                        <thead>
                                            <tr>
                                                <th style="width:56px;">Company</th>
                                                <th style="width:84px;">Price</th>
                                                <th style="width:62px;">Change</th>
                                                <th style="width:60px;">% Chg</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                            	 @foreach($datas['sub3'] as $data)
                                            	@php
                                            	$chaneg = str_replace(array('(',')','+','%'),"",$data->changesPercentage);
									            if($chaneg > 0){
									                $color = "green";
									            }elseif($chaneg == 0){
									                $color = "black";
									            }else{
									                $color = "red";
									            }
                                            	@endphp
                                            	<tr>
                                                    <td class="JgXcPd" id="tooltip"><a href="{{ URL::to('api/chart?ticker=')}}{{$data->ticker}}">{{$data->ticker}}</a><span class="tooltiptext">{{$data->companyName}}</span></td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($data->price,2)}}</td>
                                                    <td class="JgXcPd" style="color:{{$color}};">{{number_format($data->changes,2)}}</td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($chaneg,2,'.', '')}}</td>
                                                    </tr>
                                            	@endforeach
                                            </tbody>
                                        </table>
                                        <h5 id="main_title" style="text-align: right;display: block;"><a href="{{route('marketmover',['mover'=>$datas['link3']])}}" style="margin-right: 18px;" class="desktop">Show More>></a></h5> 
                                        <h5 style="margin-top:20px">{{$datas['sub4_title']}}</h5>
                                        <table id="sub4">
                                        <thead>
                                            <tr>
                                                <th style="width:56px;">Company</th>
                                                <th style="width:84px;">Price</th>
                                                <th style="width:62px;">Change</th>
                                                <th style="width:60px;">% Chg</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                            	 @foreach($datas['sub4'] as $data)
                                            	@php
                                            	$chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
									            if($chaneg > 0){
									                $active_color = "green";
									            }elseif($chaneg == 0){
									                $active_color = "black";
									            }else{
									                $active_color = "red";
									            }
                                            	@endphp
                                            	<tr>
                                                    <td class="JgXcPd" id="tooltip"><a href="{{ URL::to('api/chart?ticker=')}}{{$data['symbol']}}">{{$data['symbol']}}</a><span class="tooltiptext">{{$data['name']}}</span></td>
                                                    <td class="iyjjgb" style="color:{{$active_color}};">{{number_format($data['price'],2)}}</td>
                                                    <td class="JgXcPd" style="color:{{$active_color}};">{{number_format($data['change'],2)}}</td>
                                                    <td class="iyjjgb" style="color:{{$active_color}};">{{number_format($chaneg,2)}}</td>
                                                    </tr>
                                            	@endforeach
                                            </tbody>
                                        </table>
                                        <h5 id="main_title" style="text-align: right;display: block;"><a href="{{route('marketmover',['mover'=>$datas['link4']])}}" style="margin-right: 18px;" class="desktop">Show More>></a></h5> 
                                        
                                        @if($datas['r_quotes'] != null)
                                        <h5 style="margin-top:20px">MOST RECENT QUOTES</h5>
                                        <table id="r_quotes">
                                        <thead>
                                            <tr>
                                                <th style="width:56px;">Company</th>
                                                <th style="width:84px;">Price</th>
                                                <th style="width:62px;">Change</th>
                                                <th style="width:60px;">% Chg</th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                            	 @foreach($datas['r_quotes'] as $data)
                                            	@php
                                            	$chaneg = str_replace(array('(',')','+','%'),"",$data['changesPercentage']);
									            if($chaneg > 0){
									                $color = "green";
									            }elseif($chaneg == 0){
									                $color = "black";
									            }else{
									                $color = "red";
									            }
                                            	@endphp
                                            	<tr>
                                            	<td class="JgXcPd" id="tooltip"><a href="{{ URL::to('api/chart?ticker=')}}{{$data['symbol']}}">{{$data['symbol']}}</a><span class="tooltiptext">{{$data['name']}}</span></td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($data['price'],2)}}</td>
                                                    <td class="JgXcPd" style="color:{{$color}};">{{number_format($data['change'],2)}}</td>
                                                    <td class="iyjjgb" style="color:{{$color}};">{{number_format($chaneg,2,'.', '')}}</td>
                                            	</tr>
                                            	@endforeach
                                            </tbody>
                                        </table>
                                        @endif
                   </div>
        </div>
    </div>
    @php 
    $a=Request::segment(2);
    @endphp
    <script>
       var currentRequest = null;
            //refresh stock every 5 second
            var stockdata = function() {
                currentRequest= $.ajax({
                url: "{{ route('marketmover',['mover'=>$a]) }}",
                beforeSend: function() {
                    if (currentRequest != null) {
                        currentRequest.abort();
                    }
                },
                data:{
                    flag:1
                },
                type: 'POST',
                success: function(data) {
                    var a = JSON.parse(data);
                    //alert(a);
                    $('tr td:not(:first-child)').css('opacity','unset');
                    $("#main> tbody").html(a.main);
                    $("#sub1> tbody").html(a.sub1);
                    $("#sub2> tbody").html(a.sub2);
                    $("#sub3> tbody").html(a.sub3);
                    $("#sub4> tbody").html(a.sub4);
                    if(a.r_quotes != ''){
                    $("#r_quotes> tbody").html(a.r_quotes);
                    }
                },
                error: function(data){
                    console.log(data);
                }
                });
            }
            window.setInterval(function(){
                $('tr td:not(:first-child)').css('opacity','0.6');
                stockdata();
                }, 20000);
    </script>
    @include('stock180.footer')

    

</body>
</html>