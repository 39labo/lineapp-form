$(document).ready(function () {
    var liffId = "1660902973-O0nlK4Pm";
    initializeLiff(liffId);
})

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
                liff
                    .getProfile()
                    .then((profile) => {
                        document.getElementById('tf-wrapper')
                            .appendChild(
                                document.createElement('div')
                                .setAttribute('data-tf-widget', 'DTtj9iZt')
                                .setAttribute('data-tf-hidden', 'userId='+profile.userId+',name='+profile.displayName)
                            )
                    })
                    .catch((err) => {
                        window.alert('getProfile failed ' + err);
                    });
                
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed ' + err);
        });
}