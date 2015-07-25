var url = "http://ajava.pythonanywhere.com/";

function reloadcommentsprofil(tripid) {

    $.ajax({
        url : "/profilecomments", // the endpoint
        type : "POST", // http method
        data : { id: tripid }, // data sent with the post request
        success : function(json) {
            document.getElementById('commentaries').innerHTML = json;

        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}

function addcommentprofile(id) {
    content = document.getElementById('commentcontent').value;
    if (content != '') {
        $.ajax({
            url : "/comment", // the endpoint
            type : "POST", // http method
            data : { id:id, content: content }, // data sent with the post request
            success : function(json) {
                if (json == 'OK !') {
                    reloadcommentsprofil(id);
                    document.getElementById('commentcontent').value = '';
                }
                else {
                    alert(json);
                }
            },
            error : function(xhr,errmsg,err) {
                alert(err);
            }
        });
    }

}

function deletecomment(commentid, tripid) {
    $.ajax({
        url : "/deletecomment", // the endpoint
        type : "POST", // http method
        data : { id: commentid }, // data sent with the post request
        success : function(json) {
            reloadcommentsprofil(tripid);
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}

function deleteacct() {
    $.ajax({
        url : "/deleteacct", // the endpoint
        type : "POST", // http method
        data : {  }, // data sent with the post request
        success : function(json) {
            if (json == 'OK') {
                document.location.href = '/';
            }
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}

function create_trip() {
    var departur = document.getElementById('departur').value;
    var checkpoint = document.getElementById('checkpoint').value;
    var arrival = document.getElementById('arrival').value;
    var places = document.getElementById('places').value;
    var price = document.getElementById('price').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    if (document.getElementById('supercheckbox').checked == true) {
        $.ajax({
            url : "/create_trip", // the endpoint
            type : "POST", // http method
            data : { departur: departur, checkpoint: checkpoint, arrival: arrival, places: places, price: price, date: date, time: time }, // data sent with the post request
            success : function(json) {
                if (json == 'OK') {
                    $('#success').modal('show');
                }
            },
            error : function(xhr,errmsg,err) {
                alert(err);
            }
        });
    }


}

function save_trip(id) {
    var departur = document.getElementById('departur').value;
    var checkpoint = document.getElementById('checkpoint').value;
    var arrival = document.getElementById('arrival').value;
    var places = document.getElementById('places').value;
    var price = document.getElementById('price').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    $.ajax({
        url : "/savetrip", // the endpoint
        type : "POST", // http method
        data : { id: id, departur: departur, checkpoint: checkpoint, arrival: arrival, places: places, price: price, date: date, time: time }, // data sent with the post request
        success : function(json) {
            alert(json);
            if (json == 'OK') {
                document.getElementById('success').innerHTML = 'Votre trajet a été enregistré';
            }
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}


function delete_trip(id) {
    $.ajax({
        url : "/deletetrip", // the endpoint
        type : "POST", // http method
        data : { id: id }, // data sent with the post request
        success : function(json) {
            if (json == 'OK') {
                document.location.href = '/';
            }
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}


function search_trip() {
    departur = document.getElementById('departur').value
    arrival = document.getElementById('arrival').value
    date = document.getElementById('date').value
    $.ajax({
        url : url+"/searchtrip", // the endpoint
        type : "POST", // http method
        data : { departur: departur, arrival: arrival, date: date, page:0 }, // data sent with the post request
        success : function(json) {
            document.getElementById('resultcontent').innerHTML = json
        },
        error : function(xhr,errmsg,err) {
            alert(err, errmsg);
        }
    });
}

function page_search_trip(page) {
    departur = document.getElementById('departur').value
    arrival = document.getElementById('arrival').value
    date = document.getElementById('date').value
    $.ajax({
        url : "/searchtrip", // the endpoint
        type : "POST", // http method
        data : { departur: departur, arrival: arrival, date: date, page:page }, // data sent with the post request
        success : function(json) {
            document.getElementById('resultcontent').innerHTML = json
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}

function getnumber(id) {
    $.ajax({
        url : "/getnumber", // the endpoint
        type : "POST", // http method
        data : { id:id }, // data sent with the post request
        success : function(json) {
            if (json != 'Failure' && json != 'None') {
                document.getElementById('callbtn' + id).innerHTML = json;
                document.getElementById('callbtn' + id).className = 'btn btn-success';
            }
            else {
                document.getElementById('callbtn' + id).innerHTML = 'Pas de numéro';
                document.getElementById('callbtn' + id).className = 'btn btn-danger';
            }
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });

}

function reload_comments(id) {
    $.ajax({
        url : "/getcomments", // the endpoint
        type : "POST", // http method
        data : { id:id }, // data sent with the post request
        success : function(json) {
            if (json != 'Failure') {
                document.getElementById('innercomments' + id).innerHTML = json;
            }
        },
        error : function(xhr,errmsg,err) {
            alert(err);
        }
    });
}

function comment(id) {
    content = document.getElementById('comment' + id).value;
    if (content != '') {
        $.ajax({
            url : "/comment", // the endpoint
            type : "POST", // http method
            data : { id:id, content: content }, // data sent with the post request
            success : function(json) {
                if (json == 'OK !') {
                    reload_comments(id);
                    document.getElementById('comment' + id).value = '';
                }
                else {
                    alert(json);
                }
            },
            error : function(xhr,errmsg,err) {
                alert(err);
            }
        });
    }

}

function loadindex() {
    document.location.href = '/';
}
