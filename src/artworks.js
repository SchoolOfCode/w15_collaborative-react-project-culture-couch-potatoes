import Colossus from "./objects/Colossus.jpg"
import Nebra_Scheibe from "./objects/nebra.png"
import alternatives from "./objects/alternatives.jpg"
import Tabula from "./objects/Tabula.jpg"


let artworks = [
    {
        id: 1,
        size: [7.5,5],
        title: "Colossus Computer",
        author:"",
        year: "C. 1945 AD",
        image: Colossus,
        description:"Colossus was a set of computers developed by British codebreakers in the years 1943–1945 to help in the cryptanalysis of the Lorenz cipher. Colossus used thermionic valves (vacuum tubes) to perform Boolean and counting operations. Colossus is thus regarded as the world's first programmable, electronic, digital computer, although it was programmed by switches and plugs and not by a stored program. Colossus was designed by General Post Office (GPO) research telephone engineer Tommy Flowers to solve a problem posed by mathematician Max Newman at the Government Code and Cypher School (GC&CS) at Bletchley Park.",
    },
    {   id: 2,
        size: [8,8],
        title:"Nebra Sky Disk",
        author:"",
        year:"1600 BC" ,
        image: Nebra_Scheibe,
        description:"The Nebra sky disk is a bronze disk of around 30 centimetres diameter and  2.2 kilograms in weight, having a blue-green patina and inlaid with gold symbols. The disk has been attributed to a site in present-day Germany near Nebra, Saxony-Anhalt, and was originally dated by archaeologists to c. 1600 BCE. Researchers initially suggested the disk is an artifact of the Bronze Age Unetice culture, although a later dating to the Iron Age has been proposed as well.The Nebra sky disk features the oldest concrete depiction of the cosmos yet known from anywhere in the world."
    },
    {
        id: 3,
        size: [10,6],
        title: "Tabula Rogeriana",
        author:"",
        year:"1154 AD",
        image:Tabula,
        description:"The Excursion of One Who is Eager to Traverse the Regions of the World, commonly known in the West as the Tabula Rogeriana, is a description of the world and world map created by the Arab geographer Muhammad al-Idrisi in 1154. Al-Idrisi worked on the commentaries and illustrations of the map for fifteen years at the court of the Norman King Roger II of Sicily, who commissioned the work around 1138."
    },
    {
        id: 4,
        size: [4,5],
        title:"Alternatives",
        author: "Espen Kluge",
        year:"2019 AD",
        image: alternatives,
        description:"The ‘alternatives’ is a portrait series consisting of 100 portraits generated in Javascript. The algorithm draws vectors based on data collected from photographs sourced online. The results are abstract portraits that tells stories alternative to their origins."
    },
    
]

export default artworks