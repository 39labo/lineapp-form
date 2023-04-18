$(document).ready(function () {
    var liffId = "1660902973-O0nlK4Pm";
    initializeLiff(liffId);
})

window.onload = function() {
    var iframe = document.querySelector('iframe');
    iframe.onload = function() {
        alert( '読み込み完了' );
        var elem = this.contentWindow.document.querySelector('.nYdzXd');
        console.log(elem);
        if (elem) {
            elem.style.visibility = 'hidden';
        } else {
            console.log('cant find elem');
        }
        var field = this.contentWindow.document.querySelectorAll('div[role=listitem]:nth-child(1),div[role=listitem]:nth-child(2)');
        for (var f in field) {
            field[f].style.visibility = 'hidden';
            field[f].style.height = 0;
        }
    }
}

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // Webブラウザからアクセスされた場合は、LINEにログインする
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }else{
                liff.getProfile()
                    .then((profile) => {
                        var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSengIKFHfwaRHsqHLe7E776kG8b7jLU6_COZ_7uCUrQIuEd7Q/viewform?embedded=true&usp=pp_url&entry.1916663609='+profile.userId+'&entry.2046105793='+profile.displayName;
                        var iframe = document.querySelector('iframe');
                        iframe.setAttribute('src', formUrl);
                        iframe.contentWindow.onload = function() {
                            console.log('load');
                        };
                    }).catch((err) => {
                        window.alert('Error display form: ' + err);
                    });
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed: ' + err);
        });
}