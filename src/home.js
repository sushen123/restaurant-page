
import BackgroundImage from "./back-image.jpg";
import ProfilePicture from "./profile.png";
export default function homeDetails(existingContent) {
   
    function backgroundImageFn() {
    existingContent.style.backgroundImage = `url(${BackgroundImage})`;;
    existingContent.style.backgroundSize = 'cover';  // Adjust to your preference
    existingContent.style.backgroundPosition = 'center';  // Adjust to your preference
    // existingContent.style.color = 'white';
    
    return existingContent;
    }
    backgroundImageFn();

    function profilePicutre() {
        const profileDiv = document.createElement("div");
        const textDiv = document.createElement("div");
        textDiv.classList.add("text-div");
        textDiv.innerHTML = `<h2> This is my restaurant-page made by using javascript only</h2>`;
        profileDiv.classList.add("profile-div");
        const profile = new Image();
        profile.classList.add("profile-picture");
        profile.src = ProfilePicture;
        profileDiv.appendChild(textDiv);
        profileDiv.appendChild(profile);
        return profileDiv;
    }
    existingContent.appendChild(profilePicutre());
        

   }


