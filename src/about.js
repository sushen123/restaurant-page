
export default function aboutDetails(existingcontent){
    function aboutSection(){
        const aboutDiv = document.createElement("div");
        aboutDiv.classList.add("about-sec");
        aboutDiv.innerHTML=
        `<h1>OUR STORY</h1>
        <p>Sushen Restaurant offers a dining ambiance tthat is both elegatn and welcoming. Designed with you comfort in mind, our dinning room invites you to relax invites you to relax and enjoy the pleasures of gournet cuisine in a warm, inviting atmosphere. Whether you're clelebrating a special occasion or simply treating yourself to an exceptional meal, our restaurant is the perfect backdrop for any event.</p>
        <h1>SUSTAINABILITY EFFORTS</h1>
        <p> We are dedicated to not just seving delicious food but also to making a positive impact on the environment. Our sustainablitiy efforts include reducing waste, recycling, and composting, as well as supoprting local farmers and producers. Dining at Gourmet Haven means supporting a business that cares about the planet</p>
        <h1>JOIN US </h1>
        <p> At Gourmet Haven, every meal is a celebration of life's finest moments. We invite you to join us for an unforgettable dining experience where the art of food and the joy of companionship come togheth in perfect harmony. Book your table today and discover the magic of Gournet Haven where visit a journey to remember. For reservations, private events, and inquiries, please contact us at[Contact Information] to say updated on our latest offferings and events. We look to welcomming you to Sushen Restaurant</p>
       `;
        
        return aboutDiv;
    }
    existingcontent.appendChild(aboutSection());
    
}
