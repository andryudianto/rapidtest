var arrTag1 = ["Linux", "Javascript", "camelCase", "Intel", "Ios", "Processor", "Front-End", "Menonton tutorial"]

var arrTag2 = ["Windows", "Python", "snake_case", "AMD", "Android", "VGA", "Back-End", "Membaca dokumentasi"]

var arrLink1 = ["img/linux.jpeg", "img/javascript.png", "img/camel.png", "img/intel.jpeg", "img/ios.png", "img/processor.jpeg", "img/frontend.png", "img/tutorial.jpg"]

var arrLink2 = ["img/windows.png", "img/python.png", "img/snake.png", "img/amd.jpeg", "img/android.png", "img/vga.jpg", "img/backend.png", "img/documentation.png"]

var arrAlert1 = ["Pilihan OS yang tepat untuk di Hacktiv8", "Fullstack Javascript", "Behubungan erat dengan javascript", "Processor para programmer", "Anda membeli brad dan keindahan", "Ini yang di utamanakn oleh programmer", "Anda sangat memperhatikan penampilan", "Anda orangnya visualis"]
var arrAlert2 = ["Hmmm,, The next Windows Warior", "Part time python programming saja,", "Berhubungan erat dengan python", "Anda suka gaming?", "Anda membeli spek", "Anda seorang gamer / designer", "Logic anda sangat hebat", "Anda orannya penyendiri"]

var buttonSatu = document.getElementById('btn-satu')
var buttonDua = document.getElementById('btn-dua')
var buttonResult = document.getElementById('btn-result')

    var cek = false
    buttonSatu.addEventListener('click', function(){
        cek = true
        var randomNumber = Math.floor(Math.random() * 
        (arrTag1.length))
        document.getElementById('tagNameSatu').innerText = arrTag1[randomNumber]
        document.getElementById('tagNameDua').innerText = arrTag2[randomNumber]
        document.getElementById('gambar1').src = arrLink1[randomNumber]
        document.getElementById('gambar2').src = arrLink2[randomNumber]
        if (cek){
            buttonResult.addEventListener('click', function(){
                document.getElementById('result').innerText = arrAlert1[randomNumber]
            })
        }
    })
    
    buttonDua.addEventListener('click', function(){
        cek = true
        var randomNumber = Math.floor(Math.random() * (arrTag1.length - 1))
        document.getElementById('tagNameSatu').innerText = arrTag1[randomNumber]
        document.getElementById('tagNameDua').innerText = arrTag2[randomNumber]
        document.getElementById('gambar1').src = arrLink1[randomNumber]
        document.getElementById('gambar2').src = arrLink2[randomNumber]
        if (cek){
            buttonResult.addEventListener('click', function(){
                document.getElementById('result').innerText = arrAlert2[randomNumber]
            })
        }
    })



