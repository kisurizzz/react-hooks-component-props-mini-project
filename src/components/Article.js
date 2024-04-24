import React from "react";

function Article({title, date = 'January 1, 1970', preview ,minutes}){
    const emoji = getEmoji(minutes); // Call function to get emoji
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}. {emoji}{minutes} min read</small>
            <p>{preview}</p>
        </article>
    )

}

function getEmoji(minutes){
    if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5); // Round up to nearest 5 minutes
        return "☕️".repeat(coffeeCups); // Repeat emoji based on coffeeCups
      } else {
        const bentoBoxes = Math.ceil(minutes / 10); // Round up to nearest 10 minutes
        return "🍱".repeat(bentoBoxes); // Repeat emoji based on bentoBoxes
      }
}

export default Article 