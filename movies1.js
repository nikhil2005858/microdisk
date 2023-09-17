
function mv(minfo){
  let mvi= {
                 AvengerEndGame:["Avengers EndGame","https://images6.alphacoders.com/948/948861.jpg","https://www.youtube.com/embed/TcMBFSGVi1c"],
                 InfinityWar:["Infinity War","https://wallpapers.com/images/featured/avengers-infinity-war-4k-q2mik92nipxepl5i.webp","https://www.youtube.com/embed/6ZfuNTqbHE8"],
                 TLT:["Thor Love & Thunder","https://images3.alphacoders.com/124/1241167.png","https://www.youtube.com/embed/Go8nTmfrQd8"],
                 Thor:["Thor","https://images5.alphacoders.com/487/487234.jpg","https://www.youtube.com/embed/JOddp-nlNvQ"],
                 TTDW:["Thor Dark World","https://wallpaperaccess.com/full/645154.jpg","https://www.youtube.com/embed/npvJ9FTgZbM"],
                 TR:["Thor Ragnork","https://images6.alphacoders.com/115/thumb-1920-1156339.jpg","https://www.youtube.com/embed/ue80QwXMRHg"],
                 IronMan:["IronMan","https://wallpapercave.com/wp/wp2547005.jpg","https://www.youtube.com/embed/8ugaeA-nMTc"],
                 IronMan2:["IronMan2","https://wallpapercave.com/wp/AFtCNLt.jpg","https://www.youtube.com/embed/wKtcmiifycU"],
                 TheAvengers:["TheAvengers","https://wallpapers.com/images/featured/4k-avengers-gx5riyd6eqklm4hf.jpg","https://www.youtube.com/embed/eOrNdBpGMv8"],
                 AgeofUltron:[" Avengers Age of Ultron","https://images2.alphacoders.com/589/thumbbig-589553.webp","https://www.youtube.com/embed/tmeOjFno6Do"],
                 Civilwar:["Civilwar","https://c4.wallpaperflare.com/wallpaper/328/294/532/iron-man-and-captain-america-civil-war-movie-hd-desktop-wallpaper-2560%C3%971440-wallpaper-preview.jpg","https://www.youtube.com/embed/dKrVegVI0Us"],
                 WinterSoldier:[" Winter Soldier","https://c4.wallpaperflare.com/wallpaper/183/764/44/captain-america-the-winter-soldier-captain-america-nick-fury-black-widow-wallpaper-preview.jpg","https://www.youtube.com/embed/7SlILk2WMTI"],
                 BlackPanther:["Black Panther","https://wallpaperaccess.com/full/54038.png","https://www.youtube.com/embed/xjDjIWPwcPU"],
                 WakandaForever:["Wakanda Forever","https://clutchpoints.com/_next/image?url=https%3A%2F%2Fwp.clutchpoints.com%2Fwp-content%2Fuploads%2F2022%2F10%2FWakanda-Forever-need-to-deliver-for-Marvel-fans.jpeg&w=3840&q=75","https://www.youtube.com/embed/_Z3QKkl1WyM"],
                 DoctorStrange:["Doctor Strange","https://c4.wallpaperflare.com/wallpaper/356/594/366/dr-strange-marvel-comics-marvel-cinematic-universe-marvel-super-heroes-hd-wallpaper-preview.jpg","https://www.youtube.com/embed/h7gvFravm4A"],
                 SpiderMan:["Spider-Man","https://cdn.wallpapersafari.com/96/12/v5ZkSV.jpg","https://www.youtube.com/embed/_yhFofFZGcc"],
                 SpiderMan2:["SpiderMan-2","https://images7.alphacoders.com/131/1317406.jpeg","https://www.youtube.com/embed/1s9Yln0YwCw"],
                 SpiderMan3:["SpiderMan3","https://images5.alphacoders.com/131/1314090.jpeg","https://www.youtube.com/embed/e5wUilOeOmg"],
                 NoWayHome:["Spider-Man: No Way Home","https://c4.wallpaperflare.com/wallpaper/192/194/513/spiderman-no-way-home-no-way-home-december-hd-wallpaper-preview.jpg","https://www.youtube.com/embed/JfVOs4VSpmA"],
                 Multiverse:["Doctor Strange in the Multiverse of Madness","https://images3.alphacoders.com/121/1213553.jpg","https://www.youtube.com/embed/aWzlQ2N6qqg"]
               };
              let form = `
              <html>
              <style>
              body{
                color:red;
                background-repeat: no-repeat;
                background-attachment: fixed;

              }
            
              button{
                height:50px;
                width:100px;
                background-color:rgb(226, 43, 134);
                border-radius:15px;
                border: hidden;
              }
              a{
                color:white;
                font-size:20px
              }
              </style>
              <body id='im' background="">
              <button ><a href="new12.html">HOME</a></button>
  
              <center>
              <div>
    <h1 style="size: 100PX;  font-family: Verdana, Geneva, Tahoma, sans-serif;"  id='titl'> </h1>
     <h2 style="color:red;   font-family: Verdana, Geneva, Tahoma, sans-serif;" id='tril'> </h2>
     <iframe id="yousrc" src="" frameborder="0"  width="620" height="415"> </iframe></BR>
     <button style="margin-top:20px;">DOWNLOAD</button>
     </div>
     </center>
     </body>
  
              </html>`;
              document.write(form);
               
              var bimg = document.getElementById("im");
              bimg.background= mvi[minfo][1];
              document.getElementById('titl').innerHTML="Title : "+mvi[minfo][0];
              document.getElementById('tril').innerHTML="Watch "+mvi[minfo][0]+" Trialer";
              document.getElementById('yousrc').src=mvi[minfo][2];
  
              }
              function ch() {
                let g =document.getElementsByClassName('item');
                let inp =document.getElementById('sch').value
                inp=inp.toLowerCase();
                for (let i=0;i<g.length;){ 
                let cg=g[i].innerHTML.toLowerCase();
                if (!cg.includes(inp)) {
                       g[i].style.display="none";
                       }
                else {
                       g[i].style.display="inline-block";                 
                     }
                     i++
                        }
                      }


      