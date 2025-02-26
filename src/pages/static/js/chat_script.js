function open_chat(username) {
    // alert('opening chat of: ' + username);

    showLoadingSign();
    clearNavbarHighlight();
    document.getElementById("nav-requests").classList.add("active");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            closeLoadingSign();
            $('#mainContent').html(response);
            // document.getElementById("mainContent").innerHTML = response;
        }
    };
    scrollToTop();

    let chat_url = `/user/chat/dialogs/${username}`;

    xhttp.open("GET", chat_url, true);
    xhttp.send();
}


function search_messages() {
    var input, container_classname, value_classname, filter, i;
    // console.log('searching');
    input = document.getElementById('search_messages_input');
    value_classname = 'name_container';

    filter = input.value.toUpperCase().trim();
    let all_messages = document.getElementsByClassName("user_box");

    for (i = 0; i < all_messages.length; i++) {

        let value = all_messages[i].getElementsByClassName(value_classname)[0];
        value = value.innerText.toUpperCase().trim();
        console.log('value ' + value);

        let user_cell_element = all_messages[i];

        if (value.indexOf(filter) > -1) {
            user_cell_element.style.display = "block";
        } else {
            user_cell_element.style.display = "none";
        }

    }
}


function search_friends() {
    var input, container_classname, value_classname, filter, i;
    // console.log('searching');
    input = document.getElementById('search_friends_input');
    value_classname = 'name_container';

    filter = input.value.toUpperCase().trim();
    let all_messages = document.getElementsByClassName("new_message_user_box");

    for (i = 0; i < all_messages.length; i++) {

        let value = all_messages[i].getElementsByClassName(value_classname)[0];
        value = value.innerText.toUpperCase().trim();
        console.log('value ' + value);

        let user_cell_element = all_messages[i];

        if (value.indexOf(filter) > -1) {
            user_cell_element.style.display = "block";
        } else {
            user_cell_element.style.display = "none";
        }

    }
}

function addMessagesModal() {
    // Get the modal
    var modal = document.getElementById("add_messages_modal");
    // // When the user clicks the button, open the modal 
    modal.style.display = "block";
    // Get the cancel button
    var close = document.getElementById("close_button");

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
        modal.style.display = "none";
    }

}