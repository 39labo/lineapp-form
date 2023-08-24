$(document).ready(function () {
    var liffId = "2000512931-18qDEelg";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントでログインするか、LINEアプリから開いてください。");
                liff.login({redirectUri: location.href});
            }else{
                const accessToken = liff.getAccessToken();
                var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc3PZd4l5N-1FQSB6Cahw8lvCYui6-AdjJ4VrB46QhcTlSduA/viewform?embedded=true&usp=pp_url&entry.1009335277='+accessToken;
                var iframe = document.querySelector('iframe');
                iframe.setAttribute('src', formUrl);
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed: ' + err);
        });
}