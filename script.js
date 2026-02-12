*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins', sans-serif;
    min-height:100vh;
    text-align:center;
    overflow:hidden;

    background: linear-gradient(-45deg,#ff4d6d,#ff8fab,#cdb4db,#a2d2ff);
    background-size:400% 400%;
    animation:gradientMove 12s ease infinite;
}

@keyframes gradientMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

h1{
    margin-top:40px;
    font-size:2.8rem;
    color:white;
}

h1 span{
    color:#fff;
    text-shadow:0 0 15px rgba(255,255,255,0.8);
}

.card{
    width:380px;
    margin:60px auto;
    padding:40px;
    border-radius:30px;
    backdrop-filter:blur(20px);
    background:rgba(255,255,255,0.2);
    box-shadow:0 8px 40px rgba(0,0,0,0.3);
    color:white;
}

.gif{
    width:160px;
    margin-bottom:20px;
}

.buttons{
    margin-top:25px;
    position:relative;
    height:120px;
}

button{
    padding:14px 28px;
    border:none;
    border-radius:50px;
    cursor:pointer;
    font-size:18px;
    position:absolute;
    transition:0.3s ease;
}

.yes-button{
    background:#ff2e63;
    color:white;
    left:20%;
    box-shadow:0 6px 25px rgba(255,46,99,0.6);
}

.no-button{
    background:#555;
    color:white;
    left:55%;
}

button:hover{
    transform:scale(1.1);
}

/* Floating hearts */
.floating-hearts::before{
    content:"💖 💗 💘 💕 💓 💞";
    position:absolute;
    width:100%;
    font-size:2rem;
    opacity:0.3;
    animation:float 20s linear infinite;
}

@keyframes float{
    0%{transform:translateY(100vh);}
    100%{transform:translateY(-10vh);}
}

/* Mobile */
@media(max-width:480px){
    .card{
        width:90%;
        padding:30px;
    }
}
