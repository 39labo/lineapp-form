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
                const idToken = liff.getIDToken();
                console.log(idToken);
                liff.getProfile()
                    .then((profile) => {
                        var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSengIKFHfwaRHsqHLe7E776kG8b7jLU6_COZ_7uCUrQIuEd7Q/viewform?embedded=true&usp=pp_url&entry.1916663609='+profile.userId+'&entry.2046105793='+profile.displayName;
                        var iframe = document.querySelector('iframe');
                        iframe.setAttribute('src', formUrl);
                    }).catch((err) => {
                        window.alert('Error display form: ' + err);
                    });
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed: ' + err);
        });
}