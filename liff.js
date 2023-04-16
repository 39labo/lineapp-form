import { createWidget } from '@typeform/embed'
import '@typeform/embed/build/css/widget.css'

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
                        createWidget("DTtj9iZt", {
                            container: document.getElementById("tf-wrapper"),
                            hidden: {
                                user_id: profile.userId,
                                name: profile.displayName
                            },
                          })
                    })
                    .catch((err) => {
                        window.alert(err);
                    });
                
            }
        })
        .catch((err) => {
            document.getElementById('answer').value = 'LIFF Initialization failed ' + err;
        });
}