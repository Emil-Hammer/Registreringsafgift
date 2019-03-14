let pris = <HTMLInputElement> document.getElementById("pris")
let BeregnAfgift_btn = document.getElementById("btn")
let bilvalg = <HTMLSelectElement>document.getElementById("bilvalg")
let afgiftTekst = <HTMLParagraphElement> document.getElementById("afgiftTekst")
let tæller = <HTMLParagraphElement> document.getElementById("tæller")

BeregnAfgift_btn.addEventListener("click", UdregnAfgift)

function UdregnAfgift(){
tæller.innerHTML = String((Number(tæller.innerHTML)+1));

if(bilvalg.value == "personbil"){
afgiftTekst.innerHTML = "Afgift: " + BilAfgift(Number(pris.value));
console.log("123");

}
if(bilvalg.value == "elbil"){
afgiftTekst.innerHTML = "Afgift: " + (BilAfgift(Number(pris.value)) * 0.2);
}
}

function BilAfgift(prisFraInput: number){
if(prisFraInput <= 200000){
    console.log("Under 200 tusind")
    return prisFraInput * 0.85
}
else if(prisFraInput > 200000){
    console.log("Over 200 tusind");
    
    return prisFraInput * 1.5 - 130000;
}
}