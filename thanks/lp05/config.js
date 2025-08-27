// LP05用 CR別LINE URL設定
const LP_CONFIG = {
    lineUrls: [
        "https://sq0y3fdr.autosns.app/addfriend/s/TMsBbLSIGK/@242vlyzl", // CR01
        "https://sq0y3fdr.autosns.app/addfriend/s/Z6NMokPU7d/@242vlyzl", // CR02
        "https://sq0y3fdr.autosns.app/addfriend/s/d7EdcojAi3/@242vlyzl", // CR03
        "https://sq0y3fdr.autosns.app/addfriend/s/VHZzsbuNL1/@242vlyzl", // CR04
        "https://sq0y3fdr.autosns.app/addfriend/s/NhZQ5mk9ov/@242vlyzl", // CR05
        "https://sq0y3fdr.autosns.app/addfriend/s/NCXOwJr3Fg/@242vlyzl", // CR06
        "https://sq0y3fdr.autosns.app/addfriend/s/y7oRBSlf6u/@242vlyzl", // CR07
        "https://sq0y3fdr.autosns.app/addfriend/s/tS5p7abGji/@242vlyzl", // CR08
        "https://sq0y3fdr.autosns.app/addfriend/s/V5NLmjo6Cf/@242vlyzl", // CR09
        "https://sq0y3fdr.autosns.app/addfriend/s/vuC2OAPewd/@242vlyzl", // CR10
        "https://sq0y3fdr.autosns.app/addfriend/s/C5j4Rx1neS/@242vlyzl", // CR11
        "https://sq0y3fdr.autosns.app/addfriend/s/fUA8WeRoKq/@242vlyzl", // CR12
        "https://sq0y3fdr.autosns.app/addfriend/s/SuU5jxf6Ds/@242vlyzl", // CR13
        "https://sq0y3fdr.autosns.app/addfriend/s/ja2riIE7ex/@242vlyzl", // CR14
        "https://sq0y3fdr.autosns.app/addfriend/s/NK5w8xP1dY/@242vlyzl"  // CR15
    ],
    
    // デフォルトのLINE URL（パラメータが無い場合）
    defaultLineUrl: "https://sq0y3fdr.autosns.app/addfriend/s/TMsBbLSIGK/@242vlyzl",
    
    // CR番号からLINE URLを取得する関数
    getLineUrl: function(crNumber) {
        if (crNumber >= 1 && crNumber <= 15) {
            return this.lineUrls[crNumber - 1];
        }
        return this.defaultLineUrl;
    },
    
    // 現在のURLパラメータからCR番号を取得
    getCurrentCrNumber: function() {
        const urlParams = new URLSearchParams(window.location.search);
        const crParam = urlParams.get('cr');
        return crParam ? parseInt(crParam) : 1;
    },
    
    // 現在のCRに対応するLINE URLを取得
    getCurrentLineUrl: function() {
        return this.getLineUrl(this.getCurrentCrNumber());
    }
};
