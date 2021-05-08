document.addEventListener("DOMContentLoaded", function(){
    fetchInfoConsegneVacciniLatest();
    fetchInfoVacciniSummaryLatest();
    fetchInfoSomministrazioniVacciniLatest();
    fetchInfoLastUpdateDataset();
});


function fetchInfoConsegneVacciniLatest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 404) {
            alert("Errore nel recupero dei dati");
        }
        if (this.readyState == 4 && this.status == 200) {
            jsonRicevuto = JSON.parse(this.responseText);

            mostra_dosi_consegnate(jsonRicevuto);

        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/consegne-vaccini-latest.json", true);
    xhttp.send();
};

function fetchInfoVacciniSummaryLatest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 404) {
            alert("Errore nel recupero dei dati");
        }
        let somministrazioni_totali = 0;
        if (this.readyState == 4 && this.status == 200) {
            var jsonRicevuto = JSON.parse(this.responseText);

            fill_regioni_tab(jsonRicevuto)





        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json", true);
    xhttp.send();
};

function fetchInfoSomministrazioniVacciniLatest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 404) {
            alert("Errore nel recupero dei dati");
        }
        let dati_fornitori_pd = {};
        let dati_fornitori_sd = {};
        let tot_vaccinati = 0 ;
        if (this.readyState == 4 && this.status == 200) {
            jsonRicevuto = JSON.parse(this.responseText);

            for (let i = 0; i < jsonRicevuto.data.length; i++) {

                dati_fornitori_pd[jsonRicevuto.data[i].fornitore] = (dati_fornitori_pd[jsonRicevuto.data[i].fornitore] || 0) + jsonRicevuto.data[i].prima_dose;
                dati_fornitori_sd[jsonRicevuto.data[i].fornitore] = (dati_fornitori_sd[jsonRicevuto.data[i].fornitore] || 0) + jsonRicevuto.data[i].seconda_dose;


                //Somma per vaccinati totali
                if( jsonRicevuto.data[i].fornitore == "Janssen"){
                    tot_vaccinati += jsonRicevuto.data[i].prima_dose
                } else {
                    tot_vaccinati += jsonRicevuto.data[i].seconda_dose
                }
                
            }
            document.getElementById("tot-persone").innerHTML = tot_vaccinati.toLocaleString("it");
            calcola_perc(tot_vaccinati);
            mostra_dosi_tabella(dati_fornitori_pd, dati_fornitori_sd)
            /* Mi servono: Dosi consegnate, dosi somministrate, 1° dose, 2° dose, somma 2° dose se != jensen */
        }

    };
    xhttp.open("GET", "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-latest.json", true);
    xhttp.send();
};

function fetchInfoLastUpdateDataset() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 404) {
            alert("Errore nel recupero dei dati");
        }
        if (this.readyState == 4 && this.status == 200) {
            jsonRicevuto = JSON.parse(this.responseText);
            var millis = Date.parse(jsonRicevuto.ultimo_aggiornamento);
            var d = new Date(millis);
            document.getElementById("ora-aggiornamento").innerHTML = d.toLocaleDateString("it");
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/last-update-dataset.json", true);
    xhttp.send();
}
