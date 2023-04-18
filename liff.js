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
                        console.log(profile);
                        var formUrl = 'https://forms.gle/UUnapwTmTfNPSwjC6?embedded=true&usp=pp_url&c'+profile.userId+'&entry.2046105793='+profile.displayName;
                        var wrapper = document.getElementById('tf-wrapper');
                        var iframe = document.createElement('iframe');
                        iframe.setAttribute('src', formUrl);
                        wrapper.appendChild(iframe);
                    }).catch((err) => {
                        window.alert('Error getting profile: ' + err);
                    });
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed: ' + err);
        });
}