

  
  document.addEventListener("DOMContentLoaded", function() {
    const button=document.getElementById("revealButton");
    button?.addEventListener("click", function() {
        const text =`I never knew this kind of happiness existed,
Until the day I met you.
Just hearing your voice, seeing your smile,
Shines a light within me, even on my darkest days.
I never imagined that writing a poem could bring such bliss,
Yet, here I am, overwhelmed by the joy it brings.
I can't fathom the patience I've discovered within myself,
Waiting for your message,
Each moment an adventure,
Blissfully improving my heart with every word.
I never imagined watching esports with someone could be so much fun,
The flicks and the crazy rounds each tell their own story,
And I get so excited just to share them with you.
I never imagined I would crave to share my whole day with another,
Until the day Ceci entered my story.
I never knew I had so much kindness and care within me,
Until I found her, and she brought out the child in me.
 
If fate’s design holds true and no one else intrudes,
I yearn to spend a lifetime by her side,
Embracing each day with boundless joy,
Turning every dream and imagination into reality
In every breath and heartbeat,
I wish to treasure our moments,
Forever grateful for the serendipity
That allowed me to be part of her life
`;
        let index = 0;
        const speed = 130; //milliseconds
        const typewriterElement = document.getElementById("typewriter");
        document.body.classList.remove("not-loaded");
         button.style.display = "none";
         const header=document.getElementById("header");
         header.style.display = "block";
         header?.classList.add("animate__animated")
         header?.classList.add("animate__repeat-2")
         header?.classList.add("animate__pulse")
        function typeWriter() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
        setTimeout(typeWriter, 2000);
    
        
    })
  
});
