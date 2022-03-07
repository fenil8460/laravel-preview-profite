@extends('admin.layout')

@section('content')
<div id="ta" class="container text-center">
    <h3>Useful links</h3>
    <div class="col-md-12">

        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Create new Useful link</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="useful_links-form" class="form" role="form" autocomplete="off">
                            {{ csrf_field() }}
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Title</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" id="Title" name="Title" value=""
                                        placeholder="Title" title="Please give Title name" required>
                                    <span id="Title-error" class="hide" style="font-size: 16px;"></span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">URL</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" id="url" name="url" value=""
                                        placeholder="URL" title="Please give URL" required>
                                    <span id="url-error" class="hide" style="font-size: 16px;"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Description</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" id="description" name="description" value=""
                                        placeholder="Description" title="Please give Description" required>
                                    <span id="description-error" class="hide" style="font-size: 16px;"></span>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-lg-3 col-form-label form-control-label">Sequence</label>
                                <div class="col-lg-9">
                                    <input class="form-control" type="text" id="sequence" name="sequence" value=""
                                        placeholder="sequence" title="Please give sequence number" required>
                                    <span id="sequence-error" class="hide" style="font-size: 16px;"></span>
                                </div>
                            </div>
                            <div class="form-group row modal-footer">
                                <div class="col-sm-12" style="text-align: center;">
                                    <input type="button" class="btn btn-info" id="save-btn" value=" Add"
                                        style="border: 1px solid #d0efff;">
                                </div>
                                <div class="col-md-12">
                                    <span id="save-error" class="hide" style="font-size: 16px;"></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- save ta data -->
<script type="text/javascript">
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(function() {

    $(document).on('click', '#save-btn', function(e) {
        var thisEle = $(this);
        save(thisEle);
    });

    function save(thisBtn) {
        var thisButton = $(thisBtn);
        var fullNameEle = $('#Title');

        var formData = $('#useful_links-form').serialize();

        if (thisButton.data('requestRunning')) {
            return;
        }
        thisButton.data('requestRunning', true);
        thisButton.prop("disabled", true);

        $('#save-error').removeClass('hide').html(
            '<b style="color: green;text-align: center;">Processing...</b>');
        // controller adderss

        var postUrl = "savelinks";
        // var postUrl = "/admin/delete/{id}";

        $.ajax({
            url: postUrl,
            type: "POST",
            dataType: "JSON",
            data: formData,
            success: function(response, textStatus, jqXHR) {
                // console.log(response);return false;
                if (response.status == "OK") {
                    $('#save-error').html(response.message).css({
                        "color": "green",
                        "font-weight": "bold"
                    });
                    window.location = response.redirect_url;
                } else {
                    $('#save-error').html(response.message).css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                }
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
});

function validateFirstLastName(element) {
    var firstLastName = element.val();
    var pattern = /^[a-zA-Z_]+(?:[a-zA-Z\.\-\'\s]+)*$/;
    return pattern.test(firstLastName);
}
</script>
<div class="table_div">
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>URL</th>
                <th>description</th>

                <th>sequence</th>
                <th>Last Saved</th>
                <th class="btn-group btn-group-xs"><button type="button" class="btn btn-primary" data-toggle="modal"
                        data-target="#exampleModalCenter">+Add</button></th>


            </tr>
        </thead>
        <tbody>
            @if(!empty($useful_link) && $useful_link->count())
            @foreach ($useful_link as $data)
            <tr>
                <td>{{ $data->id }}</td>
                <td>{{ $data->title }}</td>
                <td>{{ $data->url }}</td>
                <td>{{ $data->description }}</td>
                <td>{{ $data->sequence }}</td>
                <td>{{ date('d-M-y', strtotime($data->updated_at)) }}</td>
                <form action="/admin/useful_links/showlinks" method="post" id="statusForm{{$data->id}}">
                    @csrf
                    <!-- If status is 1 an unchecked checkbox -->
                    @if ($data->Visible == "hide")
                    <td><a href="/admin/useful_links/showlinks/{{$data->id}}">
                            <div class="btn-group btn-group-xs">
                                <button type="button" class="btn btn-primary">Show</button>
                            </div>
                        </a>
                        <a href='/admin/useful_links/edit/{{ $data->id }}'>🖉Edit</a>
                        <a href='/admin/useful_links/delete/{{ $data->id }}'>❌Del</a>
                    </td>
                    <input name="id" type="hidden" value="{{$data->id}}">

                    @else
                    <td style="border-left-style: unset;border-right-style: unset;"><a
                            href="/admin/useful_links/hidelinks/{{$data->id}}">
                            <div class="btn-group btn-group-xs">
                                <button type="button" class="btn btn-primary"
                                    style="background-color: forestgreen;">Hide</button>
                            </div>
                        </a>
                </form>
                <a href='/admin/useful_links/edit/{{ $data->id }}'>🖉Edit</a>
                <a href='/admin/useful_links/delete/{{ $data->id }}'>❌Del</a>
                </td>
                @endif


            </tr>
            @endforeach
            @else
            <tr>
                <td colspan="10">There are no data.</td>
            </tr>
            @endif
        </tbody>
        <tfoot>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>URL</th>
                <th>description</th>
                <th>sequence</th>
                <th>Last Saved</th>
                <th></th>

            </tr>
        </tfoot>
    </table>
    {!! $useful_link->links() !!}
</div>
    <!-- end save ta data -->




    <script>
    $(document).ready(function() {
        $(".showhide").click(function(e) {
            e.preventDefault();
            $('tr.cancelled').toggle();
        });
    });
    var msg = "{{Session::get('alert')}}";
    var exist = "{{Session::has('alert')}}";
    if (exist) {
        alert(msg);
    }
    </script>
    <script>
    $(function() {

        $(document).on('click', '#hidebtn', function(e) {
            var thisEle = $(this);
            save(thisEle);
        });

        function save(thisBtn) {
            if (thisButton.data('requestRunning')) {
                return;
            }
            thisButton.data('requestRunning', true);
            thisButton.prop("disabled", true);

            $('#save-error').removeClass('hide').html(
                '<b style="color: green;text-align: center;">Processing...</b>');

            var postUrl = "/admin/hide";
            // var postUrl = "/admin/delete/{id}";

            $.ajax({
                url: postUrl,
                type: "GET",
                dataType: "JSON",
                data: formData,
                success: function(response, textStatus, jqXHR) {
                    // console.log(response);return false;
                    if (response.status == "OK") {
                        $('#save-error').html(response.message).css({
                            "color": "green",
                            "font-weight": "bold"
                        });
                        window.location = response.redirect_url;
                    } else {
                        $('#save-error').html(response.message).css({
                            "color": "red",
                            "font-weight": "bold"
                        });
                    }
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
    });
    </script>

    @stop