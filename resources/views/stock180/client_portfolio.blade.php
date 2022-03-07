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
   width: 100%;
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
   .fade.in {
  opacity: 1;
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}

.modal-backdrop .fade .in {
  opacity: 0.5 !important;
}


.modal-backdrop.fade {
    opacity: 0.5 !important;
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
   /* .mob_view{
   display: none;
   } */
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
   
   <div class="container" style="padding-top:40px;min-height:500px">
      <div class="row content-blog">
         <div class="col-md-12 col-sm-12 one" style="margin-top: 20px;overflow: auto;">
            <div class="content-blog-center">
               <div class="blog">
                  <div class="item-blog">
                     <h5 style="float: left">Watchlist</h5>
                     
                     <h5 style="float: right"><a href="javascript:void()" data-toggle="modal"
                        data-target="#exampleModalCenter">Add Watchlist</a></h5>
                         <!-- Modal -->
    <div class="modal fade in" id="exampleModalCenter"  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="margin-top:100px" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add New Watchlist</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="tadata-form" class="form" role="form" autocomplete="off">
                    {{ csrf_field() }}
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Ticker</label>
                        <div class="col-lg-9">
                            <input class="form-control" type="text" id="tickers_modal" name="ticker" value=""
                                placeholder="Ticker" title="Please give ticker name"
                                style="text-transform:uppercase" required style="text-transform:uppercase">
                            <span id="ticker-error" class="hide" style="font-size: 16px;"></span>
                            <div  id="tickerList1" style="text-align: -webkit-center;">
                            </div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label">Company Name</label>
                        <div class="col-lg-9">
                            <input class="form-control" type="text" id="CompanyName" name="CompanyName" value=""
                                placeholder="Company Name" title="Please give Company name" readonly>
                            <span id="CompanyName-error" class="hide" style="font-size: 16px;"></span>
                        </div>
                    </div>

                    <div class="form-group row modal-footer">
                        <div class="col-sm-12" style="text-align: center;">
                            <input type="button" class="btn btn-info" id="save-btn" value=" Add"
                                style="border: 1px solid #d0efff;" disabled>
                        </div>
                        <div class="col-md-12">
                            <span id="save-error" class="hide" style="font-size: 16px;"></span>
                            <span id="save-btn-error" class="hide" style="font-size: 16px;"></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
                     <table id="main">
                        <thead>
                           <tr>
                              <th class="ticker" >Ticker</th>
                              <th class="Company">Company</th>
                              <th>Price</th>
                              <th style="width:100px">Change</th>
                              <th style="width:100px">% Chg</th>
                              <th style="width:100px">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           @foreach($client_data as $data)
                           <tr>
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
                              <td style='color:{{$color}}'><a href="{{ URL::to('api/chart?ticker=')}}{{$data['symbol']}}">{{$data['symbol']}}</a></td>
                              <td class="iyjjgb" style='color:{{$color}};'>{{$data['name']}}</td>
                              <td class="iyjjgb" style='color:{{$color}};'>{{number_format($data['price'],2)}}</td>
                              <td class="JgXcPd" style='color:{{$color}};'>{{number_format($data['change'],2)}}</td>
                              <td class="iyjjgb" style='color:{{$color}};'>{{number_format($chaneg,2)}}</td>
                              <td><a href="{{route('delete_protfolio',['ticker'=>$data['symbol']])}}">Delete</a></td>
                           </tr>
                           @endforeach
                        </tbody>
                     </table>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   </div>
   @include('stock180.footer')
   <script>
       function test(ticker){
    var tickerName = $(ticker).children('.ticker_res').children('.tickerName').text().split('-')[0];
    var companyName = $(ticker).children('.ticker_res').children('.tickerName').text().split('-')[1];
    $("#tickers_modal").val(tickerName);
    $("#CompanyName").val(companyName);
    $("#save-btn").prop("disabled",false);
}
      var currentRequest = null;
            //refresh stock every 5 second
            var stockdata = function() {
                currentRequest= $.ajax({
                url: "{{ route('view-clientportfolio') }}?ajax=1",
                beforeSend: function() {
                    if (currentRequest != null) {
                        currentRequest.abort();
                    }
                },
                type: 'GET',
                success: function(data) {
                  $('tr td:not(:first-child)').css('opacity','unset');
                  var a = JSON.parse(data);
                  $("#main> tbody").html(a.portolio);
                    console.log(a.portolio);
                },
                error: function(data){
                    console.log(data);
                }
                });
            }
            window.setInterval(function(){
               $('tr td:not(:first-child)').css('opacity','0.6');
                stockdata();
                }, 5000);
$(document).ready(function(){

      $('#tickers_modal').val();
      $('#tickers_modal').keyup(function() {
          
          $("#save-btn").prop("disabled", true);
          var query = $(this).val();
          console.log(query);
          if (query != '') {
              var _token = $('input[name="_token"]').val();
              currentRequest = $.ajax({
                  beforeSend: function() {
                      if (currentRequest != null) {
                          currentRequest.abort();
                      }
                  },
                  url: "{{ route('client.fetch') }}",
                  method: "POST",
                  data: {
                      query: query,
                      _token: _token
                  },
                  success: function(data) {
                      $('#tickerList1').fadeIn();
                      $('#tickerList1').html(data);
                      sessionStorage.clear();
                  }
              });
          }
      });
      var formData = $('#tadata-form').serialize();
      $(document).on('click', '#save-btn', function(e) {
        var thisEle = $(this);
        
        save(thisEle);
        // window.location.href = "{{('/trending_stocks')}}";
    });
    function save(thisBtn) {
        var thisButton = $(thisBtn);
        var fullNameEle = $('#ticker');
       
        
        if (thisButton.data('requestRunning')) {
            return;
        }
        thisButton.data('requestRunning', true);
        thisButton.prop("disabled", true);
         $("#save-btn").prop("disabled", true);
        $('#save-error').removeClass('hide').html(
            '<b style="color: green;text-align: center;">Processing...</b>');
        var ticker = $('#tickers_modal').val();
        var postUrl = "insertprotfolio/"+ticker;
        console.log(postUrl);
        $.ajax({
            url: postUrl,
            type: "GET",
            dataType: "JSON",
            success: function(response, textStatus, jqXHR) {
                // console.log(response);return false;
                if (response == 1) {
                    $('#save-error').html("Saved Successfully").css({
                        "color": "green",
                        "font-weight": "bold"
                    });
                    $("#save-btn").prop("disabled", true);
                    
                } else{
                    $('#save-error').html("Ticker already added").css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                }
                window.location = "/clientportfolio";
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#save-btn-error').html('Failed to Process!!').css({
                    "color": "red",
                    "font-weight": "bold"
                });
            },
            complete: function() {
                thisButton.data('requestRunning', false);
                thisButton.prop("disabled", false);
            }
        });
    }
      $(document).on('click', '#tickerList1', function() {
            $('#tickerList1').fadeOut();
        });
   })

   </script>
</body>
</html>