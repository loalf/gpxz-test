window.onload = async () => {
    const polyline = 'mqdfFv`r\sItDqK~F{JnFmKdG_JbJoIxJ}I~IsGzLUlM}IZ}D_KuBgCkBbEqEkMgJk@yI?wFtL}@bPoBbPcAjJcEdMsAlE'
    const gpxzResponse = await fetch("https://api.gpxz.io/v1/elevation/points?" + new URLSearchParams({'polyline': polyline}), {
        headers: {
            "x-api-key": "YOUR_KEY"
        }
    })

}