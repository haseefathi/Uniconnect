function lookup_profile_connect(username) {

    let lookup_url = `/user/profile/${username}/`;
    // alert('looking up ' + username + '\n' + url);

    showLoadingSign();
    clearNavbarHighlight();
    document.getElementById("nav-dashboard").classList.add("active");
    $.ajax({
        url: lookup_url,
        type: 'GET',
        dataType: 'html',
        success: function(content) {
            closeLoadingSign();
            $('#mainContent').html(content);
            scrollToTop();
        },
        failure: function() {
            alert('Something wrong with the server bro...');
        }
    });

}

function lookup_profile_friend(username) {

    let lookup_url = `/user/friend_profile/${username}/`;
    // alert('looking up ' + username + '\n' + url);

    showLoadingSign();
    clearNavbarHighlight();
    document.getElementById("nav-requests").classList.add("active");
    $.ajax({
        url: lookup_url,
        type: 'GET',
        dataType: 'html',
        success: function(content) {
            closeLoadingSign();
            $('#mainContent').html(content);
            scrollToTop();
        },
        failure: function() {
            alert('Something wrong with the server bro...');
        }
    });

}



function lookup_profile_request(username) {

    let lookup_url = `/user/request_profile/${username}/`;
    // alert('looking up ' + username + '\n' + url);

    showLoadingSign();
    clearNavbarHighlight();
    document.getElementById("nav-requests").classList.add("active");
    $.ajax({
        url: lookup_url,
        type: 'GET',
        dataType: 'html',
        success: function(content) {
            closeLoadingSign();
            $('#mainContent').html(content);
            scrollToTop();
        },
        failure: function() {
            alert('Something wrong with the server bro...');
        }
    });


}