//or import {createApp} from Vue;
 
//   Vue. createApp({})
 

Vue.createApp({
    
        methods:{
             changeImage() {
                var image=document.getElementById('img');
                if(image.src.match("ONbulb"))
                    image.src=
            "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
                else
                    image.src=
            "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
            }
        
        }
    
    // hooking html element to vue
 }).mount ('#light');

