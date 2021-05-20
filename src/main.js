document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('create').addEventListener('click', makeBlock);
    var data;  
    var step = 10;
    var item = 10;
    var imageSrc;
    

    window.addEventListener('load', function() {
        document.getElementById('image').addEventListener('change', function() {
            if (this.files && this.files[0]) {
                
                imageSrc = URL.createObjectURL(this.files[0]); // set src to  
                document.querySelector("label").style.backgroundImage = "url(" + imageSrc + ")";
              
              }
        });
      });
   
   

    function Block(a, b, c, d, e) {
        this.heading = b;
        this.text = c;
        this.link = d;
        this.imageSrc = e;
        
        this.form = function () {
          document.getElementById('blocks').insertAdjacentHTML('afterbegin', a);
          document.querySelector('.heading_inner').innerHTML = b;
          document.querySelector('.text_inner').innerHTML = c;
          document.getElementById('myLink').href = d;
          document.getElementById('newImage').src = e;
        }
       
    }
  
    function makeBlock() {
        var heading =  document.getElementById('heading').value;
        var text = document.getElementById('text').value;
        var link = document.getElementById('link').value;
        
        var blockForm = '<div class="block"><a id = "myLink" href = ""><div class="link"><div  class="image_inner"><img id= "newImage" src="" alt=""></div><div class="heading_inner"></div><div class="text_inner"></div>';
       
        if(heading<1 || text<1 || document.getElementById('image').value < 1){
            alert("добавьте данные");
        }
        
        else if (!heading.match(/^[а-яА-яёЁіІїЇєЄ\'\.\-\!\?\,0-9_ ]+$/) || !text.match(/^[а-яА-яёЁіІїЇєЄ\'\.\-\!\?\,0-9_ ]+$/)) {
            alert("используйте кириллицу");
        }
      
      
        else {
            var block = new Block(blockForm, heading, text, link, imageSrc );
            block.form();
            Clear('input');
            Clear('textarea');

            data = Array.from(document.querySelectorAll('.blocks .block'));
           
            data.slice(item).forEach(e => e.style.display = 'none');
 
            if(data.length  > item)
                document.querySelector('.more').style.display = 'block'; 
 
        }
       
     
    }

    document.querySelector('.more').addEventListener('click', function(e){
                
        var moreData = data.slice(item, item + step);
        moreData.forEach(e => e.style.display = 'block');
        item += step;
        if(item > data.length)
            this.style.display = 'none';
        
    });

    function Clear(id) {
        document.querySelectorAll(id).forEach(function (item) {
            item.value = "";
        });
        document.querySelector("label").style.backgroundImage = "";
    }
    
    
      
});